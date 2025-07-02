"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function About() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full mx-auto mt-32 sm:mt-0 gap-8 max-w-4xl">
          <Card>
            <div className="p-4 relative flex flex-col gap-4 md:gap-8 md:p-8">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                About Me
              </h1>
              <p className="text-zinc-400 leading-7">
                Hello! I&apos;m Mahima Vaishnav. I work at the intersection of cybersecurity and compliance — where structure, clarity, and accountability are essential. My focus is on building systems that make sense, scale well, and hold up under scrutiny. Whether it's risk assessments, audit preparation, or aligning policies to real-world operations, I approach every task with intention and a strong sense of ownership.
              </p>
              <p className="text-zinc-400 leading-7">
                With hands-on experience in governance, risk, and compliance, I’ve contributed to projects that involve more than just applying frameworks — they require navigating ambiguity, solving unexpected problems, and building from the ground up when needed. I’ve worked across teams, handled audit-facing responsibilities, and led documentation efforts that actually support how organizations work.
              </p>
              <p className="text-zinc-400 leading-7">
                What sets my approach apart is an attention to detail that goes beyond documentation. Whether it’s identifying subtle gaps in a process, aligning controls that don’t neatly fit, or preparing for audits that demand precision. The goal isn’t to overcomplicate; it’s to get things right — and make sure they last.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}