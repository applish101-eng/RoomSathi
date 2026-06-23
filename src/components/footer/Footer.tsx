import React from "react";
import Link from "next/link";
import Logo from "../navbar/Logo";

const Footer = () => {
  return (
    <section className="section-wrapper">
      <div className=" flex flex-col lg:flex-row justify-between gap-10 lg:gap-1 items-start">
        <div className="flex flex-col lg:w-[30%] gap-1">
          <Logo />
          <p className="text-semiText">
            We are RoomSathi, a platform that helps solve the difficulty of
            finding safe, affordable, and suitable rooms, hostels, and shared
            accommodations for students and young professionals in Nepal.
          </p>
        </div>
        <div className="flex w-full justify-between lg:w-auto lg:gap-6">
          <div className="flex flex-col gap-2">
            {" "}
            <h4 className="footer-linkhead">About</h4>{" "}
            <div className="flex flex-col gap-1">
              <Link className="text-semiText" href="/">
                Mission
              </Link>
              <Link className="text-semiText" href="/">
                Visions
              </Link>
              <Link className="text-semiText" href="/">
                Goals
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <h4 className="footer-linkhead">Hosting</h4>{" "}
            <div className="flex flex-col gap-1">
              <Link className="text-semiText" href="/">
                List your property
              </Link>
              <Link className="text-semiText" href="/">
                Hosting Tips
              </Link>
              <Link className="text-semiText" href="/">
                Goals
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <h4 className="footer-linkhead">Support</h4>{" "}
            <div className="flex flex-col gap-1">
              <Link className="text-semiText" href="/">
                Help Center
              </Link>
              <Link className="text-semiText" href="/">
                Cancellation
              </Link>
              <Link className="text-semiText" href="/">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6  text-semiText/40 rounded-full"></hr>

      <div className="flex justify-between items-center">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
          <Link href="/" className="text-semiText  ">
            © 2026 RoomSathi. All rights reserved
          </Link>
          <span className="size-1 rounded-full bg-semiText/50 lg:inline-block hidden " />
          <Link href="/" className="text-semiText ">
            Privacy{" "}
          </Link>
          <span className="size-1 rounded-full bg-semiText/50 lg:inline-block hidden " />

          <Link href="/" className="text-semiText ">
            Terms & Conditions
          </Link>
        </div>

        <div className="flex lg:flex-row flex-col gap-3 items-center">
          <Link href="/">
            <img src="/icons/twitter.svg" alt="" />
          </Link>
          <Link href="/">
            <img src="/icons/facebook.svg" alt="" />
          </Link>
          <Link href="/">
            <img src="/icons/instagram.svg" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
