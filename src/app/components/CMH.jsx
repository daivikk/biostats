"use client"
function save() {
    let cellValues = [];
    const cellIds = ['value11', 'value12', 'value21', 'value22'];
    cellIds.forEach(id => {
      const cellContent = document.getElementById(id).innerText;
      cellValues.push(cellContent);
    });
      console.log(cellValues);
  }  

const CMHComponent = () => {
    return(
        <>
    <table className="border-collapse">
      <tbody className="">
        <tr>
          <th className="border border-gray p-2 text-md font-Inter font-light text-darkGray">Trial Name</th> {/* Empty cell for the additional column */}
          <th contentEditable={true} className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">Column Title</th>
          <th contentEditable={true} className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">Column Title</th>
          {/* <th contentEditable={true} className="border border-black p-2 text-md font-Inter font-semibold">Total</th>  */}
        </tr>
        <tr>
          <th contentEditable={true} className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">Row Title</th>
          <td contentEditable={true} id="value11" className="border border-gray p-2 text-sm text-darkGray font-reg font-Inter">Element 1</td>
          <td contentEditable={true} id="value12" className="border border-gray p-2 text-sm text-darkGray font-reg font-Inter">Element 2</td>
          <td contentEditable={true} className="p-2 text-sm font-reg font-Inter text-darkGray">Element 3</td> {/* Additional cell */}
        </tr>
        <tr>
          <th contentEditable={true} className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">Row Title</th>
          <td contentEditable={true} id="value21" className="border border-gray p-2 text-sm text-darkGray font-reg">Element 4</td>
          <td contentEditable={true} id="value22" className="border border-gray p-2 text-sm text-darkGray font-reg">Element 5</td>
          <td contentEditable={true} className="p-2 text-sm font-reg text-darkGray">Element 6</td> {/* Additional cell */}
        </tr>
        <tr>
          {/* <th contentEditable={true} className="p-2 text-md font-Inter font-semibold">Total</th> */}
          <th className=""></th> {/* Empty cell for the additional column */}
          <td contentEditable={true} className="p-2 text-sm font-reg text-darkGray">Element 8</td> {/* Additional cell */}
          <td contentEditable={true} className="p-2 text-sm font-reg text-darkGray">Element 9</td> {/* Additional cell */}
          <td contentEditable={true} className="p-2 text-sm font-reg text-darkGray">Element 10</td> {/* Additional cell */}

        </tr>
      </tbody>
    </table>

    <div className="flex justify-center">
    <button onClick={save} className="mt-6 font-Inter font-medium relative bg-gradient-to-br from-parrot to-green text-darkGray font-bold py-2 px-4 rounded-[8px] overflow-hidden w-20">
        <span className="absolute inset-0 bg-gradient-to-br from-parrot to-green"></span>
        <span className="relative z-10 font-Inter font-medium text-black ">Save.</span>
    </button>
    </div>

        <div className="flex justify-center items">
            <button className="p-2 bg-blue rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-darkGray hover:scale-105">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
        </>
    );
}

export default CMHComponent;