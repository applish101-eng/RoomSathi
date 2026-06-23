import React from "react";

const Herohosting = () => {
  return (
    <section className="section-wrapper">
      <div className="bg-primary rounded-md  relative flex  justify-between">
        <img
          className="hidden lg:block"
          src="/brand/PersonThinking.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-start p-10 sm:p-32 gap-2.5">
          <h3 className=" text-white text-3xl font-medium">
            Want to list your property?
          </h3>
          <p className="text-white text-xl font-light ">
            Join thousands of hosts across Nepal. List your room or property for
            free.
          </p>
          <button className="btn-third px-4 py-3  ">Become a Host</button>
        </div>
      </div>
    </section>
  );
};

export default Herohosting;
