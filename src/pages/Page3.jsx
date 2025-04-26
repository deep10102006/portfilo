import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
function Page3() {
  const notify = () => toast(result);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", '1fe81875-c69a-4713-aae1-626ab9b7d98a'
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      // alert(result)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="bg-[#000000]">
      <div className="mt-6">
        <h1 className=' text-white text-4xl text-center font-bold'>How can I help you?</h1>
        <p className='mt-3 text-center text-white text-md'>Got a project or collaborationin mind? Reach out, and I’ll  <br /> get back to you soon!</p>
      </div>
      <div className="flex items-center justify-center  ">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-lg p-8 space-y-6 text-white rounded-lg "
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          <button
            onClick={notify}
            type="submit"
            className=" px-5 py-3 w-full gap-4 flex justify-center items-center bg-linear-to-r from-[#C0D6EF] to-[#778B9F]  text-black rounded-md cursor-pointer hover:shadow-md shadow-white/20"
          >
            Send Message
            <i class='de bx bx-send'></i>
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>

  );
}

export default Page3;

