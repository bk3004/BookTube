"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { VideoGrid } from "@/components/video-grid";
import { VIDEOS, type Filter } from "@/lib/data";

export function HomeShell() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const videos = useMemo(() => {
    if (activeFilter === "All") return VIDEOS;
    return VIDEOS.filter((video) => video.genres.includes(activeFilter));
  }, [activeFilter]);

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
        activeItem={activeItem}
        onNavigate={(item, filter) => {
          setActiveItem(item);
          if (filter) setActiveFilter(filter);
        }}
      />
      <main
        className={`min-h-[calc(100vh-56px)] bg-[var(--page-bg)] transition-[margin] duration-200 ${
          sidebarOpen ? "md:ml-[240px]" : "md:ml-[72px]"
        }`}
      >
        <VideoGrid
          videos={videos}
          activeFilter={activeFilter}
          onFilterChange={(filter) => {
            setActiveFilter(filter);
            setActiveItem(filter === "All" ? "Home" : filter);
          }}
        />
      </main>
    </div>
  );
}
