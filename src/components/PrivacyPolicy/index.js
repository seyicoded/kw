/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import ReactCollapse from "../ReactCollapse";

const Style = styled.div`
  padding: 4rem 0;
  background-color: #f1f1f1;
  p {
    margin-bottom: 1.5rem;
    color: #000000;
    line-height: 40px;
    font-weight: 400;
    font-size: 16px;
  }
  ul {
    /* margin: 0;
    padding: 0; */
  }
  li {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #000;
    word-break: break-all;
  }
`;

export default function index({ FaqsData }) {
  return (
    <Style>
      <div className="container">
        <div className="px-4">
          <div className="mb-5">
            <div className="mb-5">
              <h5>PRIVACY NOTICE</h5>
              <h6 className="text-muted">Last updated February 23, 2022</h6>
            </div>
            <p>
              {" "}
              This privacy notice for Homey Technologies Limited (doing business
              as Krib) ("Krib," "we," "us," or "our"), describes how and why we
              might collect, store, use, and/or share ("process") your
              information when you use our services ("Services"), such as when
              you:
            </p>
            <p>
              Visit our website at http://www.krib.ng, or any website of ours
              that links to this privacy notice. Download and use our
              application(s), such as our mobile application — Krib, our
              Facebook application — Krib, or any other application of ours that
              links to this privacy notice. Engage with us in other related ways
              ― including any sales, marketing, or events.
            </p>
            <p>
              Questions or concerns? Reading this privacy notice will help you
              understand your privacy rights and choices. If you do not agree
              with our policies and practices, please do not use our services.
              If you still have any questions or concerns, please contact us at
              hello@krib.ng.
            </p>
          </div>
          <div className="mb-5">
            <div className="mb-5">
              <h5>SUMMARY OF KEY POINTS</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              {" "}
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for. You can
              also click here to go directly to our table of contents. you:
            </p>
            <p>
              What personal information do we process? When you visit, use, or
              navigate our Services, we may process personal information
              depending on how you interact with Krib and the Services, the
              choices you make, and the products and features you use.
            </p>
            <p>
              Do we process any sensitive personal information? We may process
              sensitive personal information when necessary with your consent or
              as otherwise permitted by applicable law.
            </p>

            <p>
              {" "}
              Do you receive any information from third parties? We do not
              receive any information from third parties.
            </p>
            <p>
              How do you process my information? We process your information to
              provide, improve, and administer our Services, communicate with
              you, for security and fraud prevention, and comply with the law.
              We may also process your information for other purposes with your
              consent. We process your information only when we have a valid
              legal reason to do so. Click here to learn more.
            </p>
            <p>
              In what situations and with which parties do we share personal
              information? We may share information in specific situations and
              with specific third parties. Click here to learn more.
            </p>
            <p>
              How do we keep your information safe? We have organizational and
              technical processes and procedures in place to protect your
              personal information. However, no electronic transmission over the
              internet or information storage technology can be guaranteed to be
              100% secure, so we cannot promise or guarantee that hackers,
              cybercriminals, or other unauthorized third parties will not be
              able to defeat our security and improperly collect, access, steal,
              or modify your information. Click here to learn more.
            </p>
            <p>
              What are your rights? Depending on where you are located
              geographically, the applicable privacy law may mean you have
              certain rights regarding your personal information. Click here to
              learn more.
            </p>
            <p>
              How do I exercise my rights? The easiest way to exercise your
              rights is by filling out our data subject request form available
              here, or by contacting us. We will consider and act upon any
              request in accordance with applicable data protection laws.
            </p>
            <p>
              Want to learn more about what Krib does with any information we
              collect? Click here to review the notice in full.
            </p>
          </div>
          <div className="mb-5">
            <div className="mb-4">
              <h5>TABLE OF CONTENTS</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <ol>
              <li> WHAT INFORMATION DO WE COLLECT?</li>
              <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
              <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
              <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li> HOW CAN YOU CONTACT US ABOUT THIS NOTICE</li>
            </ol>
          </div>
          <div className="mb-5">
            <div className="mb-5">
              <h5>1. WHAT INFORMATION DO WE COLLECT?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>

            <p> The personal information you disclose to us.</p>
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on our services, expressing information about us
              or our products and services, when you perform activities on the
              services, or otherwise when you contact us.
            </p>
            <p>
              Personal information provided by you. The personal information we
              collect depends on the context of your interactions with us and
              the services, the choices you make, and the products and features
              you use. The personal information we may collect include the
              following:
            </p>
            <ul className="">
              <li>names</li>
              <li>phone numbers</li>
              <li>email addresses</li>
              <li>job titles </li>
              <li>usernames </li>
              <li> passwords</li>
              <li> contact preferences</li>
              <li>contact or authentication data</li>
              <li> billing addresses </li>
              <li>debit/credit card numbers</li>
            </ul>
            <p>
              Sensitive Information. When necessary, with your consent or as
              otherwise permitted by applicable law, we process the following
              categories of sensitive information:
            </p>
            <ul>
              <li>financial data </li>
              <li>biometric data</li>
              <li>creditworthiness data</li>
              <li>social security numbers or other government identifiers.</li>
            </ul>
            <p>
              <span className="fw-bold"> Payment Data: </span> We may collect
              data necessary to process your payment if you make purchases, such
              as the payment instrument number ( such as a credit/debit card
              number) and the security code associated with your payment
              instrument. All payment data is stored by Monnify. You may find
              their privacy notice link(s) here:
              <a href="https://monnify.com/privacy-policy.html#:~:text=You%20may%20not%20use%20Monnify">
                https://monnify.com/privacy-policy.html#:~:text=You%20may%20not%20use%20Monnify
              </a>
            </p>
            <p>
              <span className="fw-bold"> Social Media Login Data: </span> We may
              provide you with the option to register with us using your
              existing social media account details, like your Facebook,
              Twitter, or other social media account.
            </p>
            <p>
              <span className="fw-bold">Application Data:</span> If you use our
              application(s), we may collect the following information if your
              choose to provide us with access or permission:
            </p>

            <p>
              <span className="fw-bold">Geolocation Information: </span> We may
              request access or permission to track location-based information
              from your mobile device, either continuously or while you are
              using our mobile application(s), to provide certain location-based
              services. If you wish to change our access or permissions, you may
              do so in your device’s settings.
            </p>
            <p>
              <span className="fw-bold">Mobile Device Access: </span>
              We may rest access it permission to certain features from your
              mobile device, including your mobile device’s camera, calendar,
              microphone, sensors, social media accounts, storage, contacts,
              reminders, SMS messages, Bluetooth, and other features. If you
              wish to change our access or permissions, you may do so in your
              device’s settings.
            </p>
            <p>
              <span className="fw-bold"> Mobile Data Device:</span>
              We automatically collect device information (such as your device
              ID, model, and manufacturer), operating system, version
              information, and system configuration information, device, and
              application identification numbers, browser type and version,
              hardware model, internet service provider, and/ or mobile carrier,
              and internet protocol (IP) address or (proxy server). If you are
              using our application(s), we may also collect information about
              the phone network associated with your mobile device, your mobile
              device’s operating system or platform, the type of mobile device
              you use, your mobile device’s operating system or platform, the
              type of mobile device you use, your mobile device’s unique ID and
              information about the features of our application(s) you accessed.
            </p>
            <p>
              <span className="fw-bold"> Push Notifications:</span>
              We may request to send you push notifications regarding your
              account or certain features of the application(s). If you wish to
              opt-out from receiving these types of communications, you may turn
              them off in your device’s settings.
            </p>
            <p>
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and forum
              our internal analytics and reporting purposes. All personal
              information that you provide to us must be true, complete, and
              accurate and you must notify us of any changes to such personal
              information.
            </p>
            <p>
              <span className="fw-bold">
                Information automatically collected
              </span>
            </p>
            <p>
              We automatically collect certain information when you visit, use
              or navigate the services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser, and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about his and when you use our services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our services, and for our
              internal analytics and reporting purposes.
            </p>
            <p>
              Like many businesses, we allow collecting information through
              cookies and similar technologies. The information we collect
              includes:
            </p>

            <p>
              <span className="fw-bold"> Log and Date Usage:</span>
              Log and Data Usage data is a service-related, diagnostic, usage,
              and performance information our servers automatically collect when
              you access or use our services and which we record in log files.
              Depending on how you interact with us, this log data may include
              your IP address, device information, browser type, and settings
              and with information about your activity in the Services (such as
              date/time stamps associated with your usage, pages, and files
              viewed, event information (such as system activity, error reports
              (sometimes called “crashdumps”), and hardware settings).
            </p>
            <p>
              <span className="fw-bold"> Device Data:</span>
              We collect device data such as information about your computer,
              phone, tablet, or other devices you use to access the services.
              Depending on the devices used, this device data may include
              information such as your IP address (or proxy server), device and
              application identification numbers, location, browser type,
              hardware model, Internet service provider and/or mobile carrier,
              operating system, and system configuration information.
            </p>
            <p>
              <span className="fw-bold"> Location Data:</span>
              We collect location data such as information about your device’s
              location, which can either be precise or imprecise. How much
              information we collect depends on the type and settings of the
              device you use to access the services. For example, we may use GPS
              and other technologies to collect geolocation data that tells us
              your current location (based on IP address). You can opt-out of
              allowing us to collect this information either by refusing access
              to the information or by disabling your location setting on your
              device. However, if you chose to opt-out, you may not be able to
              use certain aspects of the services.
            </p>
            <p>
              Information is collected when you use our Facebook application(s).
              We by default access your Facebook basic account information,
              including your name, email, gender, birthday, current city, and
              profile picture URL as well as other information you choose to
              make public.
            </p>
          </div>
          <div className="mb-5">
            <div className="mb-5">
              <h5>2. HOW DO WE PROCESS YOUR INFORMATION?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>

            <p>
              We process the information to provide, improve, administer or
              services, communicate with you, for security and fraud prevention,
              and comply with the law. We may also process your information for
              other purposes without your consent.
            </p>
            <p>
              We process your personal information for a variety of reasons,
              depending on how you interact with our services, including:
            </p>
            <p>
              <span className="fw-bold">
                {" "}
                To facilitate account creation and authentication and otherwise
                manage user accounts:{" "}
              </span>
              We may process your information so you can create and log in to
              your account, as well as keep your account in working order.
            </p>
            <p>
              <span className="fw-bold">
                {" "}
                To deliver and facilitate the delivery of services to the user:
              </span>
              We may process information to provide you with the requested
              service.
            </p>
            <p>
              <span className="fw-bold">
                {" "}
                To respond to user inquiries/offer support to users:
              </span>
              We may proceed with your information to respond to your inquiries
              and solve any potential issues you might have with the requested
              service.
            </p>
            <p>
              <span className="fw-bold">
                To send administrative information to you:
              </span>
              We may process your information to send you details about our
              products and services, changes to our terms and policies, and
              other similar information.
            </p>
            <p>
              <span className="fw-bold">
                {" "}
                To fulfill and manage your orders:
              </span>
              We may process your information to fulfill and manage your orders,
              payments, returns, and exchanges made through the services.
            </p>
            <p>
              <span className="fw-bold">
                {" "}
                To enable user-to-user communications:
              </span>
              We may process your information if you choose to use any of our
              offerings that allow for communication with another user.
            </p>
            <p>
              <span className="fw-bold"> To request feedback:</span>
              We may process your information when necessary to request feedback
              and to contact you about your use of our services.
            </p>
            <p>
              <span className="fw-bold">
                To send you marketing and promotional communications:
              </span>
              We may process the personal information you send to us for our
              marketing purposes if this is in accordance with your marketing
              preferences. You can opt-out of marketing emails at any time. For
              more information, see “WHAT ARE YOUR PRIVACY RIGHTS?” below).
            </p>

            <p>
              <span className="fw-bold">
                To deliver targeted advertising to you:
              </span>
              We may process your information to develop and display
              personalized content and advertising tailored to your interests,
              location, and more.
            </p>
            <p>
              <span className="fw-bold">To post testimonials:</span>
              We post testimonials on our services that may contain personal
              information.
            </p>
            <p>
              <span className="fw-bold">To protect our services:</span>
              We may process your information as part of our efforts to keep our
              services safe and secure, including fraud monitoring and
              prevention.
            </p>
            <p>
              <span className="fw-bold">
                To administer prize draws and competitions:
              </span>
              We may process your information to administer prize draws and
              competitions.
            </p>
            <p>
              <span className="fw-bold">
                To evaluate and improve our services, products, marketing, and
                your experience:
              </span>
              We may process your information when we believe it is necessary to
              identify usage trends, determine the effectiveness of promotional
              campaigns, and evaluate and improve our services, products,
              marketing, and your experience.
            </p>
            <p>
              <span className="fw-bold">To identify usage trends:</span>
              We may process your information about how you use our services to
              better understand how they are being used so we can improve them.
            </p>
            <p>
              <span className="fw-bold">
                To determine the effectiveness of our marketing and promotional
                campaigns:
              </span>
              We may process your information to better understand how to
              provide marketing and promotional campaigns that are most relevant
              to you.
            </p>
            <p>
              <span className="fw-bold">
                To comply with our legal obligations:
              </span>
              We may process your information to comply with our legal
              obligations, respond to legal requests, and exercise, establish,
              or defend our legal rights.
            </p>
          </div>
          <div className="mb-5">
            <div className="mb-5">
              <h5>
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              We may need to share your personal information in the following
              situations.
            </p>

            <p>
              <span className="fw-bold"> Business Transfers: </span>
              We may share or transfer our information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </p>
            <p>
              <span className="fw-bold">
                {" "}
                When we use Google Maps Platform APIs:{" "}
              </span>
              We may share your information with certain Google Maps Platform
              APIs (e.g Google Maps API, Places API). To find out more about
              Google’s Privacy Policy, please refer here. We obtain and store on
              your device (‘cache’) your location for twelve (12) months. You
              may revoke your consent anytime by contacting us at the contact
              details provided at the end of this document.
            </p>
            <p>
              <span className="fw-bold"> Affiliates: </span>
              We may share your information with our affiliates, in which case
              we will require those affiliates to honor this privacy notice.
              Affiliates include our parent company and any subsidiaries, joint
              venture partners, or other companies that we control or that are
              under common control with us.
            </p>
          </div>
          <div className="mb-5">
            <div className="mb-5">
              <h5>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Specific
              information about how we use such technologies and how you can
              refuse certain cookies is set out in our Cookie Notice.
            </p>
          </div>

          <div className="mb-5">
            <div className="mb-5">
              <h5>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>

            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice unless a
              longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us to keep your personal information for
              longer than twelve (12) months past the termination of the user’s
              account.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information or, if this is not possible (for example, because your
              personal information has been stored in backup archives), then we
              will securely store your personal information and isolate it from
              any further processing until deletion is possible.
            </p>
          </div>

          <div className="mb-5">
            <div className="mb-5">
              <h5>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission Ofer internet or information storage technology can
              be guaranteed to be 100% secure, so we cannot promise or guarantee
              that hackers, cybercriminals, or other unauthorized third parties
              will not be able to defeat our secretory and improperly collect,
              access, steal, or modify your information. Although we will do our
              best to protect your personal information, the transmission of
              personal information to and from our services is at your own risk.
              You should only access the services within a secure environment.
            </p>
          </div>

          <div className="mb-5">
            <div className="mb-5">
              <h5>7. DO WE COLLECT INFORMATION FROM MINORS?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent’s use of the services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we may have collected from
              children under age 18, please contact us at hello@krib.ng
            </p>
          </div>
          <div className="mb-5">
            <div className="mb-5">
              <h5>8. WHAT ARE YOUR PRIVACY RIGHTS?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              <span className="fw-bold"> Withdrawing your consent: </span>
              If we are relying on your consent to process your personal
              information, which may be express and/or implied consent depending
              on the applicable law, you have the right to withdraw your consent
              at any time. You can withdraw your consent at any time by
              contacting us using the contact details provided in the section
              “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below. However, please
              note that this will not affect the lawfulness of the processing
              before its withdrawal, now when applicable laws allow, will it
              affect the processing of your personal information conducted in
              reliance on lawful processing grounds other than consent.
            </p>
            <p>
              <span className="fw-bold">
                {" "}
                Opting out of marketing and promotional communications:
              </span>
              You can unsubscribe from marketing and promotional communications
              at any time by clicking on the unsubscribe link in the emails that
              we send, or by contacting us using the details provided in the
              section “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below. You
              will then be removed from the marketing lists - however, we may
              still communicate with you, for example, to send you
              service-related messages that are necessary for the administration
              and use of your account, to respond to service requests, or for
              other non-marketing purposes.
            </p>
            <div>
              <p>
                <span className="fw-bold"> Account Information: </span>
                If you would at my time like to review or change the information
                in your account or terminate your account, you can:
              </p>
            </div>
            <ul>
              <li>
                Log in to your account settings and update your user account.
              </li>
              <li>Contact us using the contact information provided.</li>
            </ul>
            <p>
              Upon the request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms, and/or comply with applicable legal
              requirements.
            </p>
            <p>
              <span className="fw-bold">Cookies and similar technologies:</span>
              Most web browsers are set to accept cookies by default. If you
              prefer, you can usually choose to set your browser to remove
              cookies and to reject cookies. If you choose to remove or reject
              cookies, this will affect certain features or services of our
              articles. If you have any questions or comments about your privacy
              rights, you may email us at hello@krib.ng
            </p>
          </div>

          <div className="mb-5">
            <div className="mb-5">
              <h5>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (“DNT”) feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
          </div>

          <div className="mb-5">
            <div className="mb-5">
              <h5>10. DO WE MAKE UPDATES TO THIS NOTICE?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated “Revised” date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
          </div>
          <div className="mb-5">
            <div className="mb-5">
              <h5>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h5>
              {/* <h6 className="text-muted">Last updated February 23, 2022</h6> */}
            </div>
            <p>
              If to have questions or comments about this notice, you may
              contact our Data Protection Officer (DPO) by email at
              hello@krib.ng or by phone at +234 703 616 4880, or by post to:
            </p>
            <p>
              Homey Technologies Limited
              <br />
              Data Protection Officer,
              <br />
              L12B, Babatunde Pinherio Avenue, Sunnyvale Estate,
              <br />
              Abuja, 90001,
              <br />
              Nigeria.
            </p>
          </div>
        </div>
      </div>
    </Style>
  );
}
