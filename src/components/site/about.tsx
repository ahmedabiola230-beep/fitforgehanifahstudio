"use client";

import { Check, Award, HeartHandshake, Target, Users } from "lucide-react";
import { Reveal, SectionHead, PageHero, ActionButton } from "./bits";
import { IMAGES, TEAM } from "@/lib/site";
import type { PageId } from "./navbar";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Coaching first",
    text: "Selling memberships is easy. Keeping people training for years is the actual job, and it is the only metric we obsess over.",
  },
  {
    icon: Users,
    title: "No egos on the floor",
    text: "Everybody here was a beginner once, including the coaches. You will get encouragement, never eye rolls.",
  },
  {
    icon: Target,
    title: "Progress you can measure",
    text: "Feelings are nice, numbers are better. We test and retest so you always know the plan is working.",
  },
  {
    icon: Award,
    title: "Do it properly or not at all",
    text: "Full range of motion, honest reps and technique before load. It is slower on day one and better on day 300.",
  },
];

const CERTS = [
  "National Strength and Conditioning Association, Certified Personal Trainer",
  "Precision Nutrition Level 2 Coach",
  "Certified Functional Strength Coach",
  "First Aid and CPR Certified, renewed yearly",
];

export function AboutView({ go }: { go: (p: PageId) => void }) {
  return (
    <>
      <PageHero
        kicker="About FitForge"
        title="A studio built for people who never felt at home in big gyms"
        text="Since 2013 we have helped hundreds of Lagosians get stronger, leaner and healthier without shouting, shaming or short cuts."
        image={IMAGES.ctaBg}
      />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <SectionHead
              kicker="Our story"
              title="It started with one client and one barbell"
              text="FitForge began in a converted garage in Yaba with a second hand barbell, six kettlebells and a coach named Dapo Adeyemi who had just left a corporate job."
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#5B6470]">
                <p>
                  His first client was a neighbour who wanted to keep up with her kids. Then came her colleague,
                  then her husband, then half the street. What they all had in common was a history of joining
                  big gyms in January and quietly disappearing by March.
                </p>
                <p>
                  Dapo figured the problem was never the people. It was gyms that handed them a generic program
                  and then ignored them. So he built the opposite: a studio where every session is coached, every
                  program is personal and every member is known by name.
                </p>
                <p>
                  Thirteen years later FitForge sits on Admiralty Way in Lekki with a full coaching team, a
                  proper strength floor and hundreds of members who have been with us for years. The garage
                  barbell still hangs on the wall, mostly to keep us humble.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={IMAGES.about}
                alt="A FitForge coach spotting a client mid set"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-[#0B0C0F] text-white rounded-2xl px-7 py-5">
              <p className="font-oswald text-3xl font-semibold text-[#FF4A1A] leading-none">2013</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/70">The garage year</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-[#F6F6F4]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            kicker="What we stand for"
            title="Four things we refuse to compromise"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.07 * i} className="h-full">
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm hover:shadow-[0_16px_40px_rgba(11,12,15,0.08)] transition-shadow duration-300">
                  <span className="w-12 h-12 rounded-xl bg-[#FF4A1A]/10 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-[#FF4A1A]" />
                  </span>
                  <h3 className="mt-5 font-oswald text-lg font-semibold uppercase tracking-tight text-[#12141A]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5B6470]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-[#0B0C0F]">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={IMAGES.hero}
                alt="Coaching in action on the FitForge floor"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHead
              light
              kicker="Credentials"
              title="Certified, experienced, accountable"
              text="Every coach on our floor carries current certifications and renews first aid training yearly. You are in trained hands."
            />
            <ul className="mt-8 space-y-4">
              {CERTS.map((c, i) => (
                <Reveal key={c} delay={0.06 * i}>
                  <li className="flex items-start gap-3 text-sm text-white/75">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FF4A1A]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#FF4A1A]" strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            kicker="The team"
            title="People you will train with"
            text="Three full time coaches, one standard: every session you attend is watched, guided and logged."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={0.08 * i}>
                <div className="group rounded-2xl overflow-hidden bg-[#F6F6F4] hover:shadow-[0_20px_50px_rgba(11,12,15,0.12)] transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={t.image}
                      alt={`${t.name}, ${t.role}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-oswald text-xl font-semibold uppercase text-[#12141A]">{t.name}</h3>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#E8420A] mt-1">{t.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B6470]">{t.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F6F6F4]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-oswald text-3xl sm:text-4xl font-semibold uppercase text-[#12141A] leading-tight">
              Come see the floor for yourself
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5B6470]">
              Words on a website only go so far. Book a free trial, walk the floor, meet the coaches and feel
              the difference in one session.
            </p>
            <div className="mt-8">
              <ActionButton onClick={() => go("contact")}>Book a Free Trial</ActionButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
