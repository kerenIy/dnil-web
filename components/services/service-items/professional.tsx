import React from "react";

const Professional = () => {
  return (
    <div className="max-w-5xl mx-auto font-sans text-[#0C0C0C]">
      {/* LAN Structured Cabling */}
      <section className="mb-12">
        <p className="mb-6">
          From foundational design to complex deployments, our expert
          consultants support your digital evolution. We offer industry best
          practices, deep OEM experience, and end-to-end solution design.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-4">Areas of Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Infrastructure planning and rollout",
              "System configuration and optimization",
              "Technology roadmapping",
              "OEM-aligned solution architecture",
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

export default Professional;
