import Link from "next/link";
import { FormEvent } from "react";
import Input from "./Input";

export default function ContactUsForm() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {
      first: form.first.value as string,
      title: form.term.value as string,
      mail: form.mail.value as string,
      phone: form.phone.value as string,
      company: form.company.value as string,
      website: form.website.value as string,
      subject: form.subject.value as string,
      comments: form.comments.value as string,
    };

    // Send the form data to our API and get a response.
    const response = await fetch("/api/contacts", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(result.data);
  };

  return (
    <div 
      className="
      py-8 lg:pl-14 xl:pr-[108px]
      bg-gray-100 dark:bg-gray-900 
      text-gray-900 dark:text-gray-100
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        <div className="font-bold pl-3">Contact form</div>

        <div className="grid grid-cols-1 md:col-span-3 lg:col-span-2 px-3 lg:pr-3 xl:px-0 pb-8">
          <h1 className="text-3xl">Send message</h1>

          <p className="text-sm font-normal mb-10 text-gray-600 dark:text-gray-400">
            All fields are required unless marked optional.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <Input name="first" label="Name" />
              <Input name="term" label="Title (optional)" />
              <Input name="mail" label="Email address" />
              <Input name="phone" label="Phone number (optional)" />
              <Input name="company" label="Company (optional)" />
              <Input name="website" label="Website URL (optional)" />
            </div>

            <div className="grid grid-cols-1 gap-8">
              <Input name="subject" label="Subject" />
              <div className="flex flex-col">
                <label htmlFor="comments" className="text-sm mb-2 text-gray-600 dark:text-gray-400">Questions / Comments</label>
                <textarea id="comments" name="comments" rows={5} className="py-3 px-4 bg-gray-200 dark:bg-gray-800 outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 border-b focus:border-0 border-gray-500"></textarea>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">All VO applicants must submit their info through the <Link href="/join-our-team" className="cursor-pointer hover:underline text-green-600 dark:text-yellow-400 outline-none focus:ring-2 ring-green-600 dark:ring-yellow-400">Join Our Team</Link> section, not below</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              <button
                type="submit"
                className="
                  mt-12 flex w-full cursor-pointer px-4 py-3
                  text-gray-100 dark:text-gray-900
                  bg-green-600 hover:bg-green-500 dark:bg-yellow-400 dark:hover:bg-yellow-500
                  outline-none focus:ring-[1px] ring-inset ring-gray-100 dark:ring-gray-900
                  border-[3px] border-green-600 hover:border-green-500 dark:border-yellow-400 hover:dark:border-yellow-500
                "
              >
                <span className="leading-[1.2rem]">Send message</span>
                <span className="grow"></span>
                <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32"><path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"></path><title>Email</title></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}