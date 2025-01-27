import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const ContactForm = () => {
  return (
    <form
      className="flex flex-col font-sora text-tertiary-h w-[80vw] lg:w-[60vw]  xl:w-[40vw] gap-20 "
      action="https://api.staticforms.xyz/submit"
      method="post"
    >
      <input
        type="hidden"
        name="accessKey"
        value="c081665d-5081-4a3b-8aab-c698ece254c7"
      />
      <div className="flex flex-col sm:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4 w-full">
          <label>What's your name?</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="focus:outline-none bg-transparent text-base px-4 py-2 border-b-2 border-slate-300"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label>Where can I reach you?</label>
          <input
            type="text"
            name="email"
            placeholder="your@email.com"
            required
            className="focus:outline-none bg-transparent text-base px-4 py-2 border-b-2 border-slate-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <label>What's your message?</label>
        <textarea
          name="message"
          rows={2}
          maxLength={100}
          required
          placeholder="Tell me..."
          className="focus:outline-none bg-transparent text-base p-4 border-b-2 border-slate-300 resize-none"
        ></textarea>
      </div>
      {/* <input type="text" name="replyTo" value="myreplytoemail@example.com" />
      <input type="hidden" name="replyTo" value="@" /> */}
      {/* <input
        type="hidden"
        name="redirectTo"
        value="https://example.com/contact/success"
    /> */}
      <button className="group py-3 text-primary-h font-medium flex justify-center items-center gap-4" type="submit">
        Send it <HiOutlineArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-3 stroke-[2.5] duration-300" />
      </button>
    </form>
  );
};

export default ContactForm;
