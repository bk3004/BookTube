import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChannelView } from "@/components/channel-view";
import { getChannel, getChannelVideos } from "@/lib/channel-data";

export async function generateMetadata({
  params,
}: PageProps<"/channel/[id]">): Promise<Metadata> {
  const { id } = await params;
  const channel = getChannel(id);

  if (!channel) {
    return { title: "Channel | BookTube" };
  }

  return {
    title: `${channel.name} | BookTube`,
    description: channel.description,
  };
}

export default async function ChannelPage({ params }: PageProps<"/channel/[id]">) {
  const { id } = await params;
  const channel = getChannel(id);

  if (!channel) {
    notFound();
  }

  return <ChannelView channel={channel} videos={getChannelVideos(channel.id)} />;
}
