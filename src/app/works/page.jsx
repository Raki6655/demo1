"use client";
import Templates from "@/components/templates/Templates";
import PageContainer from "@/components/utils/PageContainer";
import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
import React from "react";
import WorkMenu from "./WorkMenu";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const index = () => {
  const [activeSection, setActiveSection] = useState("websites");
  const sliderRef = useRef(null);
  // Function to handle section navigation
  //   const onSectionClick = (section) => {
  //     setActiveSection(section); // Update the active section
  //   };
  const onSectionClick = (section) => {
    // Animate out the current section
    gsap.to(sliderRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      onComplete: () => {
        // Update the active section after the animation completes
        setActiveSection(section);
      },
    });
  };
  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: -20 }, // Initial state
      { opacity: 1, y: 0, duration: 0.5 } // Animate to this state
    );
  }, [activeSection]);
  const object = {
    websites: [
      {
        imgSrc: "/images/FashionPage.png",
        title: "Modern Fashion Design",
        description:
          "A fashion collection store site showcasing the products they sell in an interactive manner.",
        info: "Explore the latest trends in modern fashion.",
        link: "https://fashion-eight-eta.vercel.app/",
      },
      {
        imgSrc: "/images/FashionProject.png",
        title: "Fancy Store",
        description:
          "A fashion collection store site showcasing the products they sell in an interactive manner.",
        info: "Discover exclusive designs and styles.",
        link: "https://cosmetic-store-iota.vercel.app/",
      },
      {
        imgSrc: "/images/MakeupSite.png",
        title: "Modern Cosmetic Brand",
        description:
          "A fashion collection store site showcasing the products they sell in an interactive manner.",
        info: "Revolutionize your beauty routine with our products.",
        link: "https://cosmetic-store-iota.vercel.app/",
      },
    ],
    apps: [
      {
        imgSrc:
          "https://plus.unsplash.com/premium_photo-1721955487745-a2c3aea86d1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwfGVufDB8fDB8fHww",
        title: "Modern Fashion Design",
        description:
          "A fashion collection store site showcasing the products they sell in an interactive manner.",
        info: "Explore the latest trends in modern fashion.",
        link: "https://fashion-eight-eta.vercel.app/",
      },
      {
        imgSrc: "/images/FashionProject.png",
        title: "Fancy Store",
        description:
          "A fashion collection store site showcasing the products they sell in an interactive manner.",
        info: "Discover exclusive designs and styles.",
        link: "https://cosmetic-store-iota.vercel.app/",
      },
      {
        imgSrc:
          "https://plus.unsplash.com/premium_photo-1723860011127-5029e9b914be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
        title: "Modern Cosmetic Brand",
        description:
          "A fashion collection store site showcasing the products they sell in an interactive manner.",
        info: "Revolutionize your beauty routine with our products.",
        link: "https://cosmetic-store-iota.vercel.app/",
      },
    ],
    designs: [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Creative Design Solutions",
        description:
          "Innovative and visually stunning designs tailored to your brand's needs.",
        info: "Transform your ideas into reality with our design expertise.",
        link: "https://example.com/designs",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Minimalist Design",
        description:
          "Clean and modern designs that focus on simplicity and functionality.",
        info: "Less is more with our minimalist design approach.",
        link: "https://example.com/minimalist-design",
      },
    ],
    seo: [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvfGVufDB8fDB8fHww",
        title: "SEO Optimization",
        description:
          "Boost your website's visibility and ranking with our SEO strategies.",
        info: "Get more traffic and grow your business with SEO.",
        link: "https://example.com/seo",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlb3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Keyword Research",
        description:
          "Find the best keywords to target for your business and audience.",
        info: "Unlock the potential of your content with keyword research.",
        link: "https://example.com/keyword-research",
      },
    ],
    branding: [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYW5kaW5nfGVufDB8fDB8fHww",
        title: "Brand Identity",
        description:
          "Create a unique and memorable brand identity that stands out.",
        info: "Build a brand that resonates with your audience.",
        link: "https://example.com/brand-identity",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYW5kaW5nfGVufDB8fDB8fHww",
        title: "Logo Design",
        description:
          "Design a logo that represents your brand's values and vision.",
        info: "Make a lasting impression with a professional logo.",
        link: "https://example.com/logo-design",
      },
    ],
    "social media": [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww",
        title: "Social Media Strategy",
        description:
          "Develop a winning social media strategy to engage your audience.",
        info: "Grow your presence on social media with our expertise.",
        link: "https://example.com/social-media-strategy",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww",
        title: "Content Creation",
        description:
          "Create engaging and shareable content for your social media platforms.",
        info: "Stand out with creative and impactful content.",
        link: "https://example.com/social-media-content",
      },
    ],
    animations: [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "2D Animations",
        description: "Bring your ideas to life with stunning 2D animations.",
        info: "Engage your audience with captivating visuals.",
        link: "https://example.com/2d-animations",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "3D Animations",
        description:
          "Create immersive experiences with high-quality 3D animations.",
        info: "Take your projects to the next level with 3D.",
        link: "https://example.com/3d-animations",
      },
    ],
    "UI/UX": [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVpJTIwdXh8ZW58MHx8MHx8fDA%3D",
        title: "User Interface Design",
        description:
          "Design intuitive and user-friendly interfaces for your applications.",
        info: "Enhance user experience with our UI expertise.",
        link: "https://example.com/ui-design",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVpJTIwdXh8ZW58MHx8MHx8fDA%3D",
        title: "User Experience Research",
        description:
          "Understand your users and improve their experience with our research.",
        info: "Create products that users love.",
        link: "https://example.com/ux-research",
      },
    ],
    marketing: [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Digital Marketing",
        description:
          "Reach your target audience with effective digital marketing strategies.",
        info: "Grow your business online with our marketing expertise.",
        link: "https://example.com/digital-marketing",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Email Campaigns",
        description:
          "Create impactful email campaigns to engage your audience.",
        info: "Drive conversions with personalized emails.",
        link: "https://example.com/email-campaigns",
      },
    ],
    "content creation": [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Blog Writing",
        description:
          "Create engaging and informative blog posts for your audience.",
        info: "Establish authority with high-quality content.",
        link: "https://example.com/blog-writing",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Video Content",
        description:
          "Produce high-quality video content to engage your audience.",
        info: "Tell your story through video.",
        link: "https://example.com/video-content",
      },
    ],
  };
  return (
    <PageContainer>
      <div className=" mt-[6rem] mb-[1rem] lg:mt-[8rem] px-2 flex flex-col items-start lg:items-center">
        <h1 className="text-white text-3xl lg:text-5xl font-bold">
          Our Work <span className="speak ml-2">SPEAKS</span>
        </h1>
        <h2 className="text-white text-md lg:text-lg font-medium mt-4">
          We believe in delivering top-notch solutions with precision and
          innovation, ensuring quality and reliability in every project.
        </h2>
      </div>
      <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950  ">
        <WorkMenu
          object={object}
          activeSection={activeSection}
          onSectionClick={onSectionClick}
        />
        {/* <Templates /> */}
        <div ref={sliderRef}>
          <VerticalSlider data={object[activeSection]} />
        </div>
      </div>
    </PageContainer>
  );
};

export default index;
