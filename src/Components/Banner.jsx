"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import "./../app/globals.css";

export default function Banner() {
  return (
    <Swiper className="">
      <SwiperSlide>
        <div className="relative w-full h-[450px] md:h-[500px] lg:h-[800px]">
          <Image
            src={"/banner-img-1.jpg"}
            alt="banner image 1"
            fill
            className="  object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-white flex flex-col items-center justify-center">
            <div className="mt-25  md:mt-60 p-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
                Learn new <span className="text-red-700">Skills</span> <br /> <span className="text-red-700">Everyday</span> now
              </h1>
              <p className="text-sm md:text-xl mb-6 max-w-3xl text-gray-400">
                Expand your knowledge and master in-demand skills with
                structured, easy-to-follow courses designed for real-world
                success. Learn at your own pace, practice with hands-on
                projects, and stay ahead in your career journey with content
                that actually matters.
              </p>
              <div className="flex gap-4 mt-12">
                <Link
                  href="/signup"
                  className="px-3 py-2 md:px-4 md:py-3  bg-red-700 hover:scale-[1.05]  hover:shadow-black/10 text-white rounded-xl hover:shadow-2xl"
                >
                  Register Now
                </Link>

                <Link
                  href="/courses"
                  className="px-3 py-2 md:px-4 md:py-3 border hover:scale-[1.05]    hover:shadow-black/10 rounded-xl hover:shadow-2xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-[450px] md:h-[500px] lg:h-[800px]">
          <Image
            src={"/banner-img-2.webp"}
            alt="banner image 2"
            fill
            className="  object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-white flex flex-col items-center justify-center">
            <div className="mt-20  md:mt-70 p-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
                Build, Experiment & <span className="text-red-700">Learn</span> <br /> in a <span className="text-red-700">Real</span> Setup
              </h1>
              <p className="text-sm md:text-xl mb-6 max-w-3xl text-gray-400">
                Step into a hands-on learning environment designed for real
                practice and experimentation. Work with real tools, solve real
                problems, and strengthen your skills through an immersive
                lab-style experience that connects theory with practice.
              </p>
              <div className="flex gap-4 mt-10">
                <Link
                  href="/signup"
                  className="px-3 py-2 md:px-4 md:py-3  bg-red-700 hover:scale-[1.05]  hover:shadow-black/10 text-white rounded-xl hover:shadow-2xl"
                >
                  Register Now
                </Link>

                <Link
                  href="/courses"
                  className="px-3 py-2 md:px-4 md:py-3 border hover:scale-[1.05]    hover:shadow-black/10 rounded-xl hover:shadow-2xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

//
