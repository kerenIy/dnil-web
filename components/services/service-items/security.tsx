import React from "react";
import CardGrid from "../card";

export default function Security() {
  const endpointSecurity = [
    {
      title: "Endpoint protection platform (EPP)",
      description:
        "An EPP (Endpoint Protection Platform) is a preventive tool that scans files at the point of entry into a network. The most common type is antivirus (AV) software, which uses threat intelligence to detect known, signature-based malware.",
    },
    {
      title: "Endpoint detection and remediation (EDR)",
      description:
        "EDR continuously monitors endpoints, offering deep visibility and detecting advanced threats like ransomware, fileless malware, and polymorphic attacks.",
    },
    {
      title: "Extended detection and response (XDR)",
      description:
        "XDR (Extended Detection and Response) builds on EDR by integrating multiple security tools, offering broader visibility, and using analytics and automation to detect current and future threats.",
    },
    {
      title: "Secure MDR for Endpoint",
      description:
        "Cisco Secure’s Truman Coburn and Security Consulting Engineer Andy Hagar discuss the role the Cisco MDR platform and automation plays when investigating and mitigating threats.",
    },
  ];

  const ismComponents = [
    {
      title: "Identity Management",
      description:
        "This involves creating, managing, and authenticating user identities within an organization. It answers the 'who' question when accessing systems, including defining and managing user roles, permissions, and privileges.",
    },
    {
      title: "Access Management",
      description:
        "This focuses on controlling what resources users can access based on their identities and permissions. It ensures that users have access to only the resources they need, reducing security risks.",
    },
    {
      title: "Identity Governance and Administration (IGA)",
      description:
        "IGA enables security administrators to manage user identities and access across the organization, ensuring compliance with security policies. It combines Identity Governance with Identity Administration.",
    },
    {
      title: "Authentication",
      description:
        "This process verifies a user’s identity to ensure they are who they claim to be.",
    },
    {
      title: "Access Management",
      description:
        "This process determines what resources a user is allowed to access after successful authentication.",
    },
    {
      title: "Audit",
      description:
        "This involves tracking and recording user activities to monitor for security breaches and ensure compliance.",
    },
  ];

  const saseComponents = [
    {
      title: "Cloud-Delivered",
      description:
        "SASE services are delivered as a cloud-based service, eliminating the need for on-premises hardware and software.",
    },
    {
      title: "Converged Networking and Security",
      description:
        "SASE integrates network functions like SD-WAN with security functions like cloud access security brokers (CASB), secure web gateways (SWG), and zero-trust network access (ZTNA).",
    },
    {
      title: "Edge Computing",
      description:
        "SASE emphasizes delivering security controls at the edge, closer to the users, which reduces latency and improves user experience.",
    },
    {
      title: "Zero Trust Security",
      description:
        "SASE often uses a zero-trust security model, where users and devices are not automatically trusted, and access is verified based on their identity, context, and security policies.",
    },
    {
      title: "Global Connectivity",
      description:
        "SASE utilizes a distributed network of cloud-based points of presence (PoPs) around the world to optimize connectivity and reduce latency for users worldwide.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto font-sans text-[#0C0C0C]">
      {/* LAN Structured Cabling */}
      <section className="mb-12">
        <p className="mb-6">
          Protecting your critical data and IT resources in today{"'"}s evolving
          threat landscape requires a precise and proactive approach. DNIL
          offers security solutions that defend against various threats,
          safeguarding resources throughout the entire attack lifecycle. We
          leverage top-tier security expertise to provide proactive defense
          against rapid and evolving risks.
        </p>

        <div>
          <h3 className="text-xl font-semibold border-b-2 border-purple-900 pr-5 pb-3 my-4">
            Service Offerings
          </h3>

          <h3 className="text-lg font-bold mb-2">
            Identity & Access Management (IAM)
          </h3>

          <p>
            This is a crucial aspect of security framework that focuses on
            managing digital identities and controlling access to resources,
            ensuring that only authorized individuals, devices, and systems have
            access to specific applications, data, and other resources.
          </p>

          <h3 className="text-xl font-semibold border-b-2 border-purple-900 pr-5 pb-3 my-6">
            Key Components of ISM
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
            {ismComponents.map((product, index) => (
              <CardGrid key={index} {...product} />
            ))}
          </div>

          <h3 className="text-xl font-semibold border-b-2 border-purple-900 pr-5 pb-3 my-4">
            Service Offerings
          </h3>

          <h3 className="text-lg font-bold mb-2">
            Next-Generation Firewall Solution
          </h3>

          <p>
            With our partnership with Top OEM such as Cisco, Fortinet and
            Palo-Alto, our Next-Generation Firewall (NGFW) offers sophisticated
            network security device that builds upon traditional firewall
            capabilities by adding features like deep packet inspection,
            applicatio awareness, and intrusion prevention systems (IPS). Unlike
            traditional firewalls, which primarily filter traffic based on IP
            addresses and ports, NGFWs can inspect the content of network
            packets at the application level, allowing for more granular and
            effective threat protection.
          </p>

          <h3 className="text-xl font-semibold border-b-2 border-purple-900 pr-5 pb-3 my-4">
            Service Offerings
          </h3>

          <h3 className="text-lg font-bold mb-2">
            Secure Access Service Edge (SASE) solutions
          </h3>

          <p>
            With Applications and users everywhere and anywhere, which is
            creating complexity and greater threats than ever before. At DNIL we
            work with our OEM partners to offer our client a Secure Access
            Service Edge (SASE) solution that will enable them to simplify the
            way they manage infrastructure, securely connect anywhere through
            cloud-based network architecture that combines networking and
            security services to secure users, applications, and data,
            especially in the context of cloud-first and hybrid work
            environments. It provides a more efficient and secure way to connect
            users to applications, regardless of their locations.
          </p>

          <h3 className="text-xl font-semibold border-b-2 border-purple-900 pr-5 pb-3 my-6">
            Key Concepts of SASE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
            {saseComponents.map((product, index) => (
              <CardGrid key={index} {...product} />
            ))}
          </div>

          <h3 className="text-xl font-semibold border-b-2 border-purple-900 pr-5 pb-3 my-6">
            Service Offerings
          </h3>

          <h3 className="text-lg font-bold mb-2">
            End Point Security Endpoint security
          </h3>

          <p>
            is an integral component of the modern security stack. Endpoint
            security combines preventative endpoint protection with a new breed
            of continuous detection and response capabilities. Our team of
            security experts at DNIL in partnership with OEM support team, work
            our client to create Endpoint protection systems designed to quickly
            detect, analyze, block, and contain attacks in progress.
          </p>

          <h3 className="text-xl font-semibold border-b-2 border-purple-900 pr-5 pb-3 my-6">
            DNIL End Point Security Offerings
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
            {endpointSecurity.map((product, index) => (
              <CardGrid key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
