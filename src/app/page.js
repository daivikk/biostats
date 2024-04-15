"use client"
import CMHComponent from "./components/CMH";

export default function Home() {
  return (
   <>
   <div class="flex justify-center items-center mt-2">
      <nav class="w-3/4 bg-gray-200 rounded-3xl p-4 border border-gray">
        <ul className="flex justify-between font-Inter font-medium ml-32 mr-32">
          <li><a href="#" className="transform hover:rotate-6">Data Pools</a></li>
          <li><a href="#" class="">Playground</a></li>
          <li><a href="#" class="">Workflows</a></li>
          <li><a href="#" class="">Figures</a></li>
        </ul>
      </nav>
    </div>

    <h1 className='text-4xl font-Inter font-semibold mt-40 flex justify-center'>
      Data Tailored Just For You.
    </h1>

<div className="flex justify-center flex-row space-x-4">
  <button className="mt-6 font-Inter font-medium relative bg-gradient-to-br from-blue to-red hover:from-blue hover:to-red text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden transition duration-300 transform hover:rotate-6">
    <span className="absolute inset-0 bg-gradient-to-br from-blue to-red"></span>
    <span className="relative z-10 font-Inter font-medium text-black">Upload Data.</span>
  </button>
<button className="btn mt-6 font-Inter font-medium relative bg-gradient-to-br from-blue to-red hover:from-blue hover:to-red text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden transition duration-300 transform hover:rotate-6 border-none" onClick={()=>document.getElementById('my_modal_2').showModal()}>Custom Data.</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box bg-white flex justify-center flex-col space-y-4">
    <h3 className="font-semibold text-lg">Enter Data</h3>
    <CMHComponent />
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</div>


  <div className="mt-20 flex justify-center items-center mb-10">
  <button className="rounded-full bg-gray text-black hover:bg-gray-300 hover:text-gray-600 p-2 mr-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" class="w-10 h-10 hover:scale-105">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
  </button>
  <div className="w-3/4 bg-white rounded-lg p-4 border border-gray">
    <div className="flex flex-col justify-between h-1/2 mb-2">
    <p><span className=" font-Inter text-xl font-semibold border-b border-gray">Data Visualizations</span></p>
      <div className="bg-transparent rounded-lg p-4 flex flex-row justify-center items-center">
        <img className="w-80 h-80 object-cover" src="/images/report-MS6314-1.png" alt="Sample Image"></img>
        <img className="w-80 h-80 object-cover" src="/images/report-MS6314-1.png" alt="Sample Image"></img>
        <img className="w-80 h-80 object-cover" src="/images/report-MS6314-1.png" alt="Sample Image"></img>
      </div>
      <div className="bg-gray rounded-lg shadow-md pt-4 pr-8 pl-8 pb-8 ml-4 mr-4 font-Inter">
        <h3 className='font-semibold text-xl mb-4'>Data Summaries</h3>
        <p className='text-left'>Summaries for your data. Summaries for your data. Summaries for your data. Summaries for your data. Summaries for your data. Summaries for your data. Summaries for your data. Summaries for your data.</p>
      </div>
    </div>
  </div>
  <button class="rounded-full bg-gray text-black hover:bg-gray-300 hover:text-gray-600 p-2 ml-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" class="w-10 h-10 hover:scale-105">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
  </button>
</div>
   </>
  );
}
