import { FormEvent } from "react";
import Input from "./Input";

export default function RequestInterviewForm () {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {
      firstName: form.firstName.value as string,
      lastName: form.lastName.value as string,
      phoneNumber: form.phoneNumber.value as string,
      emailAddress: form.emailAddress.value as string,
      address: form.address.value as string,
      city: form.city.value as string,
      state: form.state.value as string,
      postalCode: form.postalCode.value as string,
      totalSalesExperience: form.totalSalesExperience.value as string,
      totalMarketingExperience: form.totalMarketingExperience.value as string,
      outsideSalesExperience: form.outsideSalesExperience.value as string,
      positionApplyingFor: form.positionApplyingFor.value as string,
      lastPlaceWorked: form.lastPlaceWorked.value as string,
      hoursAvailablePerWeek: form.hoursAvailablePerWeek.value as string,
      currentJobTitle: form.currentJobTitle.value as string,
      currentEmployer: form.currentEmployer.value as string,
      skillSet: form.skillSet.value as string,
      currentSalary: form.currentSalary.value as string,
      expectedSalary: form.expectedSalary.value as string,
      highestEducation: form.highestEducation.value as string,
      resume: form.resume.value as string,
      additionalInfo: form.additionalInfo.value as string,
    };

    // Send the form data to our API and get a response.
    const response = await fetch("/api/interviews", {
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
        <div className="font-bold pl-3">Request interview form</div>

        <div className="grid grid-cols-1 md:col-span-3 lg:col-span-2 px-3 lg:pr-3 xl:px-0 pb-8">
          <h1 className="text-3xl">Personal information</h1>

          <p className="text-sm font-normal mb-10 text-gray-600 dark:text-gray-400">
            All fields are required unless marked optional.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <Input name="firstName" label="First name" />
              <Input name="lastName" label="Last name" />
              <Input name="phoneNumber" label="Phone number" />
              <Input name="emailAddress" label="Email address" />
              <Input name="address" label="Address" />
              <Input name="city" label="City" />
              
              <div className="flex">
                <div className="flex flex-col w-20 mr-4">
                  <label 
                    htmlFor="state"
                    className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                  >State</label>
              
                  <input 
                    type="text" 
                    id="state"
                    name="state"
                    className="
                      py-3 px-4 
                      bg-gray-200 dark:bg-gray-800 
                      outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                      border-b focus:border-0 border-gray-500
                    " 
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label 
                    htmlFor="postalCode"
                    className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                  >Postal code</label>
              
                  <input 
                    type="text" 
                    id="postalCode"
                    name="postalCode"
                    className="
                      py-3 px-4 
                      bg-gray-200 dark:bg-gray-800 
                      outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                      border-b focus:border-0 border-gray-500
                    " 
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label 
                  htmlFor="totalSalesExperience"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Total sales experience</label>
                <select 
                  name="totalSalesExperience" 
                  id="totalSalesExperience"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select range...</option>
                  <option value="Less than 5 years">Less than 5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10-15 years">10-15 years</option>
                  <option value="15-20 years">15-20 years</option>
                  <option value="20+ years">20 years+</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label 
                  htmlFor="totalMarketingExperience"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Total marketing experience</label>
                <select 
                  name="totalMarketingExperience" 
                  id="totalMarketingExperience"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select range...</option>
                  <option value="Less than 5 years">Less than 5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10-15 years">10-15 years</option>
                  <option value="15-20 years">15-20 years</option>
                  <option value="20+ years">20 years+</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label 
                  htmlFor="outsideSalesExperience"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Outside sales experience</label>
                <select 
                  name="outsideSalesExperience" 
                  id="outsideSalesExperience"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select option...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label 
                  htmlFor="positionApplyingFor"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Position applying for</label>
                <select 
                  name="positionApplyingFor" 
                  id="positionApplyingFor"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select option...</option>
                  <option value="Sales 360(Delivery team)">Sales 360 (Delivery team)</option>
                  <option value="Sales Agent">Sales agent</option>
                  <option value="Marketing 2.0">Marketing 2.0</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label 
                  htmlFor="lastPlaceWorked"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Last place worked (optional)</label>
            
                <input 
                  type="text" 
                  id="lastPlaceWorked"
                  name="lastPlaceWorked"
                  className="
                    py-3 px-4 
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  " 
                />
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Enter company website URL</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-8">
              <h2 className="text-3xl mt-4">Availability</h2>
              
              <div className="flex flex-col">
                <label 
                  htmlFor="hoursAvailablePerWeek"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Hours available per week</label>
                <select 
                  name="hoursAvailablePerWeek" 
                  id="hoursAvailablePerWeek"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select option...</option>
                  <option value="less than 20">Less than 20</option>
                  <option value="20-25">20 - 25</option>
                  <option value="25-30">25 - 30</option>
                  <option value="30-35">30 - 35</option>
                  <option value="35-40">35 - 40</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-8">
              <h2 className="text-3xl mt-4">Employment history</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col">
                <label 
                  htmlFor="currentJobTitle"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Current job title</label>
                <select 
                  name="currentJobTitle" 
                  id="currentJobTitle"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select job title...</option>
                  <option value="Telemarketing">Telemarketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Inside Sales">Inside sales</option>
                  <option value="Outside Sales">Outside sales</option>
                  <option value="Tele-Sales">Tele-sales</option>
                  <option value="Customer Service">Customer service</option>
                  <option value="Digital Marketing">Digital marketing</option>
                  <option value="Web Design">Web design</option>
                  <option value="SEO">SEO</option>
                  <option value="SEM">SEM</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label 
                  htmlFor="currentEmployer"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Current employer (optional)</label>

                <input 
                  type="text" 
                  id="currentEmployer"
                  name="currentEmployer"
                  className="
                    py-3 px-4 
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  " 
                />
              </div>

              <div className="flex flex-col">
                <label 
                  htmlFor="skillSet"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Skill set (optional)</label>

                <input 
                  type="text" 
                  id="skillSet"
                  name="skillSet"
                  className="
                    py-3 px-4 
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  " 
                />
              </div>

              <div className="flex flex-col">
                <label 
                  htmlFor="currentSalary"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Current salary (optional)</label>
                <select 
                  name="currentSalary" 
                  id="currentSalary"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select range...</option>
                  <option value="$40K - $50K">$40K-$50K</option>
                  <option value="$50K - $60K">$50K-$60K</option>
                  <option value="$60K - $70K">$60K-$70K</option>
                  <option value="$70K - $80K">$70K-$80K</option>
                  <option value="$80K - $90K">$80K-$90K</option>
                  <option value="$90K - $100K">$90K-$100K</option>
                  <option value="$100K+">$100K+</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label 
                  htmlFor="expectedSalary"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Expected salary</label>
                <select 
                  name="expectedSalary" 
                  id="expectedSalary"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select range...</option>
                  <option value="$40K - $50K">$40K-$50K</option>
                  <option value="$50K - $60K">$50K-$60K</option>
                  <option value="$60K - $70K">$60K-$70K</option>
                  <option value="$70K - $80K">$70K-$80K</option>
                  <option value="$80K - $90K">$80K-$90K</option>
                  <option value="$90K - $100K">$90K-$100K</option>
                  <option value="$100K+">$100K+</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label 
                  htmlFor="highestEducation"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Highest education</label>
                <select 
                  name="highestEducation" 
                  id="highestEducation"
                  className="
                    py-3 px-4 appearance-none w-full
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  "
                >
                  <option value="sel" disabled selected>Select education...</option>
                  <option value="High School">High school</option>
                  <option value="Tech School">Tech school</option>
                  <option value="Some College">Some college</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Masters">{"Master's"}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col">
                <label 
                  htmlFor="resume"
                  className="text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Your resume</label>

                <input 
                  type="file" 
                  id="resume"
                  name="resume"
                  className="
                    py-3 px-4 file:mr-4
                    bg-gray-200 dark:bg-gray-800 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                    border-b focus:border-0 border-gray-500
                  " 
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="additionalInfo" className="text-sm mb-2 text-gray-600 dark:text-gray-400">Additional info (optional)</label>
                <textarea id="additionalInfo" name="additionalInfo" rows={5} className="py-3 px-4 bg-gray-200 dark:bg-gray-800 outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 border-b focus:border-0 border-gray-500"></textarea>
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
                <span className="leading-[1.2rem]">Send request</span>
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