import React from "react";

const Faq = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">FAQ</h1>
      <div className="space-y-3">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-[#00BF83]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <p className="collapse-title font-semibold">
            How do I create an account?
          </p>
          <p className="collapse-content text-sm dark:bg-[#528d7a]">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </p>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-[#00BF83]">
          <input type="radio" name="my-accordion-2" />
          <p className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </p>
          <p className="collapse-content text-sm dark:bg-[#528d7a]">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </p>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-[#00BF83]">
          <input type="radio" name="my-accordion-2" />
          <p className="collapse-title font-semibold">
            How do I update my profile information?
          </p>
          <p className="collapse-content text-sm dark:bg-[#528d7a]">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
