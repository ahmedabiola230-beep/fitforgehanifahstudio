"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Reveal, SectionHead, PageHero, ActionButton, Kicker } from "./bits";
import { IMAGES, POSTS } from "@/lib/site";
import type { PageId } from "./navbar";

function ArticleView({ postId, onBack }: { postId: string; onBack: () => void }) {
  const post = POSTS.find((p) => p.id === postId)!;
  const others = POSTS.filter((p) => p.id !== postId).slice(0, 2);

  return (
    <>
      <article className="bg-white">
        <div className="relative h-[380px] lg:h-[460px] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-3xl px-6 pb-10">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-[#FF4A1A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> All articles
              </button>
              <h1 className="mt-4 font-oswald text-3xl sm:text-4xl font-semibold uppercase leading-tight text-white">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-white/70">
                <span className="rounded-full bg-[#FF4A1A] px-3 py-1 font-semibold uppercase tracking-wider text-white">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-14">
          <p className="text-lg leading-relaxed text-[#3A414B] font-medium border-l-4 border-[#FF4A1A] pl-5">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-[#5B6470]">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-[#F6F6F4] p-8 text-center">
            <p className="font-oswald text-xl font-semibold uppercase text-[#12141A]">
              Want this handled for you?
            </p>
            <p className="mt-2 text-sm text-[#5B6470]">
              Reading is a good start. Training with a coach is better. Your first session is free.
            </p>
            <div className="mt-6">
              <ActionButton onClick={onBack}>Back to all articles</ActionButton>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-[#F6F6F4]">
        <div className="mx-auto max-w-5xl px-6">
          <Kicker>Keep reading</Kicker>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <button
                key={o.id}
                onClick={onBack}
                className="group text-left rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-[0_16px_40px_rgba(11,12,15,0.1)] transition-all duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img src={o.image} alt={o.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E8420A]">{o.category}</span>
                  <h3 className="mt-2 font-oswald text-lg font-semibold uppercase leading-snug text-[#12141A]">
                    {o.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8420A]">
                    Read article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BlogView({ go }: { go: (p: PageId) => void }) {
  const [openPost, setOpenPost] = useState<string | null>(null);
  const [featured, ...rest] = POSTS;
  const [catFilter, setCatFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))];
  const filtered = catFilter === "All" ? rest : rest.filter((p) => p.category === catFilter);

  if (openPost) {
    return (
      <ArticleView
        postId={openPost}
        onBack={() => {
          setOpenPost(null);
          window.scrollTo({ top: 0 });
        }}
      />
    );
  }

  return (
    <>
      <PageHero
        kicker="The FitForge blog"
        title="Straight talk from the studio floor"
        text="Training, food, sleep and the honest answers nobody sells you. Written by our coaches between sessions."
        image={IMAGES.blog1}
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Featured */}
          <Reveal>
            <button
              onClick={() => {
                setOpenPost(featured.id);
                window.scrollTo({ top: 0 });
              }}
              className="group w-full text-left grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-[#0B0C0F] shadow-[0_30px_60px_rgba(11,12,15,0.25)]"
            >
              <div className="h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="w-fit rounded-full bg-[#FF4A1A] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  Featured
                </span>
                <h2 className="mt-5 font-oswald text-2xl sm:text-3xl font-semibold uppercase leading-tight text-white group-hover:text-[#FF6B3D] transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/65">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-xs text-white/50">
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF6B3D]">
                  Read the article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </span>
              </div>
            </button>
          </Reveal>

          {/* Filters */}
          <Reveal delay={0.1} className="mt-14 flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCatFilter(c)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  catFilter === c
                    ? "bg-[#12141A] text-white"
                    : "bg-[#F6F6F4] text-[#5B6470] hover:bg-[#EDEBE6]"
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal key={post.id} delay={0.05 * (i % 3)} className="h-full">
                <button
                  onClick={() => {
                    setOpenPost(post.id);
                    window.scrollTo({ top: 0 });
                  }}
                  className="group h-full text-left w-full rounded-2xl overflow-hidden bg-[#F6F6F4] hover:shadow-[0_20px_50px_rgba(11,12,15,0.12)] transition-all duration-500 hover:-translate-y-1.5"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#8B93A0]">
                      <span className="rounded-full bg-[#FF4A1A]/10 text-[#E8420A] px-3 py-1 font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-4 font-oswald text-lg font-semibold uppercase leading-snug text-[#12141A] group-hover:text-[#FF4A1A] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B6470] line-clamp-3">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8420A]">
                      Read more
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F6F6F4]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <SectionHead
              center
              kicker="Enough reading"
              title="Time to train"
              text="Articles help. Coaching helps more. Come try a free session and put all this advice into practice with someone watching your back."
            />
            <div className="mt-8">
              <ActionButton onClick={() => go("contact")}>Book a Free Trial</ActionButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
