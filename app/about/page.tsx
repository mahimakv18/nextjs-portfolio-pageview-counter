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
                Hello! I&apos;m Mahima Vaishnav, a seasoned cybersecurity professional with expertise in Regulatory Compliance, Risk Management, and Enterprise Security Governance. I specialize in aligning security practices with global standards to create robust and compliant security frameworks.
              </p>
              <p className="text-zinc-400 leading-7">
                With years of experience in the field, I have helped organizations strengthen their security posture while ensuring compliance with industry regulations. My approach combines technical expertise with strategic thinking to deliver comprehensive security solutions.
              </p>
              <p className="text-zinc-400 leading-7">
                I am passionate about staying ahead of emerging security threats and continuously expanding my knowledge to implement cutting-edge security measures.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}