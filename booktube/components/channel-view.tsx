"use client";

import Link from "next/link";
import { useState } from "react";
import { BookCover } from "@/components/book-cover";
import { ChannelAvatar } from "@/components/channel-avatar";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { VideoCard } from "@/components/video-grid";
import type { Channel } from "@/lib/channel-data";
import type { Video } from "@/lib/data";

const TABS = ["Home", "Videos", "About"] as const;
type Tab = (typeof TABS)[number];

type ChannelViewProps = {
  channel: Channel;
  videos: Video[];
};

export function ChannelView({ channel, videos }: ChannelViewProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [subscribed, setSubscribed] = useState(false);
  const [tab, setTab] = useState<Tab>("Home");
  const featured = videos[0];

  return (
    <div className="min-h-full bg-[var(--page-bg)]">
      <Header onMenuClick={() => setSidebarOpen((open) => !open)} />
      {sidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 top-14 z-10 bg-black/50 md:hidden"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}
      <Sidebar
        open={sidebarOpen}
        activeItem={channel.name}
        onNavigate={() => undefined}
      />

      <main
        className={`min-h-[calc(100vh-56px)] bg-[var(--page-bg)] transition-[margin] duration-200 ${
          sidebarOpen ? "md:ml-[240px]" : "md:ml-[72px]"
        }`}
      >
        <div
          className="h-36 w-full sm:h-48"
          style={{
            background: `linear-gradient(120deg, ${channel.bannerFrom}, ${channel.bannerTo})`,
          }}
        />

        <div className="px-4 pb-10 md:px-8">
          <div className="-mt-10 flex flex-col gap-4 sm:-mt-12 sm:flex-row sm:items-end">
            <ChannelAvatar channelId={channel.id} className="size-24 border-4 border-[var(--page-bg)] sm:size-32" />
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-semibold text-[var(--page-text)]">{channel.name}</h1>
              <p className="mt-1 text-sm text-[var(--page-muted)]">
                {channel.handle} · {channel.subscribers} · {channel.videoCount}
              </p>
              <p className="mt-2 line-clamp-2 max-w-3xl text-sm text-[var(--page-muted)]">
                {channel.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSubscribed((value) => !value)}
              className={`h-9 shrink-0 rounded-full px-4 text-sm font-medium ${
                subscribed
                  ? "bg-[var(--page-raised)] text-[var(--page-text)]"
                  : "bg-[var(--page-chip-active-bg)] text-[var(--page-chip-active-text)]"
              }`}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>

          <div className="mt-6 flex gap-6 border-b border-[var(--page-border)]">
            {TABS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTab(item)}
                className={`h-12 text-sm font-medium ${
                  tab === item
                    ? "border-b-2 border-[var(--page-text)] text-[var(--page-text)]"
                    : "text-[var(--page-muted)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {tab === "Home" ? (
            <div className="pt-6">
              {featured ? (
                <Link href={`/watch/${featured.id}`} className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1.4fr)_1fr]">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-[#111]">
                    <BookCover bookId={featured.bookId} title={featured.bookTitle} />
                    <span className="absolute bottom-2 right-2 rounded-md bg-black/85 px-1.5 py-0.5 text-xs font-medium text-white">
                      {featured.duration}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-[var(--page-text)]">{featured.title}</h2>
                    <p className="mt-2 text-sm text-[var(--page-muted)]">
                      {featured.views} · {featured.published}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--page-muted)]">
                      {channel.description}
                    </p>
                  </div>
                </Link>
              ) : null}
              <h3 className="mb-4 text-base font-medium text-[var(--page-text)]">Uploads</h3>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          ) : null}

          {tab === "Videos" ? (
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 pt-6 sm:grid-cols-2 xl:grid-cols-3">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : null}

          {tab === "About" ? (
            <div className="max-w-3xl pt-6 text-sm leading-7 text-[var(--page-text)]">
              <p>{channel.description}</p>
              <p className="mt-4 text-[var(--page-muted)]">{channel.joined}</p>
              <p className="text-[var(--page-muted)]">{channel.location}</p>
              <p className="mt-2 text-[var(--page-muted)]">
                {channel.subscribers} · {channel.videoCount}
              </p>
            </div>
          ) : null}

          {videos.length === 0 && tab !== "About" ? (
            <p className="pt-16 text-center text-sm text-[var(--page-muted)]">
              This channel has no reviews yet.
            </p>
          ) : null}
        </div>
      </main>
    </div>
  );
}
