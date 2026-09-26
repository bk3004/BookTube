export type Genre =
  | "Classics"
  | "Sci-Fi & Fantasy"
  | "Gothic & Horror"
  | "Romance & Drama"
  | "Quick Reviews"
  | "Audiobooks";

export type BookId =
  | "moby-dick"
  | "1984"
  | "dracula"
  | "frankenstein"
  | "alice"
  | "dune"
  | "gatsby"
  | "hobbit"
  | "pride"
  | "the-martian"
  | "project-hail-mary";

export type ChannelId =
  | "whaletales"
  | "dystopian"
  | "gothicvault"
  | "literarylab"
  | "wonderland"
  | "scifiempire"
  | "roaring"
  | "middleearth"
  | "austen"
  | "hardsci";

export type Video = {
  id: string;
  bookId: BookId;
  bookTitle: string;
  title: string;
  duration: string;
  views: string;
  published: string;
  channelId: ChannelId;
  channel: string;
  genres: Genre[];
};

export const FILTERS = [
  "All",
  "Classics",
  "Sci-Fi & Fantasy",
  "Gothic & Horror",
  "Romance & Drama",
  "Quick Reviews",
  "Audiobooks",
] as const;

export type Filter = (typeof FILTERS)[number];

export const VIDEOS: Video[] = [
  {
    id: "the-martian",
    bookId: "the-martian",
    bookTitle: "THE MARTIAN",
    title: "THE MARTIAN: Potatoes, Orbital Mechanics & Not Dying on Mars",
    duration: "26:14",
    views: "1.8M views",
    published: "1 day ago",
    channelId: "hardsci",
    channel: "HardSciFiReads",
    genres: ["Sci-Fi & Fantasy", "Audiobooks"],
  },
  {
    id: "project-hail-mary",
    bookId: "project-hail-mary",
    bookTitle: "PROJECT HAIL MARY",
    title: "PROJECT HAIL MARY: Rocky, Taumoeba & Saving the Sun",
    duration: "31:02",
    views: "1.4M views",
    published: "3 days ago",
    channelId: "hardsci",
    channel: "HardSciFiReads",
    genres: ["Sci-Fi & Fantasy", "Audiobooks"],
  },
  {
    id: "moby-dick",
    bookId: "moby-dick",
    bookTitle: "MOBY DICK",
    title: "MOBY DICK: Is Captain Ahab the Ultimate Whale Hunter?",
    duration: "18:45",
    views: "412K views",
    published: "2 days ago",
    channelId: "whaletales",
    channel: "WhaleTales Reviews",
    genres: ["Classics"],
  },
  {
    id: "1984",
    bookId: "1984",
    bookTitle: "1984",
    title: "1984: Big Brother Is Reading You (And Your Diary)",
    duration: "22:10",
    views: "890K views",
    published: "5 days ago",
    channelId: "dystopian",
    channel: "DystopianReader",
    genres: ["Classics", "Sci-Fi & Fantasy"],
  },
  {
    id: "dracula",
    bookId: "dracula",
    bookTitle: "DRACULA",
    title: "DRACULA: Gothic Horror, Vampiric Lore & Blood",
    duration: "15:30",
    views: "310K views",
    published: "1 week ago",
    channelId: "gothicvault",
    channel: "GothicVault",
    genres: ["Gothic & Horror", "Classics"],
  },
  {
    id: "frankenstein",
    bookId: "frankenstein",
    bookTitle: "FRANKENSTEIN",
    title: "FRANKENSTEIN: Who Is the Real Monster?",
    duration: "19:15",
    views: "650K views",
    published: "3 days ago",
    channelId: "literarylab",
    channel: "LiteraryLab",
    genres: ["Gothic & Horror", "Classics"],
  },
  {
    id: "alice",
    bookId: "alice",
    bookTitle: "ALICE IN WONDERLAND",
    title: "ALICE IN WONDERLAND: Cheshire Grins, Mad Tea Parties",
    duration: "12:40",
    views: "275K views",
    published: "4 days ago",
    channelId: "wonderland",
    channel: "WonderlandLover",
    genres: ["Classics", "Quick Reviews"],
  },
  {
    id: "dune",
    bookId: "dune",
    bookTitle: "DUNE",
    title: "DUNE: Sandworms, Spice Melange & Blue Eyes",
    duration: "28:50",
    views: "1.2M views",
    published: "2 weeks ago",
    channelId: "scifiempire",
    channel: "SciFiEmpire",
    genres: ["Sci-Fi & Fantasy", "Audiobooks"],
  },
  {
    id: "gatsby",
    bookId: "gatsby",
    bookTitle: "THE GREAT GATSBY",
    title: "THE GREAT GATSBY: Jazz Age Glamour, Green Lights",
    duration: "16:05",
    views: "520K views",
    published: "6 days ago",
    channelId: "roaring",
    channel: "RoaringTwentiesBooks",
    genres: ["Classics", "Quick Reviews"],
  },
  {
    id: "hobbit",
    bookId: "hobbit",
    bookTitle: "THE HOBBIT",
    title: "THE HOBBIT: Cozy Shire, Pipe-Smoke & Smaug",
    duration: "24:30",
    views: "940K views",
    published: "1 month ago",
    channelId: "middleearth",
    channel: "MiddleEarth Lore",
    genres: ["Sci-Fi & Fantasy", "Audiobooks"],
  },
  {
    id: "pride",
    bookId: "pride",
    bookTitle: "PRIDE & PREJUDICE",
    title: "PRIDE & PREJUDICE: Monocles, Sarcasm & Balls",
    duration: "17:20",
    views: "610K views",
    published: "3 days ago",
    channelId: "austen",
    channel: "AustenSociety",
    genres: ["Romance & Drama", "Classics"],
  },
];

export const SUBSCRIPTIONS = [
  { id: "hardsci", name: "HardSciFiReads" },
  { id: "whaletales", name: "WhaleTales Reviews" },
  { id: "dystopian", name: "DystopianReader" },
  { id: "scifiempire", name: "SciFiEmpire" },
  { id: "middleearth", name: "MiddleEarth Lore" },
] as const;

export function getVideo(id: string) {
  return VIDEOS.find((video) => video.id === id);
}

export function getRelatedVideos(id: string) {
  const current = getVideo(id);
  if (!current) return VIDEOS.filter((video) => video.id !== id).slice(0, 8);

  return VIDEOS.filter((video) => video.id !== id).sort((a, b) => {
    const aScore = a.genres.some((genre) => current.genres.includes(genre)) ? 1 : 0;
    const bScore = b.genres.some((genre) => current.genres.includes(genre)) ? 1 : 0;
    return bScore - aScore;
  });
}
