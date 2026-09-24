"use client";

import { CalendarCheck, Info } from "lucide-react";
import { Reveal, SectionHead, PageHero, ActionButton } from "./bits";
import { IMAGES, SCHEDULE } from "@/lib/site";
import type { PageId } from "./navbar";

const NOTES = [
  {
    title: "Fixed slots work best",
    text: "Members who lock two or three standing sessions a week attend 40 percent more than those who book ad hoc. Pick your times and defend them like meetings.",
  },
  {
    title: "Arrive 10 minutes early",
    text: "That gives you time to warm up, settle in and start your session on time. Late arrivals may have their session shortened, never extended.",
  },
  {
    title: "Sundays are open gym",
    text: "From 4pm to 7pm the floor is open to all members for self guided training. A coach is on duty for questions but there are no classes.",
  },
  {
    title: "Booking and cancellation",
    text: "Book through the front desk or WhatsApp. Cancel 6 hours before your slot and it costs you nothing. Later cancels use up the session.",
  },
];

export function ScheduleView({ go }: { go: (p: PageId) => void }) {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat"] as const;
  return (
    <>
      <PageHero
        kicker="Weekly schedule"
        title="Six days a week, dawn to dark"
        text="Early morning before the office, lunchtime between meetings, evening after work. The timetable bends to fit your life."
        image={IMAGES.hiit}
      />

      {/* Timetable */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            kicker="Class timetable"
            title="Pick your time, keep it"
            text="Group classes are capped at six people, so book ahead. Private coaching runs all day by appointment."
          />
          <Reveal delay={0.1} className="mt-12 overflow-x-auto rounded-2xl border border-[#E8E6E1] shadow-sm">
            <table className="w-full min-w-[820px] text-sm bg-white">
              <thead>
                <tr className="bg-[#0B0C0F] text-white">
                  <th className="px-5 py-4 text-left font-oswald uppercase tracking-wider text-xs">Time</th>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((d) => (
                    <th key={d} className="px-5 py-4 text-left font-oswald uppercase tracking-wider text-xs">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((row, ri) => (
                  <tr key={row.time} className={ri % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"}>
                    <td className="px-5 py-4 font-semibold text-[#12141A] whitespace-nowrap border-l-4 border-[#FF4A1A]">
                      {row.time}
                    </td>
                    {days.map((d) => {
                      const val = row[d];
                      const closed = val === "Closed";
                      return (
                        <td key={d} className="px-5 py-4">
                          <span
                            className={`inline-block rounded-full px-3 py-1.5 text-xs font-medium ${
                              closed
                                ? "bg-[#F0EFEC] text-[#B0B4BC]"
                                : val === "Private Coaching"
                                  ? "bg-[#FF4A1A]/10 text-[#E8420A]"
                                  : val === "Team Workout"
                                    ? "bg-[#12141A] text-white"
                                    : "bg-[#12141A]/5 text-[#12141A]"
                            }`}
                          >
                            {val}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex items-start gap-3 justify-center text-sm text-[#8B93A0]">
              <Info className="w-4 h-4 mt-0.5 text-[#FF4A1A] shrink-0" />
              <p>
                Sessions are 45 to 60 minutes. Private coaching can be booked between 6:00am and 9:00pm, Monday to Saturday.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 text-center">
            <ActionButton onClick={() => go("contact")}>Reserve Your Free Trial Session</ActionButton>
          </Reveal>
        </div>
      </section>

      {/* Notes */}
      <section className="py-20 lg:py-28 bg-[#F6F6F4]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            kicker="Good to know"
            title="How booking works"
            text="A few house rules that keep the floor running smoothly for everyone."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {NOTES.map((n, i) => (
              <Reveal key={n.title} delay={0.07 * i} className="h-full">
                <div className="h-full flex gap-5 rounded-2xl bg-white p-7 shadow-sm">
                  <span className="w-12 h-12 rounded-xl bg-[#FF4A1A]/10 flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-5 h-5 text-[#FF4A1A]" />
                  </span>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold uppercase tracking-tight text-[#12141A]">{n.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5B6470]">{n.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
