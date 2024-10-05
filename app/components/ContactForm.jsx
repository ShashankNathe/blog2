"use client";
import { Phone, X } from "lucide-react";
import React, { useState } from "react";
import { sendContactEmail } from "../actions/mail";

const ContactForm = () => {
  const [alert, setAlert] = useState(null);
  const [visible, setVisible] = useState(false);
  const [pending, setPending] = useState(false);

  const sendEmail = async (formData) => {
    const response = await sendContactEmail(formData);
    if (response && response.success) {
      setAlert({
        success: true,
        message: "Thank you for reaching out! I will get back to you soon.",
      });
      setVisible(true);
    } else {
      setAlert({ success: false, message: "Something went wrong." });
      setVisible(true);
    }
    setPending(false);
  };
  return (
    <section className="mb-10 mt-10">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Lets get in touch
      </h1>
      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setVisible(false);
            setPending(true);
            const formData = new FormData(e.target);
            sendEmail(formData);
          }}
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10">
              <div className="gap-y-3">
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 "
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="janesmith"
                        autoComplete="name"
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 focus:border-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 "
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hello@email.com"
                        autoComplete="email"
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 focus:border-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 "
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 focus:border-gray-400"
                        defaultValue={""}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    alert?.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  } rounded-md transition-all duration-500 ease-in-out ${
                    visible
                      ? "opacity-100 max-h-screen p-4"
                      : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  <div className="flex justify-between">
                    <p>{alert?.message}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVisible(false);
                      }}
                      className="text-lg font-bold"
                      tabIndex={-1}
                    >
                      <X />
                    </button>
                  </div>
                </div>

                <div className=" mt-3 ">
                  <div className="flex rounded-md shadow-sm sm:max-w-md justify-end">
                    <Badge>
                      <button className="p-2" type="submit" disabled={pending}>
                        {pending ? "Sending..." : "Send Message"}
                      </button>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className=" flex flex-col items-center justify-between sm:ml-4 h-full">
          <div>
            <div className="prose prose-neutral dark:prose-invert">
              <p>
                Feel free to reach out if you'd like to discuss any ideas or
                explore potential collaborations.
              </p>
              <p> I'm always open to connecting!</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-end w-full pb-1 mt-10 sm:mt-0">
            <div className="flex items-center gap-3">
              <Phone />
              <p className="text-neutral-600 dark:text-neutral-400 text-base">
                +91 8483851903
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

function Badge(props) {
  return (
    <p
      {...props}
      className="hover:animate-border inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}
