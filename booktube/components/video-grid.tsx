import Link from "next/link";
import { BookCover } from "@/components/book-cover";
import { ChannelAvatar } from "@/components/channel-avatar";
import { FILTERS, type Filter, type Video } from "@/lib/data";

type VideoGridProps = {
  videos: Video[];
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
};

export function VideoGrid({ videos, activeFilter, onFilterChange }: VideoGridProps) {
  return (
    <div className="px-4 pb-10 pt-3 md:px-6">
      <div className="mb-5 flex gap-3 overflow-x-auto pb-1">
        {FILTERS.map((filter) => {
          const active = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={`h-8 shrink-0 rounded-full px-3.5 text-sm ${
                active
                  ? "bg-[var(--page-chip-active-bg)] font-medium text-[var(--page-chip-active-text)]"
                  : "bg-[var(--page-chip)] text-[var(--page-text)] hover:bg-[var(--page-raised-hover)]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {videos.length === 0 ? (
        <p className="pt-16 text-center text-sm text-[var(--page-muted)]">
          No reviews in this category yet.
        </p>
      ) : null}
    </div>
  );
}

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="group">
      <Link href={`/watch/${video.id}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-[#111]">
          <BookCover bookId={video.bookId} title={video.bookTitle} />
          <span className="absolute bottom-2 right-2 rounded-md bg-black/85 px-1.5 py-0.5 text-xs font-medium text-white">
            {video.duration}
          </span>
        </div>
        <div className="mt-3 flex gap-3">
          <ChannelAvatar channelId={video.channelId} />
          <div className="min-w-0">
            <h3 className="line-clamp-2 text-[16px] font-medium leading-5 text-[var(--page-text)]">
              {video.title}
            </h3>
            <p className="mt-1 truncate text-sm text-[var(--page-muted)]">{video.channel}</p>
            <p className="truncate text-sm text-[var(--page-muted)]">
              {video.views} • {video.published}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
