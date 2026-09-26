import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WatchView } from "@/components/watch-view";
import { getRelatedVideos, getVideo } from "@/lib/data";
import { getWatchDetails } from "@/lib/watch-data";

export async function generateMetadata({
  params,
}: PageProps<"/watch/[id]">): Promise<Metadata> {
  const { id } = await params;
  const video = getVideo(id);

  if (!video) {
    return { title: "Watch | BookTube" };
  }

  return {
    title: `${video.title} | BookTube`,
    description: `Watch ${video.title} on BookTube.`,
  };
}

export default async function WatchPage({ params }: PageProps<"/watch/[id]">) {
  const { id } = await params;
  const video = getVideo(id);

  if (!video) {
    notFound();
  }

  return (
    <WatchView
      video={video}
      related={getRelatedVideos(video.id)}
      details={getWatchDetails(video.id)}
    />
  );
}
