import { NextResponse } from "next/server";
const jStat = require('jstat');

export async function POST(request) {
    const req = await request.json()
    
    const data = req.manualData

    let strata = []

    for(let i = 0; i < data.length; i++){
        strata.push(data[i].counts.map(val => Number(val)))
    }

  try {

    let cmhNumerator = 0;
    let cmhDenominator = 0;
    let orNumerator = 0;
    let orDenominator = 0;

    strata.forEach(stratum => {
        const [a, b, c, d] = stratum;
        const n = a + b + c + d;
        
        orNumerator += (a * d) / n;
        orDenominator += (b * c) / n;

        cmhNumerator += a - ((a + b) * (a + c) / n)
        cmhDenominator += ((a + b) * (c + d) * (a + c) * (b + d)) / ((n ** 2) * (n - 1))
    });

    if (cmhDenominator === 0 || orDenominator === 0) {
        throw new Error("Denominator in CMH test calculation is zero.");
    }

    const cmhStatistic = ((cmhNumerator) ** 2) / cmhDenominator // SHOULD WE DO 0.5 shift
    const oddsRatio = orNumerator / orDenominator
    const pVal = 1 - jStat.chisquare.cdf(cmhStatistic, 1);

    let csvData = [["Trial", "Treatment", "Outcome", "Count"]]

    for(var i = 0; i < data.length; i++){
        for(var j = 0; j < 4; j++){
            csvData.push(["Trial " + (i+1), data[0]["rowTitles"][Math.floor(j/2)], data[0]["columnTitles"][j % 2], Number(data[i]["counts"][j])])
        }
    }

    csvData[0].push("CMH Results\r")
    csvData[2].push("Odds Ratio: " + Number.parseFloat(oddsRatio).toExponential(8) + "\r")
    csvData[3].push("CMH Statistic: " + Number.parseFloat(cmhStatistic).toExponential(8) + "\r")
    csvData[4].push("p-value: " + Number.parseFloat(pVal).toExponential(8) + "\r")

    let indices = [0, 2, 3, 4]
    csvData.map((value, index) => indices.includes(index) ? {} : value += "\r")

    for(let i = 0; i < csvData.length; i++){
        let arr = csvData[i]
        for(let j = 0; j < arr.length; j++){
            if(typeof arr[j] == "string"){
                arr[j] = arr[j].replaceAll('"', '')
            }
        }
        csvData[i] = arr
    }
    
    return NextResponse.json({ oddsRatio: Number.parseFloat(oddsRatio).toExponential(8), cmhStatistic: Number.parseFloat(cmhStatistic).toExponential(8), pValue: Number.parseFloat(pVal).toExponential(8), csvData: csvData, status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
}
