import React from "react";

const Newsletter = () => {
  return (
    <section
      className="
        py-12 sm:py-16 lg:py-20
        w-full lg:w-[1250px]
        mx-auto
        px-4 sm:px-6
      "
    >
      <div
        className="
          bg-primary rounded-2xl sm:rounded-3xl
          p-6 sm:p-10 md:p-14 lg:p-20
          text-primary-content
          flex flex-col md:flex-row
          items-center justify-between
          gap-8 md:gap-10
        "
      >
        {/* Text */}
        <div className="max-w-md text-center md:text-left">
          <h2
            className="
              text-2xl sm:text-3xl lg:text-4xl
              font-bold mb-3 sm:mb-4
            "
          >
            Stay Updated!
          </h2>
          <p
            className="
              text-sm sm:text-base lg:text-lg
              opacity-90
            "
          >
            Subscribe to our newsletter to get the latest news about upcoming
            social events and volunteer opportunities.
          </p>
        </div>

        {/* Input */}
        <div className="w-full max-w-sm">
          <div className="join w-full flex flex-col sm:flex-row">
            <input
              className="
    input
    join-item w-full
    text-base-content
    rounded-xl sm:rounded-l-xl sm:rounded-r-none
    border-0
    focus:outline-none focus:ring-0
  "
              placeholder="Email Address"
            />

            <button
              className="
    btn btn-secondary
    join-item
    rounded-xl sm:rounded-r-xl sm:rounded-l-none
    uppercase
    w-full sm:w-auto
    mt-3 sm:mt-0
  "
            >
              Subscribe
            </button>
          </div>

          <label className="label mt-2 text-center sm:text-left">
            <span className="label-text-alt text-primary-content opacity-70">
              We never spam your inbox.
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
