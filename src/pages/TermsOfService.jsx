import React from "react";
import SEO from "../seo/SEO";
import { motion } from "motion/react";

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="Terms of Service - Civic Pulse Media" 
        description="Read the Terms of Service for using the Civic Pulse Media website." 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" mx-auto"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12">Last Updated: {currentDate}</p>

        <div className="font-body text-base leading-relaxed prose prose-lg max-w-none prose-blue dark:prose-invert">
          <p>
            Welcome to Civic Pulse Media. These Terms of Service ("Terms") govern your use of the website located at civicpulsemedia.com (the "Site") operated by Civic Pulse Media ("us", "we", or "our").
          </p>
          <p>
            By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">1. Use of the Site</h2>
          <p>
            You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate Civic Pulse Media, a Civic Pulse Media employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which, as determined by us, may harm Civic Pulse Media or users of the Site or expose them to liability.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Civic Pulse Media, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as generally and ordinarily permitted through the Site according to these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">3. Disclaimer of Warranties</h2>
          <p>
            You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data.
          </p>
          <p>
            YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">4. Limitation on Liability</h2>
          <p>
            IN NO EVENT WILL CIVIC PULSE MEDIA, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">5. Governing Law and Jurisdiction</h2>
          <p>
            All matters relating to the Website and these Terms of Service and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of New York without giving effect to any choice or conflict of law provision or rule.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">6. Changes to the Terms of Service</h2>
          <p>
            We may revise and update these Terms of Service from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter.
          </p>
          <p>
            Your continued use of the Website following the posting of revised Terms of Service means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:legal@civicpulsemedia.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">legal@civicpulsemedia.com</a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
