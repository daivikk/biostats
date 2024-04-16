"use client"
import { useState, useEffect } from "react"


const CMHComponent = (props) => {
    const [table, setTable] = useState(props.table);

    const handleInputChange = (event, field, index) => {

      if(field == "counts"){
        if((!isNaN(parseFloat(event.target.value)) && isFinite(event.target.value)) || event.target.value === ""){
          setTable({...table, counts: table.counts.map((item, ind) => ind == index ? event.target.value : item)});
        }
      }
      else if (field == "columnTitles"){
        if(index == 0){
          setTable({...table, columnTitles: [event.target.value, table["columnTitles"][1]]});
        }
        else{
          setTable({...table, columnTitles: [table["columnTitles"][0], event.target.value]});
        }
      }
      else{
        if(index == 0){
          setTable({...table, rowTitles: [event.target.value, table["rowTitles"][1]]});
        }
        else{
          setTable({...table, rowTitles: [table["rowTitles"][0], event.target.value]});
        }
      }
    };

    return(
    <>
    <table className="border-collapse">
      <tbody className="">
        <tr>
          <th className="border border-gray p-2 text-md font-Inter font-light text-darkGray">Trial {props.index + 1}</th>
          <th className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">
            <input
                className="p-2 text-md text-darkGray font-Inter font-semibold bg-transparent z-10" 
                value={table["columnTitles"][0]}
                onChange={(e)=>{handleInputChange(e, "columnTitles", 0)}} // Add onChange event handler
            />
          </th>
          <th className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">
            <input
                  className="p-2 text-md text-darkGray font-Inter font-semibold bg-transparent z-10"
                  value={table["columnTitles"][1]}
                  onChange={(e)=>{handleInputChange(e, "columnTitles", 1)}} // Add onChange event handler
             />
          </th>
        </tr>
        <tr>
          <th className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">
            <input
                    className="p-2 text-md text-darkGray font-Inter font-semibold bg-transparent z-10"
                    value={table["rowTitles"][0]}
                    onChange={(e)=>{handleInputChange(e, "rowTitles", 0)}} // Add onChange event handler
              />
          </th>
          <td id="value11" className="border border-gray p-2 text-sm text-darkGray font-reg font-Inter">
            <input
                    type="number"
                    className="p-2 text-md text-darkGray font-Inter font-semibold bg-transparent z-10"
                    value={table["counts"][0]}
                    onChange={(e)=>{handleInputChange(e, "counts", 0)}}
              />
          </td>
          <td id="value12" className="border border-gray p-2 text-sm text-darkGray font-reg font-Inter">
            <input
                    type="number"
                    className="p-2 text-md text-darkGray font-Inter font-semibold bg-transparent z-10" 
                    value={table["counts"][1]}
                    onChange={(e)=>{handleInputChange(e, "counts", 1)}}
              />
          </td>
          <td className="p-2 text-sm font-reg font-Inter text-darkGray">{Number(table["counts"][0]) + Number(table["counts"][1])}</td>
        </tr>
        <tr>
          <th className="border border-gray p-2 text-md text-darkGray font-Inter font-semibold">
            <input
                    className="p-2 text-md text-darkGray font-Inter font-semibold bg-transparent z-10" 
                    value={table["rowTitles"][1]}
                    onChange={(e)=>{handleInputChange(e, "rowTitles", 1)}}
              />
          </th>
          <td id="value21" className="border border-gray p-2 text-sm text-darkGray font-reg">
            <input
                    type="number"
                    className="p-2 text-md text-darkGray font-Inter font-semibold bg-transparent z-10" 
                    value={table["counts"][2]}
                    onChange={(e)=>{handleInputChange(e, "counts", 2)}}
              />
          </td>
          <td id="value22" className="border border-gray p-2 text-sm text-darkGray font-reg">
            <input
                    type="number"
                    className="p-2 text-md text-darkGray font-Inter font-semibold bg-transparent z-10" 
                    value={table["counts"][3]}
                    onChange={(e)=>{handleInputChange(e, "counts", 3)}}
              />
          </td>
          <td className="p-2 text-sm font-reg text-darkGray">{Number(table["counts"][2]) + Number(table["counts"][3])}</td>
        </tr>
        <tr>
          <th className=""></th>
          <td className="p-2 text-sm font-reg text-darkGray">{Number(table["counts"][0]) + Number(table["counts"][2])}</td>
          <td className="p-2 text-sm font-reg text-darkGray">{Number(table["counts"][1]) + Number(table["counts"][3])}</td>
          <td className="p-2 text-sm font-reg text-darkGray">{Number(table["counts"][0]) + Number(table["counts"][1]) + Number(table["counts"][2]) + Number(table["counts"][3])}</td>
        </tr>
      </tbody>
    </table>
    </>
    );
}

export default CMHComponent;