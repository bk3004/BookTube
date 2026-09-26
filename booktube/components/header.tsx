import type { ReactNode } from "react";
import Link from "next/link";
import {
  BellIcon,
  MenuIcon,
  MicIcon,
  PlusIcon,
  SearchIcon,
} from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

type HeaderProps = {
  onMenuClick: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 bg-[var(--page-bg)] px-3">
      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          onClick={onMenuClick}
          className="grid size-10 place-items-center rounded-full text-[var(--page-text)] hover:bg-[var(--page-raised)]"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="size-6" />
        </button>
        <Link href="/" className="flex items-center gap-2 pl-1" aria-label="BookTube home">
          <span className="grid size-8 place-items-center rounded-lg bg-[var(--page-logo)]">
            <svg viewBox="0 0 24 24" className="size-4 text-white" aria-hidden="true">
              <path fill="currentColor" d="M8 6.2v11.6L18.4 12 8 6.2Z" />
            </svg>
          </span>
          <span className="text-xl font-semibold tracking-tight text-[var(--page-text)]">
            BookTube
          </span>
          <span className="hidden rounded-full border border-[var(--page-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--page-muted)] min-[900px]:inline">
            Classics
          </span>
        </Link>
      </div>

      <label className="mx-2 hidden h-10 min-w-0 max-w-[640px] flex-1 items-center rounded-full border border-[var(--page-border)] bg-[var(--page-search)] pl-4 pr-2 md:flex">
        <span className="sr-only">Search classic books, authors, or BookTube reviews</span>
        <input
          type="search"
          placeholder="Search classic books, authors, or BookTube reviews"
          className="h-full w-full bg-transparent text-sm text-[var(--page-text)] outline-none placeholder:text-[var(--page-placeholder)]"
        />
        <span className="grid size-8 place-items-center text-[var(--page-text)]">
          <SearchIcon className="size-5" />
        </span>
      </label>

      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full text-[var(--page-text)] hover:bg-[var(--page-raised)] sm:hidden"
          aria-label="Search"
        >
          <SearchIcon className="size-6" />
        </button>
        <IconButton label="Search with voice">
          <MicIcon className="size-6" />
        </IconButton>
        <ThemeToggle />
        <button
          type="button"
          className="ml-1 hidden h-9 items-center gap-1.5 rounded-full bg-[var(--page-raised)] px-3 text-sm font-medium text-[var(--page-text)] hover:bg-[var(--page-raised-hover)] md:flex"
        >
          <PlusIcon className="size-5" />
          Create
        </button>
        <button
          type="button"
          className="relative grid size-10 place-items-center rounded-full text-[var(--page-text)] hover:bg-[var(--page-raised)]"
          aria-label="Notifications"
        >
          <BellIcon className="size-6" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-[var(--page-logo)]" />
        </button>
        <span className="ml-1 grid size-8 place-items-center rounded-full bg-[var(--page-avatar)] text-xs font-semibold text-white">
          BT
        </span>
      </div>
    </header>
  );
}

function IconButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="grid size-10 place-items-center rounded-full text-[var(--page-text)] hover:bg-[var(--page-raised)]"
      aria-label={label}
    >
      {children}
    </button>
  );
}
