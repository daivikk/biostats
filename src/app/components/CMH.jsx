"use client"

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
    </>
    );
}

export default CMHComponent;