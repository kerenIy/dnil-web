"use client";

import CaseStudyPage from "@/components/case-studies";

export default function Page() {
  return (
    <CaseStudyPage
      heroTitle="Case Studies"
      heroDescription="Learn about a few of our success stories in the industries we have had the pleasure to delve into."
      mainCaseStudy={{
        title: "EURACARE MULTI-SPECIALIST HOSPITAL & HEART CENTER",
        description:
          "Euracare was established to provide world-class medical services to patients without the stress and expense of traveling abroad. They were looking for cost-effective and efficient healthcare solutions for their employees and customers. To make available to physicians a technologically advanced and optimized work platform.",
        image: "/case-studies/euracare-abt.png",
      }}
      tabContent={{
        need: `As a modern healthcare provider, Euracare set out to deliver a fully digital patient care experience that matched international standards. To achieve this, it was essential to eliminate manual, paper-based processes and ensure that all operations, from patient registration to diagnosis and treatment were powered by secure, high-speed digital infrastructure. The hospital required a reliable ICT backbone that could support real-time access to patient data, seamless mobility for medical staff, and scalable storage for sensitive health records and imaging. A strong digital foundation was critical to improving operational efficiency, ensuring data accuracy, and delivering high-quality care across its facilities.`,
        solution: `We installed Brand-Rex CAT6 structured cabling across the hospital's offices and wards, delivering reliable 1Gb LAN connectivity. A secure wireless network was also deployed to ensure seamless mobility and access to digital resources while on the move.
        To support the hospital's transition from paper-based processes, we partnered with Cisco and DELL EMC to implement a robust IT infrastructure. Using Cisco switches and routers alongside DELL EMC's VxRail and Isilon storage, we delivered a hyper-converged solution capable of handling server workloads and storing patient images in PACS format.`,
        value: `Today, Euracare's facilities in Lagos and Accra operate fully digitized, paperless systems. All patient records and processes are managed via a Hospital Management System (HMS), with doctors and nurses accessing data in real time via tablets and iPads. The hospital has also successfully implemented a five-year data retention policy, ensuring compliance and continuity.`,
      }}
      tabImage={{
        need: `/case-studies/euracare.png`,
        solution: `/case-studies/eura2.png`,
        value: `/case-studies/eura3.png`,
      }}
    />
  );
}
