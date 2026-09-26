import type { ChannelId } from "@/lib/data";

export type WatchComment = {
  id: string;
  channelId: ChannelId;
  author: string;
  published: string;
  text: string;
  likes: string;
};

export type WatchDetails = {
  likes: string;
  subscribers: string;
  description: string;
  commentsCount: string;
  comments: WatchComment[];
};

export const WATCH_DETAILS: Record<string, WatchDetails> = {
  "the-martian": {
    likes: "214K",
    subscribers: "2.1M subscribers",
    commentsCount: "4,812",
    description:
      "Mark Watney is left for dead on Mars with a small habitat, a few potatoes, and a stubborn refusal to die. This BookTube essay walks through Andy Weir's hard-science survival story: botany in a HAB, stolen rover parts, and the orbital mechanics that turn a rescue into a thriller.\n\nWe cover why The Martian still works as both a problem-solving puzzle and a comedy, how the NASA procedural detail became the joke, and why \"I'm going to science the hell out of this\" became a whole personality.\n\nBook: The Martian by Andy Weir\nChapters: 00:00 Stranded 04:12 Potatoes 11:40 Hermes 18:02 The rescue 23:10 Why it holds up",
    comments: [
      {
        id: "c1",
        channelId: "scifiempire",
        author: "SciFiEmpire",
        published: "12 hours ago",
        text: "The potato montage still lives rent-free in my head. Weir made botany feel like an action sequence.",
        likes: "2.4K",
      },
      {
        id: "c2",
        channelId: "dystopian",
        author: "DystopianReader",
        published: "8 hours ago",
        text: "Best 'competence porn' in modern sci-fi. Every problem is a spreadsheet and a punchline.",
        likes: "1.1K",
      },
      {
        id: "c3",
        channelId: "literarylab",
        author: "LiteraryLab",
        published: "5 hours ago",
        text: "Watched this after a reread. The Hermes sequence still hits. Also: more Project Hail Mary essays, please.",
        likes: "876",
      },
      {
        id: "c4",
        channelId: "middleearth",
        author: "MiddleEarth Lore",
        published: "3 hours ago",
        text: "I came for the space jokes and stayed for the orbital rendezvous. This channel is dangerous for my TBR.",
        likes: "412",
      },
    ],
  },
};

export function getWatchDetails(id: string): WatchDetails {
  return (
    WATCH_DETAILS[id] ?? {
      likes: "18K",
      subscribers: "860K subscribers",
      commentsCount: "642",
      description: "A BookTube review essay. More notes, timestamps, and reading recs coming soon.",
      comments: [],
    }
  );
}
