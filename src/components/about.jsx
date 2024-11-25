// import React from "react";

// export const About = (props) => {
//   return (
//     <div id="about">
//       <div className="container">
//         <div className="row">
//           <div
//             className="col-xs-12 col-md-6 "
//             style={{ display: "flex", justifyContent: "center" }}
//           >
//             <div className="about-text">
//               <h2>About Us</h2>
//               <p>{props.data ? props.data.paragraph : "loading..."}</p>
//               <h2></h2>
//               <h3>Why Choose Us?</h3>
//               <div className="list-style">
//                 <div className="col-lg-6 col-sm-6 col-xs-12">
//                   <ul>
//                     {props.data
//                       ? props.data.Why.map((d, i) => (
//                           <li key={`${d}-${i}`}>{d}</li>
//                         ))
//                       : "loading"}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import "./AboutUs.css"; // Create a CSS file for styling

export const About = (props) => {
  const sections = [
    {
      icon: "./img/Icons 2/Our work.png",
      title: "Our Work Matters",
      description:
        "It’s exceptionally exciting to know our creations end up in the hands of millions of people all around the world, and that our work matters to them.",
    },
    {
      icon: "./img/Icons 2/Custom.png",
      title: "Custom Designs",
      description:
        "Apps are incredibly well-designed and polished since our designers are required to be creative and passionate, which has led to our success and great recognition.",
    },
    {
      icon: "./img/Icons 2/Quality.png",
      title: "Exceptional Quality",
      description:
        "We create premium apps with a strong focus on ensuring the highest level of client satisfaction. We prioritize our clients' needs and aspirations, dedicating our time, resources, and commitment to delivering exceptional results.",
    },
    {
      icon: "./img/Icons 2/Security.png",
      title: "Robust Security",
      description:
        "We prioritize the privacy of our customers and ensure robust data protection. We never share or disclose any customer data with third-party apps.",
    },
    {
      icon: "./img/Icons 2/Disrupt.png",
      title: "We Disrupt",
      description:
        "We thrive on innovative, high-potential ideas and embrace change, never letting the fear of the unknown hold us back from exploring new possibilities.",
    },
    {
      icon: "./img/Icons 2/support.png",
      title: "Reliable Support",
      description:
        "Secure Soft Ltd. is known for its commitment to high-quality software and ethical business practices, offering 24/7 support. This reputation is reflected in the success of our top-ranked apps.",
    },
  ];

  return (
    <div id="about">
      <div className="about-us-container">
        <h1>ABOUT US</h1>
        <p className="about-us-description">
          Secure Soft Ltd. is a premier software development company
          specializing in mobile application solutions for the iOS App Store.
          Over the years, we have been a trusted provider of applications for
          iPhones and iPads, empowering global enterprises with impactful mobile
          solutions. Driven by our users ambitions, we harness the full
          potential of iOS app development to deliver exceptional, tailor-made
          applications. Offering both free downloadable and subscription-based
          apps, we ensure seamless performance and outstanding user experiences.
          At Secure Soft Ltd., we’re dedicated to shaping the future of mobile
          technology.
        </p>
        <div className="about-us-grid">
          {sections.map((section, index) => (
            <div className="about-us-card" key={index}>
              {/* <div className="icon">{section.icon}</div> */}

              <div className="icon">
                <img src={section.icon} className=" icons" />
              </div>
              <div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
