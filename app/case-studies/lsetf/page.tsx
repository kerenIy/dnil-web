"use client";

import CaseStudyPage from "@/components/case-studies";

export default function Page() {
  return (
    <CaseStudyPage
      heroTitle="Case Studies"
      heroDescription="Learn about a few of our success stories in the industries we have had the pleasure to delve into."
      mainCaseStudy={{
        title: "LAGOS STATE EMPLOYMENT TRUST FUND",
        description:
          "The Lagos State Employment Trust Fund (LSETF) was established by The Lagos State Employment Trust Fund Law 2016 to provide financial support to residents of Lagos State, to tackle unemployment through job and wealth creation. The Fund will operate with an initial capital of N25Billion contributed over four years by the Lagos State Government but will also raise additional funding from various sources including donor partners, development agencies, corporate organizations and individuals.",
        image: "/case-studies/lseft-abt.png",
      }}
      tabContent={{
        need: `As LSETF prepared to support a large and growing number of applicants and beneficiaries, it became clear that manual documentation and data handling would be inefficient and unsustainable. A scalable, secure, and digitized system was critical to managing high volumes of customer data and ensuring smooth, transparent operations. The organization required an infrastructure that could support multiple applications, handle growing workloads, and guarantee data availability without the limitations of physical server environments.`,
        solution: `To meet these demands, DNIL designed and deployed a fully virtualized private cloud data center for LSETF. We collaborated with leading OEM partners. including VMware, Dell EMC, Cisco, and Vertiv, to build an agile and scalable infrastructure. Instead of relying on physical servers, we implemented virtualized servers to support high-performance computing, improve resource utilization, and allow for easier system expansion as demand grows.`,
        value: `Today, LSETF operates a fully digitized system for its day-to-day activities, enabling efficient data management and service delivery. This digital infrastructure has empowered thousands of businesses and individuals in Lagos State, helping them access funding, grow sustainably, and achieve financial independence.`,
      }}
      tabImage={{
        need: `/case-studies/lseft4.jpg`,
        solution: `/case-studies/lseft2.png`,
        value: `/case-studies/lseft3.png`,
      }}
    />
  );
}
