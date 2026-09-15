import { VideoItem, YouTubeSyncResult, SyncStats } from "@/types/video";
import { batchUpsertVideos, readVideosFromStore, saveSyncStats, upsertVideo } from "./videoStore";

// Helper to convert ISO 8601 duration (e.g. PT5M12S) to human readable (5:12)
export function parseISO8601Duration(isoDuration: string): string {
  if (!isoDuration) return "0:00";
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = isoDuration.match(regex);
  if (!matches) return "0:00";

  const hours = parseInt(matches[1] || "0", 10);
  const minutes = parseInt(matches[2] || "0", 10);
  const seconds = parseInt(matches[3] || "0", 10);

  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  if (hours > 0) {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return `${minutes}:${formattedSeconds}`;
}

// Helper to extract YouTube Video ID from any URL format
export function extractYouTubeId(urlOrId: string): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();

  // If already a clean 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Regex patterns for youtube URLs
  const patterns = [
    (/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/i),
    (/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i),
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export async function fetchYouTubeVideoByUrl(urlOrId: string): Promise<Partial<VideoItem> | null> {
  const videoId = extractYouTubeId(urlOrId);
  if (!videoId) {
    throw new Error("Invalid YouTube URL or Video ID format.");
  }

  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    // Return structured mock object if API key is not yet set
    return {
      youtubeVideoId: videoId,
      title: `Custom YouTube Video (${videoId})`,
      category: "Building Tours",
      duration: "4:30",
      description: "Imported YouTube video walkthrough. Add your YOUTUBE_API_KEY in .env.local for automatic metadata extraction.",
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      views: "1.2K views",
      date: "Just now",
      publishedAt: new Date().toISOString(),
      youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      isPublished: true,
    };
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`YouTube API returned status ${res.status}`);
    }
    const data = await res.json();
    if (!data.items || data.items.length === 0) {
      throw new Error(`No YouTube video found with ID ${videoId}`);
    }

    const item = data.items[0];
    const snippet = item.snippet;
    const contentDetails = item.contentDetails;
    const statistics = item.statistics;

    const thumbnail =
      snippet.thumbnails?.maxres?.url ||
      snippet.thumbnails?.standard?.url ||
      snippet.thumbnails?.high?.url ||
      snippet.thumbnails?.medium?.url ||
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const viewCount = statistics?.viewCount
      ? `${parseInt(statistics.viewCount, 10).toLocaleString()} views`
      : "10K views";

    return {
      youtubeVideoId: videoId,
      title: snippet.title || "YouTube Video",
      description: snippet.description || "",
      thumbnail,
      duration: parseISO8601Duration(contentDetails?.duration),
      publishedAt: snippet.publishedAt || new Date().toISOString(),
      views: viewCount,
      date: snippet.publishedAt ? new Date(snippet.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Recent",
      youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      channelId: snippet.channelId,
      channelTitle: snippet.channelTitle,
      category: "Building Tours",
      isPublished: true,
    };
  } catch (err: any) {
    console.error("fetchYouTubeVideoByUrl error:", err);
    throw new Error(err.message || "Failed to fetch YouTube video metadata.");
  }
}

export async function syncYouTubeChannel(): Promise<YouTubeSyncResult> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  // Fallback demo sync if credentials are not configured yet
  if (!apiKey || !channelId) {
    const mockUpdates: Partial<VideoItem>[] = [
      {
        youtubeVideoId: "dQw4w9WgXcQ",
        title: "2026 Amish Handcrafted Luxury Cabin Showcase",
        category: "Building Tours",
        duration: "5:45",
        description: "Explore our latest handcrafted Amish cabin with cathedral lofts, rigid-frame structural integrity, and solid oak finishes.",
        thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        views: "245K views",
        date: "Just now",
        publishedAt: new Date().toISOString(),
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        isPublished: true,
      },
      {
        youtubeVideoId: "L_LUpnjgPso",
        title: "Heavy-Duty Barndominium Frame Erection & Tour",
        category: "Construction",
        duration: "7:12",
        description: "Step-by-step video footage of assembling clear-span steel rafters and tongue-and-groove exterior cladding.",
        thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        views: "112K views",
        date: "Today",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        youtubeUrl: "https://www.youtube.com/watch?v=L_LUpnjgPso",
        embedUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
        isPublished: true,
      }
    ];

    const { newCount, updatedCount } = batchUpsertVideos(mockUpdates);
    const allVideos = readVideosFromStore();

    const stats: SyncStats = {
      lastSyncAt: new Date().toISOString(),
      totalFound: allVideos.length,
      newVideosAdded: newCount,
      updatedVideos: updatedCount,
      status: "success",
    };
    saveSyncStats(stats);

    return {
      success: true,
      message: "Sync completed using demo data (configure YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID in .env.local for live API sync).",
      checkedCount: mockUpdates.length,
      newVideosCount: newCount,
      updatedVideosCount: updatedCount,
      stats,
    };
  }

  try {
    // 1. Get channel uploads playlist ID
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
    const channelRes = await fetch(channelUrl);
    if (!channelRes.ok) {
      throw new Error(`YouTube Channel API returned ${channelRes.status}`);
    }
    const channelData = await channelRes.json();
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error(`YouTube channel with ID ${channelId} not found.`);
    }

    const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) {
      throw new Error(`Uploads playlist not found for channel ${channelId}`);
    }

    // 2. Fetch playlist items (latest 50 videos)
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=50&key=${apiKey}`;
    const playlistRes = await fetch(playlistUrl);
    if (!playlistRes.ok) {
      throw new Error(`YouTube Playlist API returned ${playlistRes.status}`);
    }
    const playlistData = await playlistRes.json();
    const items = playlistData.items || [];
    if (items.length === 0) {
      const stats: SyncStats = {
        lastSyncAt: new Date().toISOString(),
        totalFound: readVideosFromStore().length,
        newVideosAdded: 0,
        updatedVideos: 0,
        status: "success",
      };
      saveSyncStats(stats);
      return {
        success: true,
        message: "No videos found in channel uploads playlist.",
        checkedCount: 0,
        newVideosCount: 0,
        updatedVideosCount: 0,
        stats,
      };
    }

    const videoIds = items
      .map((item: any) => item.contentDetails?.videoId)
      .filter(Boolean)
      .join(",");

    // 3. Fetch full video metadata (durations, statistics, maxres thumbnails)
    const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${apiKey}`;
    const videosRes = await fetch(videosUrl);
    if (!videosRes.ok) {
      throw new Error(`YouTube Videos API returned ${videosRes.status}`);
    }
    const videosData = await videosRes.json();
    const detailedItems = videosData.items || [];

    const parsedVideos: Partial<VideoItem>[] = detailedItems.map((item: any) => {
      const vId = item.id;
      const snippet = item.snippet;
      const contentDetails = item.contentDetails;
      const statistics = item.statistics;

      const thumbnail =
        snippet.thumbnails?.maxres?.url ||
        snippet.thumbnails?.standard?.url ||
        snippet.thumbnails?.high?.url ||
        snippet.thumbnails?.medium?.url ||
        `https://img.youtube.com/vi/${vId}/hqdefault.jpg`;

      const viewCount = statistics?.viewCount
        ? `${parseInt(statistics.viewCount, 10).toLocaleString()} views`
        : "Recent Tour";

      return {
        youtubeVideoId: vId,
        title: snippet.title || "YouTube Video",
        description: snippet.description || "",
        thumbnail,
        duration: parseISO8601Duration(contentDetails?.duration),
        publishedAt: snippet.publishedAt || new Date().toISOString(),
        views: viewCount,
        date: snippet.publishedAt
          ? new Date(snippet.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
          : "Recent",
        youtubeUrl: `https://www.youtube.com/watch?v=${vId}`,
        embedUrl: `https://www.youtube.com/embed/${vId}`,
        channelId: snippet.channelId,
        channelTitle: snippet.channelTitle,
        category: "Building Tours",
        isPublished: true,
      };
    });

    const { newCount, updatedCount } = batchUpsertVideos(parsedVideos);
    const totalStored = readVideosFromStore().length;

    const stats: SyncStats = {
      lastSyncAt: new Date().toISOString(),
      totalFound: totalStored,
      newVideosAdded: newCount,
      updatedVideos: updatedCount,
      status: "success",
    };
    saveSyncStats(stats);

    return {
      success: true,
      message: `Successfully synchronized ${parsedVideos.length} videos from YouTube channel.`,
      checkedCount: parsedVideos.length,
      newVideosCount: newCount,
      updatedVideosCount: updatedCount,
      stats,
    };
  } catch (err: any) {
    console.error("YouTube Channel Sync Failed:", err);
    const stats: SyncStats = {
      lastSyncAt: new Date().toISOString(),
      totalFound: readVideosFromStore().length,
      newVideosAdded: 0,
      updatedVideos: 0,
      status: "error",
      errorMessage: err.message || "Network error while connecting to YouTube API",
    };
    saveSyncStats(stats);

    return {
      success: false,
      message: err.message || "Failed to synchronize YouTube channel.",
      checkedCount: 0,
      newVideosCount: 0,
      updatedVideosCount: 0,
      stats,
      errors: [err.message || "YouTube API Error"],
    };
  }
}
