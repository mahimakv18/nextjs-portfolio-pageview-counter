import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const educationData = [
  {
    title: "Master of Technology in Cyber Security (2022 – 2024)",
    institution: "Rashtriya Raksha University",
    description:
      "A postgraduate program designed to build both technical expertise and strategic understanding across the cybersecurity domain. The coursework spanned areas such as network security, ethical hacking, malware analysis, digital forensics, cryptography, cyber law, and risk management. Practical skills were developed through simulations, lab work, and real-world case studies focused on attack vectors, incident response, and secure system design. Alongside technical training, the program emphasized security governance, compliance frameworks, and the implementation of organizational security policies.",
  },
  {
    title: "Bachelor of Engineering in Computer Engineering (2017 – 2021)",
    institution: "Gujarat Technological University",
    description:
      "An undergraduate program that provided a strong technical foundation in computer networks, operating systems, data structures, and software engineering. Projects during this period involved integration of hardware and software concepts, with a focus on system architecture and application development.",
  },
  {
    title: "Certifications",
    institution: "",
    description: "",
    certifications: [
      "ISO 27001:2022 Lead Auditor",
      "CEH",
      "SAP Security Administration",
      "SAP S/4HANA Security Training"
    ],
  },
];

export default function Education() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        <div className="w-full max-w-4xl mt-20 space-y-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-8">Education</h1>
          {educationData.map((item, idx) => (
            <Card key={idx}>
              <div className="p-4 md:p-8">
                <h2 className="font-bold text-lg text-zinc-100 mb-2">{item.title}</h2>
                {item.institution && (
                  <p className="text-zinc-400 text-sm mb-2">{item.institution}</p>
                )}
                {item.description && (
                  <p className="text-zinc-400 text-sm mb-2">{item.description}</p>
                )}
                {item.certifications && (
                  <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1 mt-2">
                    {item.certifications.map((cert, i) => (
                      <li key={i}>{cert}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
