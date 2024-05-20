"use client"

import axios from "axios";
import { useState } from "react";



export default function Home() {
  const [Url, setUrl] = useState("")
  return (
   
<>
<form className="max-w-sm mx-auto" >
  <div className="mb-5">
    <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input value={Url} onChange={(e) => setUrl(e.target.value)} type="text" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your answerkey url" required />
  </div>


  <button onClick={(e) =>{ e.preventDefault();axios.post('/api/pdf',{url:Url}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

</>
  );
}
