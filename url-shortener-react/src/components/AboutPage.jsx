import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div 
      className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/images/aboutpagebg.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >  
      {/* Content Wrapper */}
      <div className="w-full sm:py-10 py-8">

        <h1 className="sm:text-4xl text-white text-3xl font-bold italic mb-3">
          About LinkLitez
        </h1>
        <p className="text-white text-lg italic mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full whitespace-nowrap">
          LinkLitez simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links.
        </p> <br /><br /> <br /><br /><br /><br /><br />

        {/* 🔹 Company Mission & Vision Section */}
        <div className="mt-10 p-8 rounded-lg">
          <h2 className="text-4xl font-bold italic text-white text-left">
            Our Mission & Vision
          </h2>
          <p className="text-white text-lg italic text-center mt-4">
            <strong><u>Our Mission:</u></strong> At LinkLitez, our mission is to
            empower businesses, creators, and marketers with seamless link
            management and analytics. We simplify URL shortening while enhancing
            engagement tracking, ensuring every click drives meaningful
            insights.
          </p> <br />
          <p className="text-white text-lg italic text-center mt-4">
            <strong><u>Our Vision:</u></strong> We envision a digital ecosystem where
            link management is effortless, analytics are actionable, and
            businesses harness data-driven decisions to fuel growth.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;