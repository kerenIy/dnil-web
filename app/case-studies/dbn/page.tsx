"use client";

import CaseStudyPage from "@/components/case-studies";

export default function Page() {
  return (
    <CaseStudyPage
      heroTitle="Case Studies"
      heroDescription="Learn about a few of our success stories in the industries we have had the pleasure to delve into."
      mainCaseStudy={{
        title: "DEVELOPMENT BANK OF NIGERIA",
        description:
          "The Development Bank of Nigeria (DBN) was established by the Federal Government of Nigeria in collaboration with international development partners to address the financing challenges faced by Micro, Small, and Medium Enterprises (MSMEs). Its core objective is to ease access to finance for MSMEs and small corporates through sustainable lending and partial credit guarantees provided to eligible financial institutions.",
        image: "/case-studies/dbn-abt.png",
      }}
      tabContent={{
        need: `To drive its mission effectively, DBN required a modern collaboration infrastructure to streamline communication across its teams and stakeholders. With a growing network of partners, intermediaries, and internal teams, the bank needed reliable tools for voice and video communication to enhance productivity and support real-time decision-making. A seamless collaboration environment was critical to ensuring alignment, reducing response times, and improving overall operational efficiency.`,
        solution: `DNIL partnered with Cisco to deliver a complete IP telephony and video conferencing solution for DBN. This system provided a robust communication framework that supports voice calls, virtual meetings, and remote collaboration, empowering DBN's staff to stay connected and productive across all business units.`,
        value: `Today, DBN benefits from a seamless, secure, and scalable collaboration system that supports its day-to-day operations. The integration of Cisco's communication tools has improved internal coordination, reduced operational delays, and enabled faster engagement with partners, helping DBN remain agile as it continues to empower MSMEs across Nigeria.`,
      }}
      tabImage={{
        need: `/case-studies/dbn.png`,
        solution: `/case-studies/dbn2.png`,
        value: `/case-studies/dbn3.png`,
      }}
    />
  );
}
