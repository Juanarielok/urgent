"use client";

import React, { useState } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import db from "../../../config/firebaseConfig";
import PageHeader from "@/components/page-header";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [message, setMessage] = useState("");
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [customBusinessType, setCustomBusinessType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      companySize,
      message,
      receiveUpdates,
      hoursPerDay,
      businessType:
        businessType === "Other" ? customBusinessType : businessType,
      timestamp: new Date(),
    };

    try {
      const contactsDocRef = doc(db, "waitlist", "contact");
      await updateDoc(contactsDocRef, {
        members: arrayUnion(contactData),
      });

      alert("Your message has been sent!");

      setName("");
      setEmail("");
      setCompanySize("");
      setMessage("");
      setReceiveUpdates(false);
      setHoursPerDay("");
      setBusinessType("");
      setCustomBusinessType("");
    } catch (error: any) {
      console.error("Error sending message: ", error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12 md:mb-20"
            title="Get in touch"
            description="Complete the form below to schedule a call, or continue reading to contact us for support, partnerships, or media inquiries."
          >
            Contact us
          </PageHeader>

          {/* Contact form */}
          <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-16 pb-3">
            <div className="w-full max-w-xs mx-auto shrink-0">
              <form className="relative" onSubmit={handleSubmit}>
                {/* Border with dots in corners */}
                <div
                  className="absolute -inset-3 bg-indigo-500/15 dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]"
                  aria-hidden="true"
                />
                <div className="space-y-5">
                  <div className="space-y-3">
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="M14.9 0c-.3 0-8.4.8-11.6 4-2.8 2.8-2.2 6.5-1.2 8.5L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.9.4 2.2.8 3.6.8 1.6 0 3.3-.5 4.9-2 3.4-3.4 4-11.3 4-11.6 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3Zm-4.3 11.3c-1.9 1.9-4.2 1.5-5.5 1.1L9.4 8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L3.6 11c-.4-1.4-.8-3.7 1.1-5.6 1.9-1.9 6.5-2.9 9.2-3.3-.3 2.3-1.1 7-3.3 9.2Z" />
                          </svg>
                        </div>
                        <input
                          id="name"
                          className="form-input text-sm w-full pl-10 pr-4"
                          type="text"
                          placeholder="Your name..."
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={14}
                          >
                            <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                          </svg>
                        </div>
                        <input
                          id="email"
                          className="form-input text-sm w-full pl-10 pr-4"
                          type="email"
                          placeholder="Your email..."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="company">
                        Company size
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="m5.2.02 10 2A1 1 0 0 1 16 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3V1A1 1 0 0 1 5.2.02ZM2 12v2h4v-2H2Zm0-4v2h4V8H2Zm6 6h6V3.82l-8-1.6V6h1a1 1 0 0 1 1 1v7Zm2-8h2v6h-2V6Z" />
                          </svg>
                        </div>
                        <select
                          id="company"
                          className="form-select text-sm w-full pl-10"
                          value={companySize}
                          onChange={(e) => setCompanySize(e.target.value)}
                          required
                        >
                          <option value="" disabled hidden>
                            Company size
                          </option>
                          <option value="1 to 5 members">1 to 5 members</option>
                          <option value="5 to 20 members">
                            5 to 20 members
                          </option>
                          <option value="More than 20 members">
                            More than 20 members
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="businessType">
                        Type of business
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="M14.9 0c-.3 0-8.4.8-11.6 4-2.8 2.8-2.2 6.5-1.2 8.5L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.9.4 2.2.8 3.6.8 1.6 0 3.3-.5 4.9-2 3.4-3.4 4-11.3 4-11.6 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3Zm-4.3 11.3c-1.9 1.9-4.2 1.5-5.5 1.1L9.4 8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L3.6 11c-.4-1.4-.8-3.7 1.1-5.6 1.9-1.9 6.5-2.9 9.2-3.3-.3 2.3-1.1 7-3.3 9.2Z" />
                          </svg>
                        </div>
                        <select
                          id="businessType"
                          className="form-select text-sm w-full pl-10"
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          required
                        >
                          <option value="" disabled hidden>
                            Type of business
                          </option>
                          <option value="Retail">Retail</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Finance">Finance</option>
                          <option value="Education">Education</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      {businessType === "Other" && (
                        <div className="relative mt-3">
                          <input
                            id="customBusinessType"
                            className="form-input text-sm w-full pl-4 pr-4"
                            type="text"
                            placeholder="Please specify"
                            value={customBusinessType}
                            onChange={(e) =>
                              setCustomBusinessType(e.target.value)
                            }
                            required
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="hoursPerDay">
                        Hours per day on the phone?
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="M14.9 0c-.3 0-8.4.8-11.6 4-2.8 2.8-2.2 6.5-1.2 8.5L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.9.4 2.2.8 3.6.8 1.6 0 3.3-.5 4.9-2 3.4-3.4 4-11.3 4-11.6 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3Zm-4.3 11.3c-1.9 1.9-4.2 1.5-5.5 1.1L9.4 8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L3.6 11c-.4-1.4-.8-3.7 1.1-5.6 1.9-1.9 6.5-2.9 9.2-3.3-.3 2.3-1.1 7-3.3 9.2Z" />
                          </svg>
                        </div>
                        <select
                          id="hoursPerDay"
                          className="form-select text-sm w-full pl-10"
                          value={hoursPerDay}
                          onChange={(e) => setHoursPerDay(e.target.value)}
                          required
                        >
                          <option value="" disabled hidden>
                            Hours per day on the phone?
                          </option>
                          <option value="0-1">0-1</option>
                          <option value="1-2">1-2</option>
                          <option value="2-3">2-3</option>
                          <option value="3-4">3-4</option>
                          <option value="4-5">4-5</option>
                          <option value="5+">5+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="form-textarea text-sm w-full resize-none"
                        placeholder="Your message..."
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          checked={receiveUpdates}
                          onChange={(e) => setReceiveUpdates(e.target.checked)}
                        />
                        <span className="text-sm text-gray-500 ml-2">
                          I'd like to receive updates &amp; product news.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <button className="btn text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Cards */}
          <div className="max-w-xs md:max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3">
              {/* Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Email
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    Email us your queries and we'll get back to you ASAP.
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <svg
                    className="shrink-0 fill-indigo-500/80"
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0a8 8 0 1 0 3.2 15.335l.916-.4-.8-1.833-.916.4A6 6 0 1 1 14 8v1a1 1 0 1 1-2 0V8a4.033 4.033 0 1 0-1.286 2.92A2.987 2.987 0 0 0 16 9V8a8.009 8.009 0 0 0-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </svg>
                  <div className="text-sm text-gray-800 dark:text-gray-200">
                    hello@firstwaveai.com
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Phone
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    Would you like to have a chat? Feel free to give us a call.
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <svg
                    className="shrink-0 fill-indigo-500/80"
                    width={12}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 13V3h8v10H2Z" />
                  </svg>
                  <div className="text-sm text-gray-800 dark:text-gray-200">
                    +1 (305) 555 - 5555
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Address
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    Prefer to visit? We're located in Miami, Florida, USA.
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <svg
                    className="shrink-0 fill-indigo-500/80"
                    width={14}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.591 15.069c.404.358.684.606.709.631.4.4 1 .4 1.4.1.05-.05 1.075-.975 2.1-1.9 1.025-.925 2.05-1.85 2.1-1.9 1.4-1.3 2.1-3.1 2.1-5 0-3.9-3.1-7-7-7S0 3.1 0 7c0 1.9.7 3.7 2.1 4.9 0 .075 2.293 2.107 3.491 3.169ZM7 13.7l-3.4-3C2.6 9.7 2 8.4 2 7c0-2.8 2.2-4.9 5-4.9s5 2.2 5 5c0 1.4-.6 2.6-1.6 3.6l-3.4 3ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                  <div className="text-sm text-gray-800 dark:text-gray-200">
                    Miami, FL 33130
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
