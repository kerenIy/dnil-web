import React from "react";

const Security = () => {
  return (
    <div className="max-w-5xl mx-auto font-sans text-[#0C0C0C]">
      {/* LAN Structured Cabling */}
      <section className="mb-12">
        <p className="mb-6">
          DNIL safeguards your digital environment from end to end. We provide
          advanced, adaptive protection to secure your infrastructure, users,
          and data.
        </p>

        <div>
          <h3 className="text-base font-semibold mb-4">Service Offerings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Identity & Access Management (IAM)",
              "Next-Gen Firewalls",
              "Secure Access Service Edge (SASE)",
              "Threat monitoring and mitigation",
              "Compliance support and audit readiness",
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

export default Security;
