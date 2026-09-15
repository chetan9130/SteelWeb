I want to add an AUTOMATIC YOUTUBE VIDEO SYNC SYSTEM to my existing website.

IMPORTANT:
- This is an EXISTING project.
- Do NOT create a new project.
- First inspect the existing project architecture, framework, routes, components and Videos section.
- Preserve all existing functionality.
- Implement this feature cleanly so it can later be connected to the existing backend/admin system.

==================================================
GOAL
==================================================

Whenever the client uploads a NEW VIDEO to their configured YouTube channel, the website should automatically detect the new video and display it in the website's Videos section.

Desired flow:

CLIENT UPLOADS VIDEO TO YOUTUBE
             ↓
YOUTUBE CHANNEL
             ↓
SYSTEM DETECTS NEW VIDEO
             ↓
FETCH VIDEO INFORMATION
             ↓
STORE/SYNC VIDEO
             ↓
WEBSITE VIDEOS SECTION
             ↓
NEW VIDEO AUTOMATICALLY APPEARS

The client should NOT have to manually create a video post on the website.

==================================================
YOUTUBE DATA
==================================================

For every synced YouTube video, retrieve:

- YouTube video ID
- Video title
- Description
- Thumbnail
- Published date
- Channel name
- YouTube URL
- Duration
- Category if available

Use the YouTube Data API v3.

Do NOT download or duplicate the actual YouTube video.

The website should embed/play the video directly from YouTube.

==================================================
ADMIN CONFIGURATION
==================================================

Create an admin configuration for the YouTube channel.

Example:

YouTube Channel ID:
[ CHANNEL_ID ]

Enable Auto Sync:
[ ON / OFF ]

Sync Frequency:
[ Every 15 minutes / Every hour / Daily ]

For development, make the sync function easy to trigger manually.

Add:

[ Sync YouTube Videos Now ]

Display:

Last Sync:
September 15, 2026 14:30

Videos Found:
24

New Videos:
2

==================================================
ENVIRONMENT VARIABLES
==================================================

Do NOT hardcode secrets.

Create environment variables such as:

YOUTUBE_API_KEY=
YOUTUBE_CHANNEL_ID=

If required:

YOUTUBE_PLAYLIST_ID=

Keep API keys server-side.

NEVER expose YOUTUBE_API_KEY to client-side JavaScript.

==================================================
HOW TO FIND CHANNEL VIDEOS
==================================================

Use the configured YouTube Channel ID.

Retrieve the channel's uploads playlist ID.

Then retrieve videos from the uploads playlist using the YouTube Data API.

Do NOT repeatedly search YouTube using search.list if it can be avoided.

Prefer the channel's uploads playlist because it is more efficient and reliable.

Retrieve:

playlistItems.list

Then retrieve video metadata using:

videos.list

Use the uploads playlist to determine which videos are new.

==================================================
DATABASE
==================================================

If the existing project already has a database:

Create a Video model/table.

Example:

Video

- id
- youtubeVideoId
- title
- description
- thumbnail
- youtubeUrl
- publishedAt
- duration
- channelId
- category
- isPublished
- createdAt
- updatedAt

IMPORTANT:

youtubeVideoId MUST be unique.

This prevents duplicate videos.

Example:

youtubeVideoId:
"dQw4w9WgXcQ"

If that ID already exists:

DO NOT create another record.

Instead update the existing record if metadata changed.

==================================================
AUTO SYNC LOGIC
==================================================

Create a backend service:

youtubeSyncService

Example logic:

1. Read YOUTUBE_CHANNEL_ID.
2. Get the channel's uploads playlist.
3. Fetch latest videos.
4. Compare YouTube video IDs with database.
5. Identify new videos.
6. Fetch complete metadata.
7. Save new videos.
8. Update changed metadata.
9. Do not duplicate existing videos.
10. Mark videos as published.
11. Return sync result.

Example response:

{
  "success": true,
  "checked": 10,
  "newVideos": 2,
  "updatedVideos": 1
}

==================================================
SYNC ENDPOINT
==================================================

Create a secure server endpoint:

POST /api/youtube/sync

This endpoint should:

- Authenticate admin
- Run YouTube sync
- Return sync results

Example:

POST /api/youtube/sync

Response:

{
  "success": true,
  "message": "YouTube videos synchronized",
  "newVideos": 2
}

Do NOT expose this endpoint publicly without authentication.

==================================================
AUTOMATIC SYNC
==================================================

The system should automatically run the sync process periodically.

Preferred options:

1. Cron job
2. Scheduled server function
3. Existing background-job system if the project already has one

If the deployment platform supports cron jobs, use that.

For example:

Every hour:

GET/POST:

/api/youtube/sync

The system checks the channel and adds newly uploaded videos.

Do not run the YouTube API call on every website visitor.

IMPORTANT:
The website frontend should read videos from the database/API.

Do NOT call YouTube Data API directly from every visitor's browser.

==================================================
VIDEO SECTION
==================================================

Update the existing Videos section to use synced video data.

Desktop:

Show video cards similar to the existing design.

Each card:

[ YouTube Thumbnail ]

▶ Play button

Video Title

Published date

Duration

[ Watch Video ]

Clicking the video should either:

1. Open a YouTube embed modal

OR

2. Navigate to the video detail page.

Prefer a modal for the homepage.

==================================================
VIDEOS PAGE
==================================================

Create/use:

/videos

Display all synced YouTube videos.

Features:

- Search
- Category filter
- Latest videos
- Pagination or Load More
- Video cards
- Responsive layout

Sort newest videos first.

Example:

LATEST VIDEOS

┌─────────────────────────────┐
│                             │
│       YOUTUBE THUMBNAIL     │
│             ▶               │
│                             │
└─────────────────────────────┘
NEW CABIN TOUR

Take a tour of our latest...
Sep 15, 2026

[ Watch Video → ]

==================================================
HOMEPAGE VIDEO SECTION
==================================================

The homepage should automatically display the latest videos.

Example:

SEE OUR BUILDINGS IN ACTION

Take a closer look at our cabins,
barndominiums and building projects.

[ Video 1 ]
[ Video 2 ]
[ Video 3 ]
[ Video 4 ]

View All Videos →

If the client uploads a new YouTube video, it should automatically appear here after the next successful sync.

==================================================
VIDEO CATEGORIES
==================================================

Allow optional categories.

Examples:

- Building Tours
- Cabin Tours
- Construction
- Barndominiums
- Delivery
- Customer Stories
- Interior
- Other

YouTube videos can initially default to:

"Latest Videos"

Allow admin to change the category later.

==================================================
THUMBNAILS
==================================================

Use YouTube's official thumbnail URLs.

Prefer the highest available quality.

Fallback:

high.jpg
→
medium.jpg
→
default.jpg

Do not download thumbnails unnecessarily.

Use proper image optimization.

==================================================
VIDEO DETAIL
==================================================

Create:

/videos/[slug]

or:

/videos/[youtubeVideoId]

Display:

- Large YouTube player
- Video title
- Description
- Published date
- Category
- Related videos
- CTA:

GET A QUOTE →

The video player should use YouTube's embed URL.

Example structure:

https://www.youtube.com/embed/{VIDEO_ID}

Do NOT hardcode URLs.

==================================================
ADMIN VIDEO MANAGEMENT
==================================================

Create an admin Videos section.

Display:

VIDEO MANAGEMENT

------------------------------------------------

Video Title
YouTube ID
Published
Category
Status
Actions

------------------------------------------------

Admin actions:

- View
- Edit category
- Publish/unpublish
- Delete/archive local record
- Sync
- Open YouTube video

IMPORTANT:

Deleting a video from the website MUST NOT delete the video from YouTube.

It only removes/archives the local website record.

==================================================
MANUAL VIDEO ADDITION
==================================================

Also provide:

[ Add YouTube Video ]

Admin can paste:

YouTube URL

Example:

https://www.youtube.com/watch?v=XXXXXXXX

Then:

[ Fetch Video ]

Automatically retrieve:

- Title
- Thumbnail
- Description
- Published date
- Duration
- Video ID

Admin can edit:

- Category
- Website visibility

Then:

[ Publish ]

This provides a backup if automatic synchronization fails.

==================================================
DUPLICATE PROTECTION
==================================================

This is VERY IMPORTANT.

Never create duplicate videos.

Use:

youtubeVideoId

as a unique database field.

Before inserting:

if video exists:
    update metadata

else:
    create video

==================================================
ERROR HANDLING
==================================================

Handle:

- Invalid API key
- Invalid channel ID
- YouTube API quota exceeded
- Video deleted
- Private video
- Unavailable video
- Network errors
- Invalid YouTube URL
- Rate limiting

Do not crash the website if YouTube API fails.

If synchronization fails:

- Keep existing videos
- Log the error
- Show admin-friendly error
- Retry on next scheduled sync

==================================================
API QUOTA
==================================================

Use the YouTube API efficiently.

DO NOT repeatedly call expensive search endpoints.

Prefer:

channels.list
↓
uploads playlist ID

playlistItems.list
↓
video IDs

videos.list
↓
video details

Store results locally.

The website should use the database for normal page rendering.

==================================================
SECURITY
==================================================

IMPORTANT:

- YouTube API key must remain server-side.
- Never use NEXT_PUBLIC_YOUTUBE_API_KEY.
- Protect admin sync endpoint.
- Validate YouTube URLs.
- Sanitize descriptions before rendering.
- Do not trust YouTube HTML.
- Rate-limit manual sync if appropriate.

==================================================
SEO
==================================================

For video pages implement:

- title
- description
- Open Graph metadata
- canonical URL
- VideoObject schema where appropriate
- thumbnail metadata

Example VideoObject information:

- name
- description
- thumbnailUrl
- uploadDate
- duration
- embedUrl

==================================================
RESPONSIVE DESIGN
==================================================

Keep the existing website design.

Desktop:
4 video cards where appropriate.

Tablet:
2 cards.

Mobile:
1 card / horizontal carousel depending on existing design.

The video section must match the existing website's visual style:

- Dark green section
- White headings
- Red accents
- Premium building photography
- Play buttons
- Subtle hover effects

==================================================
IMPORTANT FRONTEND BEHAVIOR
==================================================

The frontend should NEVER need to know the YouTube API key.

Architecture:

YouTube
   ↓
Backend Sync Service
   ↓
Database
   ↓
Website API
   ↓
Video Components

NOT:

Browser
   ↓
YouTube API
   ↓
Frontend

==================================================
FALLBACK
==================================================

If the database/backend is not yet implemented in the existing project:

First create the frontend using mock video data.

Create the interfaces/types so the mock data can later be replaced with:

GET /api/videos

Do not block the frontend implementation.

==================================================
FINAL EXPECTED BEHAVIOR
==================================================

Example:

Client uploads:

"New Cabin Tour 2026"

to the configured YouTube channel.

After the scheduled sync:

System detects:

New Cabin Tour 2026

System automatically creates:

Video record

↓

Website homepage:

SEE OUR BUILDINGS IN ACTION

[ New Cabin Tour 2026 ]

↓

/videos page:

New Cabin Tour 2026

↓

Video detail page:

/videos/new-cabin-tour-2026

No manual website post creation should be required.

==================================================
IMPLEMENTATION RULE
==================================================

FIRST inspect the existing project.

Then:

1. Identify existing Videos components.
2. Identify existing backend/API.
3. Identify database.
4. Identify authentication/admin system.
5. Implement the Video model.
6. Implement YouTube sync service.
7. Implement secure sync endpoint.
8. Implement scheduled synchronization.
9. Connect Videos section to database/API.
10. Implement admin video management.
11. Implement manual YouTube URL addition.
12. Add duplicate protection.
13. Add error handling.
14. Test with mock data.
15. Test with a real YouTube video after API credentials are configured.
16. Test desktop and mobile.

DO NOT redesign unrelated parts of the existing website.

The final experience should be:

UPLOAD TO YOUTUBE → AUTOMATICALLY APPEARS ON WEBSITE.