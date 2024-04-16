"use client"

const CMHComponent = (props) => {

    return(
    <>
    <table className="border-collapse">
      <tbody className="">
        <tr>
          <th className="border border-gray p-2 text-md font-Inter font-light text-darkGray">Trial {props.index + 1}</th> {/* Empty cell for the additional column */}
          <th contentEditable={true} className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">{props.table["columnTitles"][0]}</th>
          <th contentEditable={true} className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">{props.table["columnTitles"][1]}</th>
          {/* <th contentEditable={true} className="border border-black p-2 text-md font-Inter font-semibold">Total</th>  */}
        </tr>
        <tr>
          <th contentEditable={true} className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">{props.table["rowTitles"][0]}</th>
          <td contentEditable={true} id="value11" className="border border-gray p-2 text-sm text-darkGray font-reg font-Inter">{props.table["counts"][0]}</td>
          <td contentEditable={true} id="value12" className="border border-gray p-2 text-sm text-darkGray font-reg font-Inter">{props.table["counts"][1]}</td>
          <td className="p-2 text-sm font-reg font-Inter text-darkGray">{props.table["counts"][0] + props.table["counts"][1]}</td> {/* Additional cell */}
        </tr>
        <tr>
          <th contentEditable={true} className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">{props.table["rowTitles"][1]}</th>
          <td contentEditable={true} id="value21" className="border border-gray p-2 text-sm text-darkGray font-reg">{props.table["counts"][2]}</td>
          <td contentEditable={true} id="value22" className="border border-gray p-2 text-sm text-darkGray font-reg">{props.table["counts"][3]}</td>
          <td className="p-2 text-sm font-reg text-darkGray">{props.table["counts"][2] + props.table["counts"][3]}</td> {/* Additional cell */}
        </tr>
        <tr>
          {/* <th contentEditable={true} className="p-2 text-md font-Inter font-semibold">Total</th> */}
          <th className=""></th> {/* Empty cell for the additional column */}
          <td className="p-2 text-sm font-reg text-darkGray">{props.table["counts"][0] + props.table["counts"][2]}</td> {/* Additional cell */}
          <td className="p-2 text-sm font-reg text-darkGray">{props.table["counts"][1] + props.table["counts"][3]}</td> {/* Additional cell */}
          <td className="p-2 text-sm font-reg text-darkGray">{props.table["counts"][0] + props.table["counts"][1] + props.table["counts"][2] + props.table["counts"][3]}</td> {/* Additional cell */}
        </tr>
      </tbody>
    </table>
    </>
    );
}

export default CMHComponent;