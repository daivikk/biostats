"use client"
import CMHComponent from "./components/CMH";
import { useState, useEffect } from "react"
import Link from 'next/link'


export default function Home() {

  function save() {
    let cellValues = [];
    const cellIds = ['value11', 'value12', 'value21', 'value22'];
    cellIds.forEach(id => {
      const cellContent = document.getElementById(id).innerText;
      cellValues.push(cellContent);
    });
      console.log(cellValues);
  }

  const [data, setData] = useState([[]])

  return (
   <>
   <div class="flex justify-center items-center mt-2">
      <nav class="w-3/4 bg-gray-200 rounded-3xl p-4 border border-gray">
        <ul className="flex justify-between font-Inter font-medium ml-32 mr-32">
          <li><a href="#" className="transform hover:rotate-6">Data Pools</a></li>
          <li><a href="#" class="">Sandbox</a></li>
          <li><a href="#" class="">Workflows</a></li>
          <li><a href="#" class="">Figures</a></li>
        </ul>
      </nav>
    </div>

    <h1 className='text-4xl font-Inter font-semibold mt-40 flex justify-center'>
      Data Tailored Just For You.
    </h1>

<div className="flex justify-center flex-row space-x-4">

  {/* <button className="btn mt-6 font-Inter font-medium relative bg-gradient-to-br from-blue to-red hover:from-blue hover:to-red text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden transition duration-300 transform hover:rotate-6 border-none">Upload Data.</button> */}
  <Link href="/results" className="btn mt-6 font-Inter font-medium relative bg-gradient-to-br from-blue to-red hover:from-blue hover:to-red text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden transition duration-300 transform hover:rotate-6 border-none">
    Get Started.
  </Link>
</div>
   </>
  );
}
