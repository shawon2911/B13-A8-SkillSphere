"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import "./../app/globals.css";

export default function Banner() {
  return (
    <Swiper className="mx-40">
      <SwiperSlide>
        <div className="relative min-h-screen">
          <Image
            src={"/banner-img-1.jpg"}
            alt="banner image 1"
            fill
            className="absolute w-full h-full object-fill"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-white flex flex-col items-center justify-center min-h-screen">
            <div className="">
              <h1 className="text-6xl font-bold">
                Learn new skills <br /> everyday now
              </h1>
              <p className="mt-8 text-lg text-gray-300 max-w-3xl">
                Expand your knowledge and master in-demand skills with
                structured, easy-to-follow courses designed for real-world
                success. Learn at your own pace, practice with hands-on
                projects, and stay ahead in your career journey with content
                that actually matters.
              </p>
              <div className="flex gap-4 mt-12">
                <Link
                  href="/signup"
                  className="px-4 py-3  bg-[#080431] text-white rounded-xl hover:shadow-2xl"
                >
                  Register Now
                </Link>

                <Link
                  href="/courses"
                  className="px-4 py-3 border hover:bg-[#080431] hover:border-none rounded-xl hover:shadow-2xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative min-h-screen">
          <Image
            src={"/banner-img-2.webp"}
            alt="banner image 2"
            fill
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-white flex flex-col items-center justify-center min-h-screen">
            <div>
              <h1 className="text-6xl font-bold">
                Build, Experiment & Learn <br /> in a Real Setup
              </h1>
              <p className="mt-8 text-lg text-gray-300 max-w-3xl">
                Step into a hands-on learning environment designed for real
                practice and experimentation. Work with real tools, solve real
                problems, and strengthen your skills through an immersive
                lab-style experience that connects theory with practice.
              </p>
               <div className="flex gap-4 mt-12">
                <Link
                  href="/signup"
                  className="px-6 py-4 text-xl bg-[#080431] text-white rounded-xl hover:shadow-2xl"
                >
                  Register Now
                </Link>

                <Link
                  href="/courses"
                  className="px-6 py-4 text-xl border hover:bg-[#080431] hover:border-none rounded-xl hover:shadow-2xl"
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
