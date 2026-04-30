import React from "react";
import SEO from "../seo/SEO";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="Privacy Policy - Civic Pulse Media" 
        description="Read the Civic Pulse Media Privacy Policy to understand how we collect, use, and protect your data." 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12">Last Updated: {currentDate}</p>

        <div className="font-body text-base leading-relaxed prose prose-lg max-w-none prose-blue dark:prose-invert">
          <p>
            At Civic Pulse Media, we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the website civicpulsemedia.com and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our Website, including information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information");</li>
            <li>That is about you but individually does not identify you, such as your interests or preferences; and/or</li>
            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">2. How We Collect Information</h2>
          <p>We collect this information:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>Directly from you when you provide it to us (e.g., newsletter subscriptions, contact forms).</li>
            <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>To present our Website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
            <li>To improve our Website and deliver a better and more personalized service based on user behavior and preferences.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">4. Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
          <p>
            We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">5. Data Security</h2>
          <p>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">6. Changes to Our Privacy Policy</h2>
          <p>
            It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">7. Contact Information</h2>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:privacy@civicpulsemedia.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">privacy@civicpulsemedia.com</a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
