import { FormEvent } from "react";
import Input from "./Input";

export default function SubmitGigForm () {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {
      first: form.first.value as string,
      mail: form.mail.value as string,
      phone: form.phone.value as string,
      service: form.service.value as string,
      company: form.company.value as string,
      website: form.website.value as string,
      budget: form.budget.value as string,
      overview: form.overview.value as string,
    };

    // Send the form data to our API and get a response.
    const response = await fetch("/api/projects", {
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
        <div className="font-bold pl-3">Submit GIG form</div>

        <div className="grid grid-cols-1 md:col-span-3 lg:col-span-2 px-3 lg:pr-3 xl:px-0 pb-8">
          <h1 className="text-3xl">Send project</h1>

          <p className="text-sm font-normal mb-10 text-gray-600 dark:text-gray-400">
            All fields are required unless marked optional.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <Input name="first" label="Name" />
              <Input name="mail" label="Email address" />
              <Input name="phone" label="Phone number" />
              <div className="flex flex-col">
                <label 
                  htmlFor="service"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Requested VO Sales Group service</label>
                <select 
                  name="service" 
                  id="service"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select service...</option>
                  <option value="Professional Sales Prospecting">Professional Sales Prospecting</option>
                  <option value="Call List Services">Call List Services</option>
                  <option value="Inbound Follow Up">Inbound Follow Up</option>
                  <option value="Lead Management">Lead Management</option>
                  <option value="Outbound Demand Generation">Outbound Demand Generation</option>
                  <option value="Sales Recruiting">Sales Recruiting</option>
                  <option value="Sales Training">Sales Training</option>
                  <option value="Branding">Branding</option>
                  <option value="CRM Automation">CRM Automation</option>
                  <option value="Customer Service/Customer Sat calls to your customers">Customer Service/Customer Sat calls to your customers</option>
                  <option value="Digital Marketing (Buyer's Guides, SEM, etc)">{`Digital Marketing (Buyer's Guides, SEM, etc)`}</option>
                  <option value="Email Solutions">Email Solutions</option>
                  <option value="Event Driven Campaigns">Event Driven Campaigns</option>
                  <option value="Marketo">Marketo</option>
                  <option value="Messaging">Messaging</option>
                  <option value="On Demand Projects">On Demand Projects</option>
                  <option value="Pardot">Pardot</option>
                  <option value="Partner Acquisition calls">Partner Acquisition calls</option>
                  <option value="Sales Force Automation">Sales Force Automation</option>
                  <option value="Scripted calling to canvas a space">Scripted calling to canvas a space</option>
                  <option value="SEO">SEO</option>
                  <option value="Website Refresh">Website Refresh</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <Input name="company" label="Company" />
              <Input name="website" label="Company website" />
            </div>

            <div className="grid grid-cols-1 gap-8">
              <Input name="budget" label="Estimated budget (optional)" />
              <div className="flex flex-col">
                <label htmlFor="overview" className="text-sm mb-2 text-gray-600 dark:text-gray-400">GIG overview / Additional information</label>
                <textarea id="overview" name="overview" rows={5} className="py-3 px-4 bg-gray-200 dark:bg-gray-800 outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 border-b focus:border-0 border-gray-500"></textarea>
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
                <span className="leading-[1.2rem]">Submit</span>
                <span className="grow"></span>
                <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32"><path d="M28 13h-2v-2c0-2.8-2.2-5-5-5h-3V4h3c3.9 0 7 3.1 7 7V13zM22 20H25V22H22zM22 24H25V26H22z"></path><path d="M27 30h-5v-2h5V18h-7v9c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h2v3c0 .6.4 1 1 1s1-.4 1-1V16h11v12C29 29.1 28.1 30 27 30zM12 28h-1c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h1V28zM11 10v2h3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4C2.9 2 2 2.9 2 4v6c0 1.1.9 2 2 2h2.4l1.7 3 1.7-1-2.3-4H4V4h10v6H11z"></path><title>IBM Watson® Orders</title></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}