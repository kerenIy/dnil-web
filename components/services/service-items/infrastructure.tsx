import React from "react";

const NetworkingSolutions = () => {
  return (
    <div className="max-w-5xl mx-auto font-sans text-[#0C0C0C]">
      {/* LAN Structured Cabling */}
      <section className="mb-12">
        <p className="mb-6">
          Your network{"'"}s reliability starts with its foundation. DNIL
          provides complete structured cabling solutions for voice, data, and
          video— designed, installed, and tested to global standards by our
          certified engineers.
        </p>

        <div>
          <h3 className="text-base font-semibold mb-4">Service Offerings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Structured cabling for new builds and renovations",
              "End-to-end project management and standards consulting",
              "Telecom room and data center design and setup",
              "Cable trays, cabinets, patch panels, and terminations",
              "ANSI/EIA/TIA 568B & IEEE 802.3AB compliance",
              "Full documentation, certification, and support",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-3 rounded shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Solutions */}
      <section>
        <h2 className="text-xl font-semibold border-b-2 border-purple-900 pb-1 mb-4">
          Networking Solutions
        </h2>

        <div>
          <h3 className="text-lg font-bold mb-2">
            Software-Defined WAN (SD-WAN)
          </h3>
          <p className="mb-6">
            Adapt to the demands of a cloud-first world with DNIL’s SD-WAN. Our
            solution simplifies your network, optimizes traffic, and enhances
            security—while lowering operational costs
          </p>

          <h4 className="text-lg font-semibold mb-4">Key Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Centralized network management",
              "Real-time, application-aware traffic routing",
              "Support for MPLS, broadband, and 4G/5G",
              "Integration with firewalls, VPNs, and SASE",
              "Performance optimization for SaaS and IaaS",
            ].map((feature, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 rounded shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkingSolutions;
