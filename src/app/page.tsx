"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { Toaster } from "sonner";
import { TopBar, Navbar, type PageId } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { HomeView } from "@/components/site/home";
import { AboutView } from "@/components/site/about";
import { ProgramsView } from "@/components/site/programs";
import { ScheduleView } from "@/components/site/schedule";
import { BlogView } from "@/components/site/blog";
import { ContactView } from "@/components/site/contact";

const VALID: PageId[] = ["home", "about", "programs", "schedule", "blog", "contact"];

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getSnapshot(): PageId {
  const h = window.location.hash.replace(/^#\/?/, "");
  return (VALID.includes(h as PageId) ? h : "home") as PageId;
}

function getServerSnapshot(): PageId {
  return "home";
}

export default function Home() {
  const page = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [page]);

  const go = useCallback(
    (p: PageId) => {
      if (p === page) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      window.location.hash = `#/${p}`;
    },
    [page]
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Toaster position="bottom-right" richColors />
      <TopBar />
      <Navbar page={page} go={go} />
      <main className="flex-1">
        {page === "home" && <HomeView go={go} />}
        {page === "about" && <AboutView go={go} />}
        {page === "programs" && <ProgramsView go={go} />}
        {page === "schedule" && <ScheduleView go={go} />}
        {page === "blog" && <BlogView go={go} />}
        {page === "contact" && <ContactView />}
      </main>
      <Footer go={go} />
    </div>
  );
}
