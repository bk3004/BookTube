import type { ChannelId } from "@/lib/data";

const AVATARS: Record<
  ChannelId,
  { bg: string; skin: string; hair: string; hairPath: string }
> = {
  whaletales: {
    bg: "#d7e4f2",
    skin: "#f0c4a0",
    hair: "#3b2a1a",
    hairPath: "M8 11c2-6 16-6 18 0v4c-3-4-15-4-18 0V11Z",
  },
  dystopian: {
    bg: "#ead9c8",
    skin: "#8d5a3c",
    hair: "#24160f",
    hairPath: "M8 12c3-7 15-7 18 1v3H8v-4Z",
  },
  gothicvault: {
    bg: "#d5d8e2",
    skin: "#f3d2b5",
    hair: "#1c1c1c",
    hairPath: "M7 13c3-8 17-8 20 0v4H7v-4Z",
  },
  literarylab: {
    bg: "#dce6ef",
    skin: "#e8b892",
    hair: "#2a1b12",
    hairPath: "M8 12c2-6 16-6 18 1v3H8v-4Z",
  },
  wonderland: {
    bg: "#efe4d6",
    skin: "#c9845a",
    hair: "#2b1a12",
    hairPath: "M6 14c2-9 20-9 22 0v8H6v-8Z",
  },
  scifiempire: {
    bg: "#d8dee8",
    skin: "#d9a57a",
    hair: "#1f1612",
    hairPath: "M8 12c3-7 15-7 18 1v3H8v-4Z",
  },
  roaring: {
    bg: "#e7d6c4",
    skin: "#7a4b32",
    hair: "#1a100c",
    hairPath: "M8 12c3-6 15-6 18 1v3H8v-4Z",
  },
  middleearth: {
    bg: "#ddd3c6",
    skin: "#8a5336",
    hair: "#21150f",
    hairPath: "M8 12c3-7 15-7 18 1v3H8v-4Z",
  },
  austen: {
    bg: "#e3d7c8",
    skin: "#c27b4e",
    hair: "#2a1c14",
    hairPath: "M8 12c3-7 15-7 18 1v3H8v-4Z",
  },
  hardsci: {
    bg: "#f3d4b8",
    skin: "#e0a57a",
    hair: "#3a2416",
    hairPath: "M7 12c3-7 16-7 20 1v4H7v-5Z",
  },
};

export function ChannelAvatar({
  channelId,
  className = "size-9",
}: {
  channelId: ChannelId;
  className?: string;
}) {
  const avatar = AVATARS[channelId];

  return (
    <svg viewBox="0 0 36 36" className={`shrink-0 rounded-full ${className}`} aria-hidden="true">
      <circle cx="18" cy="18" r="18" fill={avatar.bg} />
      <circle cx="18" cy="22" r="9" fill={avatar.skin} />
      <path d={avatar.hairPath} fill={avatar.hair} />
    </svg>
  );
}
