import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="bg-primary rounded-3xl p-10 md:p-20 text-primary-content flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-lg opacity-90">
            Subscribe to our newsletter to get the latest news about upcoming
            social events and volunteer opportunities.
          </p>
        </div>
        <div className="w-full max-w-sm">
          <div className="join w-full">
            <input
              className="input input-bordered join-item w-full text-base-content rounded-l-xl"
              placeholder="Email Address"
            />
            <button className="btn btn-secondary join-item rounded-r-xl uppercase">
              Subscribe
            </button>
          </div>
          <label className="label mt-2">
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
