import React, { useEffect } from "react";
import Terms from "../components/Terms";
import { termsAndConditions, userPolicy } from "../components/TermsPolicy";
const TermsCondition = () => {
  useEffect(() => {
    document.title = `Terms and Conditions`;
  }, []);
  return (
    <main className="container mx-auto">
      <Terms title="Terms and Conditions" data={termsAndConditions} />
      <Terms title="Users Policy" data={userPolicy} />
    </main>
  );
};

export default TermsCondition;
