import Image from "next/image";
import React from "react";

type Props = {};

export default function HeroSection({}: Props) {
  const content = {
    description: "To live your life to the fullest, we're continuing to find ways.",
    cta_button: "Get Help",
    images: {
      a: "/a.jpg",
      b: "/b.jpg",
      c: "/c.jpg",
    },
  };
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 pt-8 md:grid-cols-2">
        {/* Main Content */}
        <div className="flex flex-col space-y-3 py-12">
          <h1 className="flex flex-col space-y-5 text-6xl font-bold">
            <span> Build your</span>
            <span>
              <span className="text-[#fb923c]">Anxiety</span>
              <span className=""> with </span>{" "}
            </span>
            <span>therapy</span>
          </h1>
          <p className="text-lg">{content?.description} </p>

          {/* Buttons */}
          <div className="flex flex-row space-x-8 pt-10">
            <button className="rounded-md bg-[#451a03] px-10 py-3 font-semibold text-white transition hover:bg-[#451a03] focus:outline-none">
              {content?.cta_button}
            </button>
            <button className="font-semibold transition hover:text-[#65a30d] focus:outline-none">
              Play Reviews
            </button>
          </div>
        </div>
        {/* Images */}
        <div className="relative">
          <div className="absolute left-16 top-1/3 z-10 -mt-2 h-48 w-96">
            <Image
              className=" object-contain "
              src={content?.images?.a}
              fill
              priority
              alt="Doctor a"
            />
          </div>
          <div className="absolute right-4 top-4 z-10 h-[204px] w-[204px]">
            <Image
              className="object-cover"
              src={content?.images?.b}
              fill
              priority
              alt="Doctor b"
            />
          </div>
          <div className="absolute right-4 bottom-4 z-10 h-[204px] w-[204px]">
            <Image
              className="object-cover"
              src={content?.images?.c}
              fill
              priority
              alt="Doctor c"
            />
          </div>
          {/* patterns */}
          
          <div className="absolute right-0 z-0 h-full w-1/2 bg-green-800"></div>
        </div>
      </div>
    </section>
  );
}
