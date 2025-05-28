import React from "react";

const Procurement = () => {
  return (
    <div className="max-w-5xl mx-auto font-sans text-[#0C0C0C]">
      {/* LAN Structured Cabling */}
      <section className="mb-12">
        <p className="mb-6">
          We excel in a streamlined sourcing process by cultivating alliances
          with leading technology providers. This strategic network grants us
          priority access to cutting-edge solutions, innovations, and
          preferential pricing. Our ongoing relationship with top brands enables
          us to deliver diverse solutions, including Hardware & Software,
          Support & Maintenance.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-4">Service Offerings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Hardware & software acquisition",
              "Maintenance contracts",
              "Lifecycle management",
              "Direct vendor support",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-3 rounded shadow-sm text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Procurement;
