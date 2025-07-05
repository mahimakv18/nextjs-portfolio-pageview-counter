import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const experienceData = [
  {
    title: "GRC Analyst",
    company: "PSY9 Security",
    location: "Ahmedabad",
    period: "Feb 2024 - Present",
    description: "Driving end-to-end governance, risk, and compliance initiatives across regulatory and audit landscapes, with deep focus on information security frameworks, cloud compliance, and security program maturity.",
    sections: [
      {
        title: "Key Responsibilities & Impact",
        items: [
          {
            title: "ISO 27001 Implementation:",
            description: "Led organization-wide ISO 27001 rollout, including the creation of ISMS documentation, security policies, risk assessments, and treatment plans."
          },
          {
            title: "SOC 2 Audit Readiness:",
            description: "Managed SOC 2 readiness efforts for fintech clients—performed control gap analysis and supported implementation of audit-compliant practices."
          },
          {
            title: "RBI & SEBI Compliance Oversight:",
            subItems: [
              "Successfully implemented SEBI's Cyber Security and Cyber Resilience Framework (CSCRF) for regulated entities.",
              "Built tailored compliance checklists and governance protocols to meet cybersecurity mandates from both RBI and SEBI, especially for cloud and IT infrastructure environments."
            ]
          },
          {
            title: "Governance, Risk & Audit Preparedness",
            subItems: [
              "Conducted internal audits and supported technical teams with remediation plans.",
              "Aligned compliance efforts across ISO 27001, SOC 2, NIST SP 800-53, and other global standards.",
              "Promoted security awareness across departments and integrated secure practices into operational workflows."
            ]
          },
          {
            title: "Cloud Security & Framework Expertise",
            subItems: [
              "Designed cloud compliance strategies in alignment with regulatory standards and security benchmarks.",
              "Led a cross-framework control mapping initiative covering 30+ cybersecurity frameworks, including PCI DSS v4.0, FedRAMP, HITRUST, and international regulations."
            ]
          }
        ]
      }
    ]
  }
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
                <p className="text-zinc-400 text-sm mb-1">
                  {item.company} 
                  {item.location && <span className="text-zinc-500"> | {item.location}</span>}
                  <span className="text-zinc-500"> | {item.period}</span>
                </p>
                
                <div className="mt-4">
                  <p className="text-zinc-400 text-sm mb-4">{item.description}</p>
                  {item.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="mb-4">
                      <h3 className="font-semibold text-zinc-300 text-sm mb-3">{section.title}</h3>
                      <div className="space-y-3">
                        {section.items.map((point, pointIdx) => (
                          <div key={pointIdx} className="text-zinc-400 text-sm">
                            <div className="flex items-start">
                              <span className="text-zinc-500 mr-2 flex-shrink-0">•</span>
                              <div>
                                <span className="font-medium text-zinc-300">{point.title}</span>
                                {point.description && (
                                  <div className="mt-1">
                                    {point.description}
                                  </div>
                                )}
                                {point.subItems && (
                                  <div className="mt-2 ml-4 space-y-1">
                                    {point.subItems.map((subItem, subIdx) => (
                                      <div key={subIdx} className="flex items-start">
                                        <span className="text-zinc-500 mr-2 flex-shrink-0">•</span>
                                        <span>{subItem}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}