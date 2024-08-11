"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavbarComponent";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [form, setForm] = useState({
    url: "",
    markScheme: null,
    negative: null,
  });
  const [data, setData] = useState<any>();
  const [isLoading, setisLoading] = useState(false)

  const handelForm = (e: any) => {
    e.preventDefault();
    if(form.url==""||!form.markScheme||!form.negative){
      return  toast.error("Please fill all the fields")
    }
    setisLoading(true)
      
    axios
      .post("/api/pdf", form)
      .then(function (response) {
        console.log(response.data);
        setisLoading(false)
        setData(response.data.Result);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.message)
        setisLoading(false)
      });
  };

  return (
    <>
  

      <Navbar />
    
     

<div className="mt-20 bg-[url('https://www.bugslayer.in/_next/static/media/herobg.d10038b8.png')] bg-cover bg-center">





      <form className="max-w-sm mx-auto pt-20 px-5 border rounded-md pb-10  relative">
        <h2 className="text-white text-3xl absolute top-0">calculate your scrore </h2>
        <div className="mb-5">
          <label
            htmlFor="url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your answer key url
          </label>
          <input
            value={form.url}
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            name="url"
            type="text"
            id="url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your answerkey url"
            required
          />
        </div>

        <select
          name="markScheme"
          id="marks"
          className=" w-full bg-gray-200 p-1  my-5 py-4 rounded-md"
          required
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        >
          <option value={""}>Chosses Marks Scheme</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
       
        <select
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          name="negative"
          id="negative"
          className= "w-full bg-gray-200 p-1  my-5 py-4 rounded-md"
          required
        >
          <option value={""}>Chosses negative Marks Scheme</option>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>

        <button
          onClick={handelForm}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block mx-auto px-8"
        >
          Submit
        </button>
      </form>
  {isLoading&&    <div role="status " className=" flex justify-center mt-20">
  <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
  </svg>
  <span className="sr-only text-white">Loading...</span>
</div>}
    {data&&  <div className="flex border border-purple-400 justify-center  mt-10 text-xl text-white px-10 gap-32 flex-col md:flex-row">
    <section className="space-y-4">
      <p>Positive Marks :{data?.right*form?.markScheme!}</p>
      <p>Negative Marks :{data?.wrong*form?.negative!}</p>
      <hr />
      <p>Total Marks:{(data?.right*form.markScheme!)-data?.wrong*form.negative!}</p>
    </section>
    <section className="space-y-4">
      <p>Attempted :{data.total-data.unattempt}</p>
      <p>unAttempted :{data.unattempt}</p>
      <p>Correct Attempt :{data.right}</p>
      <p>Incorrect Attempt :{data.wrong}</p>
      <hr />
      <p>Accuracy :{(data.right/(data.total-data.unattempt)*100).toFixed(2)}</p>
      

    </section>


      </div>}

<div className=" p-5 border-purple-600 md:w-1/2 border-2 shadow-xl mx-auto mt-10 shadow-purple-400 text-white">
  <h2 className="text-2xl text-semibold">About Us</h2>
  <p>Are you eagerly awaiting your government exam results? Look no further! Our cutting-edge score calculator gives you an accurate estimate of your performance. Simply enter the official results URL, and we'll do the rest.
  </p>
  <span className="text-xl mt-10">Why use our calculator?</span>
  <ul className=" list-disc pl-10">
<li>Lightning-fast results</li>
<li>User-friendly interface</li>
<li>Accurate score estimates</li>
<li>Works for multiple government exams</li>
<li>Free to use</li>

  </ul>
  <span className="text-xl mt-10">Popular exams we cover:</span>
  <ul className=" list-disc pl-10">
<li>Civil Services</li>
<li>Banking</li>
<li>Railway Recruitment</li>
<li>Staff Selection Commission</li>
<li>Teaching Eligibility Test</li>

  </ul>
          
<p>Got questions? Check our FAQ section or contact our support team.<br/>
Remember, your score is just the beginning. We also offer resources to help you plan your next steps, whether it's further studies or career opportunities in government sectors.
Start your journey to success today – calculate your score now!</p>
</div>

      </div>
      <Footer/>
    </>
  );
}
