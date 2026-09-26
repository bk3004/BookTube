import { VIDEOS, type ChannelId } from "@/lib/data";

export type Channel = {
  id: ChannelId;
  name: string;
  handle: string;
  subscribers: string;
  videoCount: string;
  description: string;
  bannerFrom: string;
  bannerTo: string;
  joined: string;
  location: string;
};

export const CHANNELS: Record<ChannelId, Channel> = {
  hardsci: {
    id: "hardsci",
    name: "HardSciFiReads",
    handle: "@hardsci",
    subscribers: "2.1M subscribers",
    videoCount: "2 videos",
    description:
      "Hard science, bad odds, and books that treat physics like plot. Essays on Andy Weir, orbital mechanics, and why potatoes count as character development.",
    bannerFrom: "#8a3a16",
    bannerTo: "#d9782c",
    joined: "Joined Mar 12, 2018",
    location: "Houston, TX",
  },
  whaletales: {
    id: "whaletales",
    name: "WhaleTales Reviews",
    handle: "@whaletales",
    subscribers: "412K subscribers",
    videoCount: "1 video",
    description: "Deep dives on sea stories, obsession, and the classics that still bite.",
    bannerFrom: "#1b4f86",
    bannerTo: "#3d8fd4",
    joined: "Joined Aug 3, 2016",
    location: "New Bedford, MA",
  },
  dystopian: {
    id: "dystopian",
    name: "DystopianReader",
    handle: "@dystopianreader",
    subscribers: "890K subscribers",
    videoCount: "1 video",
    description: "Surveillance, slogans, and the books that saw the present coming.",
    bannerFrom: "#1a1a1a",
    bannerTo: "#8b1e1e",
    joined: "Joined Jun 8, 2017",
    location: "London, UK",
  },
  gothicvault: {
    id: "gothicvault",
    name: "GothicVault",
    handle: "@gothicvault",
    subscribers: "310K subscribers",
    videoCount: "1 video",
    description: "Castles, coffins, and the long shadow of Victorian horror.",
    bannerFrom: "#3b0d18",
    bannerTo: "#8b1e3a",
    joined: "Joined Oct 31, 2015",
    location: "Whitby, UK",
  },
  literarylab: {
    id: "literarylab",
    name: "LiteraryLab",
    handle: "@literarylab",
    subscribers: "650K subscribers",
    videoCount: "1 video",
    description: "Close readings of monsters, makers, and the ethics hiding in the footnotes.",
    bannerFrom: "#1d4d24",
    bannerTo: "#2f9a3a",
    joined: "Joined Jan 19, 2019",
    location: "Geneva, CH",
  },
  wonderland: {
    id: "wonderland",
    name: "WonderlandLover",
    handle: "@wonderlandlover",
    subscribers: "275K subscribers",
    videoCount: "1 video",
    description: "Curiouser essays on nonsense, riddles, and tea that never ends.",
    bannerFrom: "#5b3d8f",
    bannerTo: "#c9b6f5",
    joined: "Joined Apr 4, 2020",
    location: "Oxford, UK",
  },
  scifiempire: {
    id: "scifiempire",
    name: "SciFiEmpire",
    handle: "@scifiempire",
    subscribers: "1.2M subscribers",
    videoCount: "1 video",
    description: "Spice, sandworms, and the politics of far-future doorstops.",
    bannerFrom: "#7a3b16",
    bannerTo: "#e07a45",
    joined: "Joined Feb 2, 2014",
    location: "Arrakis (allegedly)",
  },
  roaring: {
    id: "roaring",
    name: "RoaringTwentiesBooks",
    handle: "@roaring20s",
    subscribers: "520K subscribers",
    videoCount: "1 video",
    description: "Jazz, green lights, and parties that last longer than the marriages.",
    bannerFrom: "#16243f",
    bannerTo: "#f2c14e",
    joined: "Joined Sep 9, 2018",
    location: "West Egg, NY",
  },
  middleearth: {
    id: "middleearth",
    name: "MiddleEarth Lore",
    handle: "@middleearthlore",
    subscribers: "940K subscribers",
    videoCount: "1 video",
    description: "Second breakfasts, dragons, and maps with too many mountains.",
    bannerFrom: "#1e3d1c",
    bannerTo: "#2f9a3a",
    joined: "Joined Dec 22, 2013",
    location: "The Shire",
  },
  austen: {
    id: "austen",
    name: "AustenSociety",
    handle: "@austensociety",
    subscribers: "610K subscribers",
    videoCount: "1 video",
    description: "Manners, money, and the slow-burn burns of Regency England.",
    bannerFrom: "#8b3d52",
    bannerTo: "#f48aa0",
    joined: "Joined Jul 18, 2016",
    location: "Hertfordshire, UK",
  },
};

export function getChannel(id: string) {
  return CHANNELS[id as ChannelId];
}

export function getChannelVideos(id: string) {
  return VIDEOS.filter((video) => video.channelId === id);
}
