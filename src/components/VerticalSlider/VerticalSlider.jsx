"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./verticalslider.css";
import Link from "next/link";
import CustomLink from "../utils/CustomLink";
import { usePathname, useRouter } from "next/navigation";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// const sliderData = [
//   {
//     imgSrc: "/images/FashionPage.png",
//     title: "Modern Fashion Design",
//     description:
//       "A fashion collection store site showcasing the products they sell in an interactive manner.",
//     info: "Explore the latest trends in modern fashion.",
//     link: "https://fashion-eight-eta.vercel.app/",
//   },
//   {
//     imgSrc: "/images/FashionProject.png",
//     title: "Fancy Store",
//     description:
//       "A fashion collection store site showcasing the products they sell in an interactive manner.",
//     info: "Discover exclusive designs and styles.",
//     link: "https://cosmetic-store-iota.vercel.app/",
//   },
//   {
//     imgSrc: "/images/MakeupSite.png",
//     title: "Modern Cosmetic Brand",
//     description:
//       "A fashion collection store site showcasing the products they sell in an interactive manner.",
//     info: "Revolutionize your beauty routine with our products.",
//     link: "https://cosmetic-store-iota.vercel.app/",
//   },
// ];

function VerticalSlider({ data }) {
  const slidesRef = useRef([]);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    slidesRef.current.forEach((item, index) => {
      if (index !== slidesRef.current.length - 1) {
        gsap.to(item, {
          scale: 0.9,
          opacity: 0,
          scrollTrigger: {
            trigger: item,
            start: "top 2%",
            end: "bottom 2%",
            scrub: true,
          },
        });
      }
    });
  }, [data]);

  return (
    <div>
      <div className="categoriesContainer">
        {data?.map((slide, index) => (
          <div
            key={index}
            className={`imageCard card${index + 1}`}
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <div className="image-wrapper">
              <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
            </div>
            <div className="absolute bottom-32 lg:bottom-10 left-3 lg:left-10 flex flex-col">
              <h1>{slide.title}</h1>
              <h2>{slide.description}</h2>
            </div>
            <Link href={slide.link} passHref>
              <span
                href="#" // Replace with actual URL
                className="visit-link"
              >
                Visit
              </span>
            </Link>
          </div>
        ))}
      </div>
      {pathName === "/" && (
        <CustomLink href={"/works"}>
          <div className="relative -bottom-36  z-10  ">
            <span className=" absolute left-1/2 -translate-x-1/2   text-2xl font-bold cursor-pointer text-black/90 hover:text-black/100 hover:scale-105 ease-in-out duration-100">
              See All
            </span>
          </div>
        </CustomLink>
      )}
    </div>
  );
}

export default VerticalSlider;
