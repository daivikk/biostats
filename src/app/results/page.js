"use client"
import CMHComponent from "../components/CMH";
import { useState, useEffect } from "react"


export default function resultsPage() {
    
    const [data, setData] = useState([{columnTitles: ["Outcome 1", "Outcome 2"], rowTitles: ["Treatment 1", "Treatment 2"], counts: ["", "", "", ""]}])

    const [results, setResults] = useState([])

    const addTable = (e) => {
      setData([...data, {columnTitles: ["Outcome 1", "Outcome 2"], rowTitles: ["Treatment 1", "Treatment 2"], counts: ["", "", "", ""]}]);
    }

    const calculateCSV = async (e) => {

      const file = document.getElementById('csvFile').files[0];
      // const title = document.getElementById('photoTitle').value;
      // const date = document.getElementById('photoDate').value;
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);
      // formData.append('title', title);
      // formData.append('date', date);
      // formData.append('num', metadata.length);

      try {
        const response = await fetch('/api/uploadCSV', { 
          method: 'POST',
          body: formData,
        });

        const res = await response.json()
        if (response.ok) {
          console.log(res);
          setResults([res.oddsRatio, res.cmhStatistic, res.pValue])
          // window.location.reload()
        } else {
          console.error('Upload failed');
        }
      } catch (error) {
        console.error('Error uploading the file', error);
      }
      document.getElementById('calculate_modal').showModal();
    }

    const calculateManual = async (e) => {

      // var userQuery = document.getElementById("searchBar").value;

      try {
        const response = await fetch("/api/manualEntry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ manualData: data }),
        });

        const res = await response.json()
        if (response.ok) {
          console.log(res);
          setResults([res.oddsRatio, res.cmhStatistic, res.pValue])
          // window.location.reload()
        } else {
          console.error('Upload failed');
        }
      } catch (error) {
        console.error('Error uploading the file', error);
      }
      document.getElementById('calculate_modal').showModal();
    }

    const downloadCSV = (e) => {
      
    }

    return ( 
    <>
    <div className="flex justify-center items-center mt-2">
       <nav className="w-3/4 bg-gray-200 rounded-3xl p-4 border border-gray">
         <ul className="flex justify-between font-Inter font-medium ml-32 mr-32">
           <li><a href="#" className="transform hover:rotate-6">Data Pools</a></li>
           <li><a href="#" className="">Sandbox</a></li>
           <li><a href="#" className="">Workflows</a></li>
           <li><a href="#" className="">Figures</a></li>
         </ul>
       </nav>
     </div>
 
     <h1 className='text-4xl font-Inter font-semibold mt-40 flex justify-center'>
       Streamline Your Data Pipeline.
     </h1>
 
 <div className="flex justify-center flex-row space-x-4">
 
   <button className="btn mt-6 font-Inter font-medium relative bg-gradient-to-br from-blue to-red hover:from-blue hover:to-red text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden transition duration-300 transform hover:rotate-6 border-none" onClick={()=>document.getElementById('upload_modal').showModal()}>Upload Data.</button>
 
   <dialog id="upload_modal" className="modal ">
     <div className="modal-box bg-white flex justify-center flex-col font-Inter">
       <h3 className="font-bold text-lg justify-center flex">Upload CSV.</h3>
       <img className="object-cover" src="/images/examplecsv.png" alt="Sample Image"></img>
       <p className="py-4 text-sm">Note: Please ensure your CSV is formatted like the example above.</p>
       <input type="file" id="csvFile" className="file-input file-input-grey file-input-bordered w-full max-w-xs bg-white text-sm font-Inter text-darkGray" />
       
       <button onClick={calculateCSV} className="mt-6 font-Inter font-medium relative bg-gradient-to-br from-parrot to-green text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden w-30">
        <span className="absolute inset-0 bg-gradient-to-br from-parrot to-green"></span>
        <span className="relative z-10 font-Inter font-medium text-black ">Calculate.</span>
      </button>

     </div>

     

     <form method="dialog" className="modal-backdrop">
       <button>close</button>
     </form>
   </dialog>
 
   <button className="btn mt-6 font-Inter font-medium relative bg-gradient-to-br from-blue to-red hover:from-blue hover:to-red text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden transition duration-300 transform hover:rotate-6 border-none" onClick={()=>document.getElementById('manual_entry_modal').showModal()}>Custom Data.</button>
   
   <dialog id="manual_entry_modal" className="modal">
     <div className="modal-box bg-white flex-col space-y-4 max-w-[55rem] max-h-** overflow-y-scroll">
 
       <h3 className="font-semibold text-lg flex justify-center">Enter Data</h3>
 
        {data.map((table, index) => {
          return(
          <CMHComponent data={data} table={table} index={index} key={index} setData={setData} />
          )
        })}
 
        <div className="flex justify-center items">
           <button onClick={addTable} className="p-2 bg-blue rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-darkGray hover:scale-105">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
           </button>
       </div>
       {/* <div className="flex justify-center">
         <button onClick={save} className="mt-6 font-Inter font-medium relative bg-gradient-to-br from-parrot to-green text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden w-20">
             <span className="absolute inset-0 bg-gradient-to-br from-parrot to-green"></span>
             <span className="relative z-10 font-Inter font-medium text-black ">Save.</span>
         </button>
       </div> */}

{/* CALCULATE MODAL */}
       <div className="flex justify-center">
         <button onClick={calculateManual} className="mt-6 font-Inter font-medium relative bg-gradient-to-br from-parrot to-green text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden w-30">
             <span className="absolute inset-0 bg-gradient-to-br from-parrot to-green"></span>
             <span className="relative z-10 font-Inter font-medium text-black ">Calculate.</span>
         </button>
         <dialog id="calculate_modal" className="modal">
     <div className="modal-box bg-white flex flex-col font-Inter space-y-4">
       <h3 className="font-semibold text-lg flex justify-center">Results.</h3>
       <p className="font-light text-sm flex justify-center">CMH Statistic Calculation.</p>
      <div className="flex flex-row">
        <p className="py-4 text-md font-Inter ">Odds Ratio:</p>
        <p className="py-4 text-lg ml-auto font-Inter font-bold bg-gradient-to-r from-blue to-red text-transparent bg-clip-text inline-block rounded-lg px-4 shadow-md">{results[0]}</p>
      </div>
      <div className="flex flex-row">
        <p className="py-4 text-md font-Inter ">CMH Test Statistic:</p>
        <p className="py-4 text-lg ml-auto font-Inter font-bold bg-gradient-to-r from-blue to-red text-transparent bg-clip-text inline-block rounded-lg px-4 shadow-md">{results[1]}</p>
      </div>
      <div className="flex flex-row">
        <p className="py-4 text-md font-Inter">p-value:</p>
        <p className="py-4 text-lg ml-auto font-Inter font-bold bg-gradient-to-r from-blue to-red text-transparent bg-clip-text inline-block rounded-lg px-4 shadow-md">{results[2]}</p>
      </div>
      <div className="flex justify-center">
  
  <button onClick={downloadCSV} className="mt-6 font-Inter font-medium relative bg-gradient-to-br from-blue to-red text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden w-[14rem] flex items-center">
    <span className="absolute inset-0 bg-gradient-to-br from-blue to-red"></span>
    <span className="relative z-10 font-Inter font-medium text-black flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
        Download Results.
    </span>
  </button>
</div>
     </div>
     <form method="dialog" className="modal-backdrop">
       <button>close</button>
     </form>
   </dialog>
       </div>
 
     </div>
     <form method="dialog" className="modal-backdrop">
       <button>close</button>
     </form>
 
   </dialog>
 
 </div>
 
   {/* <div className="mt-20 flex justify-center items-center mb-10">
   <button className="rounded-full bg-gray text-black hover:bg-gray-300 hover:text-gray-600 p-2 mr-4">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" className="w-10 h-10 hover:scale-105">
           <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
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
   <button className="rounded-full bg-gray text-black hover:bg-gray-300 hover:text-gray-600 p-2 ml-4">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" className="w-10 h-10 hover:scale-105">
         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
         </svg>
   </button>
 </div> */}
    </>
    );
  }