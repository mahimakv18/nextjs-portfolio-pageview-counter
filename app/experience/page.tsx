import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const experienceData = [
  {
    title: "SOC Analyst",
    company: "PSY9 Security PVT LTD",
    period: "2023-Present",
    details: [
      "Monitor Security Alerts: Continuously monitor security alerts and events from SIEM systems, intrusion detection systems, firewalls, and antivirus tools.",
      "Incident Detection and Response: Investigate suspicious activities, assess severity, and escalate as needed. Provide timely responses to mitigate threats.",
      "Incident Documentation: Document incidents and investigation steps for reporting, analysis, and compliance.",
      "Perform Root Cause Analysis: Investigate the root cause of incidents and recommend strategies to prevent future attacks.",
      "Build a Security Operations Center (SOC): Design and implement SOC infrastructure, including hardware, software, workflows, and monitoring processes tailored to the company’s needs.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "Tech Defense",
    period: "June 2023 - August 2023",
    details: [
      "During my internship at Tech Defense, I gained hands-on experience identifying and mitigating cyberattacks through labs focused on the OWASP Top 10 vulnerabilities, including SQL injection and XSS.",
      "This training enhanced my skills in penetration testing, vulnerability assessment, and secure coding practices.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "Cyber Secured India",
    period: "April 2023-June 2023",
    details: [
      "During my internship at Cyber Secured India, I completed hands-on labs using PortSwigger, TryHackMe, and Let's Defend, focusing on VAPT and SOC skills.",
      "I gained practical experience in vulnerability assessments, penetration testing, and incident response.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        <div className="w-full max-w-4xl mt-20 space-y-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-8">Experience</h1>
          {experienceData.map((item, idx) => (
            <Card key={idx}>
              <div className="p-4 md:p-8">
                <h2 className="font-semibold text-lg text-zinc-100 mb-1">{item.title}</h2>
                <p className="text-zinc-400 text-sm mb-1">{item.company} <span className="text-zinc-500">{item.period}</span></p>
                <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1 mt-2">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
