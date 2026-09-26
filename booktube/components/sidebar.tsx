import type { ReactNode } from "react";
import Link from "next/link";
import { ChannelAvatar } from "@/components/channel-avatar";
import {
  ClassicsIcon,
  HistoryIcon,
  HomeIcon,
  HorrorIcon,
  LikedIcon,
  RomanceIcon,
  SciFiIcon,
  ShelfIcon,
  ShortsIcon,
  SubscriptionsIcon,
} from "@/components/icons";
import { SUBSCRIPTIONS, type ChannelId, type Filter } from "@/lib/data";

type SidebarProps = {
  open: boolean;
  activeItem: string;
  onNavigate: (item: string, filter?: Filter) => void;
};

const MAIN_ITEMS = [
  { id: "Home", label: "Home", icon: HomeIcon },
  { id: "BookBites", label: "BookBites (Shorts)", icon: ShortsIcon },
  { id: "Subscriptions", label: "Subscriptions", icon: SubscriptionsIcon },
] as const;

const YOU_ITEMS = [
  { id: "History", label: "History", icon: HistoryIcon },
  { id: "Your Shelf", label: "Your Shelf", icon: ShelfIcon },
  { id: "Liked Videos", label: "Liked Videos", icon: LikedIcon },
] as const;

const GENRE_ITEMS = [
  { id: "Classics", label: "Classics", icon: ClassicsIcon, filter: "Classics" as const },
  {
    id: "Sci-Fi & Fantasy",
    label: "Sci-Fi & Fantasy",
    icon: SciFiIcon,
    filter: "Sci-Fi & Fantasy" as const,
  },
  {
    id: "Gothic & Horror",
    label: "Gothic & Horror",
    icon: HorrorIcon,
    filter: "Gothic & Horror" as const,
  },
  {
    id: "Romance & Drama",
    label: "Romance & Drama",
    icon: RomanceIcon,
    filter: "Romance & Drama" as const,
  },
] as const;

export function Sidebar({ open, activeItem, onNavigate }: SidebarProps) {
  return (
    <aside
      className={`fixed bottom-0 left-0 top-14 z-20 overflow-y-auto border-r border-[#272727] bg-[var(--page-bg)] pb-8 transition-[width,transform] duration-200 ${
        open ? "w-[240px] translate-x-0" : "w-[240px] -translate-x-full md:w-[72px] md:translate-x-0"
      }`}
    >
      <nav className="px-3 pt-2">
        <div className="flex flex-col gap-0.5">
          {MAIN_ITEMS.map((item) => (
            <NavButton
              key={item.id}
              label={item.label}
              icon={<item.icon className="size-6 shrink-0" />}
              active={activeItem === item.id}
              compact={!open}
              href={item.id === "Home" ? "/" : undefined}
            onClick={() => onNavigate(item.id, item.id === "Home" ? "All" : undefined)}
            />
          ))}
        </div>

        <SectionLabel compact={!open}>You</SectionLabel>
        <div className="flex flex-col gap-0.5">
          {YOU_ITEMS.map((item) => (
            <NavButton
              key={item.id}
              label={item.label}
              icon={<item.icon className="size-6 shrink-0" />}
              active={activeItem === item.id}
              compact={!open}
              onClick={() => onNavigate(item.id)}
            />
          ))}
        </div>

        <SectionLabel compact={!open}>Explore Genres</SectionLabel>
        <div className="flex flex-col gap-0.5">
          {GENRE_ITEMS.map((item) => (
            <NavButton
              key={item.id}
              label={item.label}
              icon={<item.icon className="size-6 shrink-0" />}
              active={activeItem === item.id}
              compact={!open}
              onClick={() => onNavigate(item.id, item.filter)}
            />
          ))}
        </div>

        <SectionLabel compact={!open}>Subscriptions</SectionLabel>
        <div className="flex flex-col gap-0.5">
        {SUBSCRIPTIONS.map((channel) => (
          <NavButton
            key={channel.id}
            label={channel.name}
            icon={<ChannelAvatar channelId={channel.id as ChannelId} className="size-6" />}
            active={activeItem === channel.name}
            compact={!open}
            href={`/channel/${channel.id}`}
          />
        ))}
        </div>
      </nav>
    </aside>
  );
}

function SectionLabel({
  children,
  compact,
}: {
  children: ReactNode;
  compact: boolean;
}) {
  if (compact) {
    return <div className="mx-2 my-3 border-t border-[#272727]" />;
  }

  return (
    <p className="mb-1.5 mt-4 px-3 text-[13px] font-medium uppercase tracking-[0.08em] text-[#aaa]">
      {children}
    </p>
  );
}

function NavButton({
  label,
  icon,
  active,
  compact,
  onClick,
  href,
}: {
  label: string;
  icon: ReactNode;
  active: boolean;
  compact: boolean;
  onClick?: () => void;
  href?: string;
}) {
  const className = `flex w-full items-center text-left text-[14px] text-[#f1f1f1] hover:bg-[#272727] ${
    compact
      ? "h-[74px] flex-col justify-center gap-1.5 rounded-xl px-1 text-[10px]"
      : "h-10 gap-6 rounded-full px-3"
  } ${active ? "bg-[#272727] font-medium" : "font-normal"}`;

  const content = (
    <>
      {icon}
      <span className={compact ? "line-clamp-2 text-center leading-tight" : "truncate"}>
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
