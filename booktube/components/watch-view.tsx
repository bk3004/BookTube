"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { BookCover } from "@/components/book-cover";
import { ChannelAvatar } from "@/components/channel-avatar";
import { Header } from "@/components/header";
import {
  DislikeIcon,
  LikeIcon,
  PauseIcon,
  PlayIcon,
  SaveIcon,
  ShareIcon,
} from "@/components/icons";
import type { Video } from "@/lib/data";
import type { WatchDetails } from "@/lib/watch-data";

type WatchViewProps = {
  video: Video;
  related: Video[];
  details: WatchDetails;
};

export function WatchView({ video, related, details }: WatchViewProps) {
  const router = useRouter();
  const [playing, setPlaying] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(6);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setProgress((value) => (value >= 100 ? 6 : value + 0.4));
    }, 200);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div className="min-h-full bg-[var(--page-bg)]">
      <Header onMenuClick={() => router.push("/")} />

      <main className="mx-auto grid max-w-[1400px] gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_402px] lg:px-6">
        <section>
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            className="group relative block w-full overflow-hidden rounded-xl bg-black"
            aria-label={playing ? "Pause review" : "Play review"}
          >
            <div className="relative aspect-video">
              <BookCover bookId={video.bookId} title={video.bookTitle} />
              <div className="absolute inset-0 bg-black/25" />
              <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-white transition group-hover:scale-105">
                {playing ? <PauseIcon className="size-8" /> : <PlayIcon className="size-8" />}
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-8">
                <div className="h-1 overflow-hidden rounded-full bg-white/25">
                  <div className="h-full bg-[#ff0000]" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-white">
                  <span>{playing ? "Playing" : "00:00"} · {video.duration}</span>
                  <span>HD</span>
                </div>
              </div>
            </div>
          </button>

          <h1 className="mt-4 text-xl font-medium leading-7 text-[var(--page-text)]">{video.title}</h1>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Link href={`/channel/${video.channelId}`} aria-label={`${video.channel} channel`}>
                <ChannelAvatar channelId={video.channelId} className="size-10" />
              </Link>
              <div>
                <Link
                  href={`/channel/${video.channelId}`}
                  className="text-sm font-medium text-[var(--page-text)] hover:underline"
                >
                  {video.channel}
                </Link>
                <p className="text-xs text-[var(--page-muted)]">{details.subscribers}</p>
              </div>
              <button
                type="button"
                onClick={() => setSubscribed((value) => !value)}
                className={`ml-2 h-9 rounded-full px-4 text-sm font-medium ${
                  subscribed
                    ? "bg-[var(--page-raised)] text-[var(--page-text)]"
                    : "bg-[var(--page-chip-active-bg)] text-[var(--page-chip-active-text)]"
                }`}
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex overflow-hidden rounded-full bg-[var(--page-raised)]">
                <button
                  type="button"
                  onClick={() => setLiked((value) => !value)}
                  className="flex h-9 items-center gap-2 px-4 text-sm text-[var(--page-text)] hover:bg-[var(--page-raised-hover)]"
                >
                  <LikeIcon className="size-5" />
                  {liked ? "Liked" : details.likes}
                </button>
                <span className="w-px bg-[var(--page-border)]" />
                <button
                  type="button"
                  className="grid h-9 w-11 place-items-center text-[var(--page-text)] hover:bg-[var(--page-raised-hover)]"
                  aria-label="Dislike"
                >
                  <DislikeIcon className="size-5" />
                </button>
              </div>
              <ActionChip icon={<ShareIcon className="size-5" />} label="Share" />
              <ActionChip icon={<SaveIcon className="size-5" />} label="Save" />
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-[var(--page-raised)] p-3 text-sm leading-6 text-[var(--page-text)]">
            <p className="font-medium">
              {video.views} · {video.published}
            </p>
            <p className="mt-2 whitespace-pre-line text-[var(--page-text)]">{details.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-base font-medium text-[var(--page-text)]">
              {details.commentsCount} Comments
            </h2>
            <div className="mt-4 flex gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--page-avatar)] text-xs font-semibold text-white">
                BT
              </span>
              <input
                type="text"
                placeholder="Add a comment..."
                className="h-10 w-full border-b border-[var(--page-border)] bg-transparent text-sm text-[var(--page-text)] outline-none placeholder:text-[var(--page-placeholder)]"
              />
            </div>
            <ul className="mt-6 space-y-5">
              {details.comments.map((comment) => (
                <li key={comment.id} className="flex gap-3">
                  <ChannelAvatar channelId={comment.channelId} className="size-10" />
                  <div>
                    <p className="text-sm text-[var(--page-text)]">
                      <span className="font-medium">{comment.author}</span>{" "}
                      <span className="text-[var(--page-muted)]">{comment.published}</span>
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--page-text)]">{comment.text}</p>
                    <p className="mt-2 text-xs text-[var(--page-muted)]">{comment.likes} likes</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="flex flex-col gap-3">
          {related.map((item) => (
            <div key={item.id} className="flex gap-2">
              <Link href={`/watch/${item.id}`} className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-lg bg-[#111]">
                <BookCover bookId={item.bookId} title={item.bookTitle} />
                <span className="absolute bottom-1 right-1 rounded bg-black/85 px-1 text-[10px] text-white">
                  {item.duration}
                </span>
              </Link>
              <div className="min-w-0">
                <Link href={`/watch/${item.id}`}>
                  <h3 className="line-clamp-2 text-sm font-medium leading-5 text-[var(--page-text)]">
                    {item.title}
                  </h3>
                </Link>
                <Link
                  href={`/channel/${item.channelId}`}
                  className="mt-1 block truncate text-xs text-[var(--page-muted)] hover:text-[var(--page-text)]"
                >
                  {item.channel}
                </Link>
                <p className="truncate text-xs text-[var(--page-muted)]">
                  {item.views} · {item.published}
                </p>
              </div>
            </div>
          ))}
        </aside>
      </main>
    </div>
  );
}

function ActionChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex h-9 items-center gap-2 rounded-full bg-[var(--page-raised)] px-4 text-sm text-[var(--page-text)] hover:bg-[var(--page-raised-hover)]"
    >
      {icon}
      {label}
    </button>
  );
}
