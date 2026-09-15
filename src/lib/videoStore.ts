import fs from "fs";
import path from "path";
import { VideoItem, SyncStats } from "@/types/video";
import { VIDEOS_DATA } from "@/data/videos";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const FILE_PATH = path.join(DATA_DIR, "synced_videos.json");
const STATS_FILE_PATH = path.join(DATA_DIR, "sync_stats.json");

// Initial seed data mapped to VideoItem structure
const SEED_VIDEOS: VideoItem[] = VIDEOS_DATA.map((v, idx) => ({
  id: v.id,
  youtubeVideoId: "dQw4w9WgXcQ",
  title: v.title,
  category: v.category as VideoItem["category"],
  duration: v.duration,
  description: v.description,
  thumbnail: v.thumbnail,
  modelSlug: v.modelSlug,
  views: v.views || "100K views",
  date: v.date || "Recent",
  publishedAt: new Date(Date.now() - (idx + 1) * 7 * 86400000).toISOString(),
  youtubeUrl: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
  embedUrl: `https://www.youtube.com/embed/dQw4w9WgXcQ`,
  isPublished: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));

function ensureDataDirectory() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function readVideosFromStore(): VideoItem[] {
  try {
    ensureDataDirectory();
    if (!fs.existsSync(FILE_PATH)) {
      fs.writeFileSync(FILE_PATH, JSON.stringify(SEED_VIDEOS, null, 2), "utf-8");
      return SEED_VIDEOS;
    }
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      fs.writeFileSync(FILE_PATH, JSON.stringify(SEED_VIDEOS, null, 2), "utf-8");
      return SEED_VIDEOS;
    }
    return parsed;
  } catch (error) {
    console.error("Error reading synced_videos.json:", error);
    return SEED_VIDEOS;
  }
}

export function writeVideosToStore(videos: VideoItem[]): void {
  try {
    ensureDataDirectory();
    fs.writeFileSync(FILE_PATH, JSON.stringify(videos, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to synced_videos.json:", error);
  }
}

export function readSyncStats(): SyncStats {
  try {
    ensureDataDirectory();
    if (!fs.existsSync(STATS_FILE_PATH)) {
      const defaultStats: SyncStats = {
        lastSyncAt: null,
        totalFound: SEED_VIDEOS.length,
        newVideosAdded: 0,
        updatedVideos: 0,
        status: "never",
      };
      return defaultStats;
    }
    const data = fs.readFileSync(STATS_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return {
      lastSyncAt: null,
      totalFound: 0,
      newVideosAdded: 0,
      updatedVideos: 0,
      status: "never",
    };
  }
}

export function saveSyncStats(stats: SyncStats): void {
  try {
    ensureDataDirectory();
    fs.writeFileSync(STATS_FILE_PATH, JSON.stringify(stats, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving sync stats:", error);
  }
}

export function getPublishedVideos(params?: { category?: string; search?: string }): VideoItem[] {
  const videos = readVideosFromStore();
  let result = videos.filter((v) => v.isPublished);

  if (params?.category && params.category !== "All") {
    result = result.filter(
      (v) => v.category.toLowerCase() === params.category!.toLowerCase()
    );
  }

  if (params?.search && params.search.trim()) {
    const q = params.search.toLowerCase().trim();
    result = result.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
    );
  }

  // Sort newest first
  return result.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getAllVideos(params?: { category?: string; search?: string }): VideoItem[] {
  const videos = readVideosFromStore();
  let result = [...videos];

  if (params?.category && params.category !== "All") {
    result = result.filter(
      (v) => v.category.toLowerCase() === params.category!.toLowerCase()
    );
  }

  if (params?.search && params.search.trim()) {
    const q = params.search.toLowerCase().trim();
    result = result.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
    );
  }

  return result.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getVideoByIdOrSlug(idOrSlug: string): VideoItem | null {
  const videos = readVideosFromStore();
  const lower = idOrSlug.toLowerCase();
  
  return (
    videos.find(
      (v) =>
        v.id.toLowerCase() === lower ||
        v.youtubeVideoId.toLowerCase() === lower ||
        (v.modelSlug && v.modelSlug.toLowerCase() === lower)
    ) || null
  );
}

export function upsertVideo(videoData: Partial<VideoItem> & { youtubeVideoId: string }): {
  video: VideoItem;
  isNew: boolean;
} {
  const videos = readVideosFromStore();
  const existingIdx = videos.findIndex((v) => v.youtubeVideoId === videoData.youtubeVideoId);
  const now = new Date().toISOString();

  if (existingIdx >= 0) {
    const existing = videos[existingIdx];
    const updated: VideoItem = {
      ...existing,
      ...videoData,
      updatedAt: now,
    };
    videos[existingIdx] = updated;
    writeVideosToStore(videos);
    return { video: updated, isNew: false };
  } else {
    const newVideo: VideoItem = {
      id: `vid-${videoData.youtubeVideoId}`,
      youtubeVideoId: videoData.youtubeVideoId,
      title: videoData.title || "Untitled Cabin Video",
      category: videoData.category || "General",
      duration: videoData.duration || "0:00",
      description: videoData.description || "",
      thumbnail: videoData.thumbnail || "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      views: videoData.views || "New Upload",
      date: videoData.date || "Just now",
      publishedAt: videoData.publishedAt || now,
      youtubeUrl: videoData.youtubeUrl || `https://www.youtube.com/watch?v=${videoData.youtubeVideoId}`,
      embedUrl: videoData.embedUrl || `https://www.youtube.com/embed/${videoData.youtubeVideoId}`,
      channelId: videoData.channelId,
      channelTitle: videoData.channelTitle,
      isPublished: videoData.isPublished !== undefined ? videoData.isPublished : true,
      createdAt: now,
      updatedAt: now,
    };
    videos.unshift(newVideo);
    writeVideosToStore(videos);
    return { video: newVideo, isNew: true };
  }
}

export function batchUpsertVideos(videosData: Partial<VideoItem>[]): {
  newCount: number;
  updatedCount: number;
} {
  let newCount = 0;
  let updatedCount = 0;

  for (const item of videosData) {
    if (!item.youtubeVideoId) continue;
    const res = upsertVideo({ ...item, youtubeVideoId: item.youtubeVideoId });
    if (res.isNew) {
      newCount++;
    } else {
      updatedCount++;
    }
  }

  return { newCount, updatedCount };
}

export function updateVideoCategory(id: string, category: VideoItem["category"]): boolean {
  const videos = readVideosFromStore();
  const idx = videos.findIndex((v) => v.id === id || v.youtubeVideoId === id);
  if (idx < 0) return false;
  videos[idx].category = category;
  videos[idx].updatedAt = new Date().toISOString();
  writeVideosToStore(videos);
  return true;
}

export function toggleVideoPublish(id: string, isPublished?: boolean): boolean {
  const videos = readVideosFromStore();
  const idx = videos.findIndex((v) => v.id === id || v.youtubeVideoId === id);
  if (idx < 0) return false;
  videos[idx].isPublished = isPublished !== undefined ? isPublished : !videos[idx].isPublished;
  videos[idx].updatedAt = new Date().toISOString();
  writeVideosToStore(videos);
  return true;
}

export function deleteLocalVideo(id: string): boolean {
  const videos = readVideosFromStore();
  const filtered = videos.filter((v) => v.id !== id && v.youtubeVideoId !== id);
  if (filtered.length === videos.length) return false;
  writeVideosToStore(filtered);
  return true;
}
