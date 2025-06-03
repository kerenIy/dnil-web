"use client";
import { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://chatbot.ankursolutions.com/widget.js";
    script.async = true;
    script.setAttribute("data-name", "DNILBot");
    script.setAttribute(
      "data-token",
      "gAAAAABoNXl6Ptb78SFMAdRohLEgRFHVAINWHWhfLsT1Qwbe7xyzC4YoidSS1uBiIROEGR5c3-wxcz3gPXFj64UtAEmui-EoM2RmftWJ3N4O1QS_2BXFB4c=--gAAAAABoNXl6_e1dbd5gSc9uiiX58wHjOwcdPCllE_rnGXTjF8qc2YoJtGLhSqHSs0XeIW7-16txbMPjeYcFcriE00g4RYH9-Q==--gAAAAABoNXl6eG8S7_V1oXnHD4B_aJFdhXwKgZzlWLhf9vSgJMCTaZMBXzrD7HkQ6dJ-zA0N-_cXxK5X1dr67LDWprtQz5hfZPyrrHf0AUuONsA0vZOnkC8"
    );
    script.setAttribute("data-icon", "");
    script.setAttribute("data-color", "");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
