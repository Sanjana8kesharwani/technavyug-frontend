import React from "react";
import MainLayout from "../layouts/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="text-gray-600 text-center mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* INTRO */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                1. Introduction
              </h2>
              <p>
                At <strong>Technavyug</strong>, we value your privacy. This
                policy explains how we collect, use, and protect your
                information when you use our platform.
              </p>
            </div>

            {/* DATA COLLECTION */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                2. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email, and contact details</li>
                <li>Account login information</li>
                <li>Usage and activity data</li>
                <li>Device and browser information</li>
              </ul>
            </div>

            {/* USAGE */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve services</li>
                <li>To verify certificates</li>
                <li>To communicate updates</li>
                <li>To enhance user experience</li>
              </ul>
            </div>

            {/* SHARING */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                4. Data Sharing
              </h2>
              <p>
                We do not sell your personal data. Information may only be
                shared with trusted partners or when required by law.
              </p>
            </div>

            {/* SECURITY */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                5. Data Security
              </h2>
              <p>
                We use secure technologies and best practices to protect your
                data from unauthorized access or misuse.
              </p>
            </div>

            {/* RIGHTS */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                6. Your Rights
              </h2>
              <p>
                You can request to access, update, or delete your personal data
                at any time.
              </p>
            </div>

            {/* COOKIES */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                7. Cookies
              </h2>
              <p>
                We use cookies to improve performance and analyze user behavior.
              </p>
            </div>

            {/* CHANGES */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                8. Policy Updates
              </h2>
              <p>
                This policy may be updated periodically. Please check this page
                regularly for changes.
              </p>
            </div>

            {/* CONTACT */}
            <div className="mt-10 p-5 bg-gray-100 rounded-xl border border-gray-300">
              <h2 className="text-lg font-semibold text-black mb-2">
                Contact Us
              </h2>
              <p>Email: support@technavyug.com</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicy;
