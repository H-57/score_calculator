"use client";

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

  const handelForm = (e: any) => {
    e.preventDefault();
    if(form.url==""||!form.markScheme||!form.negative){
    return  toast.error("Please fill all the fields")
    }
      
    axios
      .post("/api/pdf", form)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.Result);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.message)
      });
  };

  return (
    <>
      <Navbar />
      <form className="max-w-sm mx-auto pt-20 px-5 border rounded-md pb-10 ">
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
          className=" w-full bg-gray-200 p-1 rounded-sm my-5"
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
          className=" w-full bg-gray-200 p-1 rounded-sm my-5"
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

    {data&&  <div className="flex  mt-10 text-xl text-white px-10 gap-32 flex-col md:flex-row">
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
    </>
  );
}
