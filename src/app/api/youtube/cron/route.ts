import { NextRequest, NextResponse } from "next/server";
import { syncYouTubeChannel } from "@/lib/youtubeService";

export async function GET(request: NextRequest) {
  try {
    const result = await syncYouTubeChannel();
    return NextResponse.json({
      cronExecutedAt: new Date().toISOString(),
      result,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Cron execution failed" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return GET(request);
}
