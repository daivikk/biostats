
import fs from 'fs';
import path from 'path';
import { NextResponse } from "next/server";
const jStat = require('jstat');

export async function POST(request) {
  const req = await request.formData()

  const file = req.get("file");
//   const date = req.get("date");
//   const num = req.get("num");
  
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  let lines = buffer.toString('utf8').replaceAll('\r', '').split('\n')

  let csvData = lines.map(value => value.split(','))

  let strata = []

  for(let i = 1; i < lines.length; i+=4){
    let arr = []
    for(let j = 0; j < 4; j++){
        arr.push(Number(lines[i + j].split(',')[3].replaceAll('"', '')))
    }
    strata.push(arr)
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

    for(let i = 0; i < csvData.length; i++){
        let arr = csvData[i]
        for(let j = 0; j < arr.length; j++){
            arr[j] = arr[j].replaceAll('"', '')
        }
        csvData[i] = arr
    }

    let indices = []

    if(csvData[0][csvData[0].length - 1] != "CMH Results"){

        csvData[0].push("CMH Results\r")
        csvData[2].push("Odds Ratio: " + parseFloat(oddsRatio.toFixed(4)) + "\r")
        csvData[3].push("CMH Statistic: " + parseFloat(cmhStatistic.toFixed(4)) + "\r")
        csvData[4].push("p-value: " + parseFloat(pVal.toFixed(4)) + "\r")
        indices = [0, 2, 3, 4]
    }
    else{
        csvData[2][4] = "Odds Ratio: " + parseFloat(oddsRatio.toFixed(4)) + "\r"
        csvData[3][4] = "CMH Statistic: " + parseFloat(cmhStatistic.toFixed(4)) + "\r"
        csvData[4][4] = "p-value: " + parseFloat(pVal.toFixed(4)) + "\r"
    }

    csvData.map((value, index) => indices.includes(index) ? {} : value += "\r")

    // csvData.map(array => array.map(string => string.replaceAll('"', '')))
    for(let i = 0; i < csvData.length; i++){
        let arr = csvData[i]
        for(let j = 0; j < arr.length; j++){
            arr[j] = arr[j].replaceAll('"', '')
        }
        csvData[i] = arr
    }
    
    return NextResponse.json({ oddsRatio: parseFloat(oddsRatio.toFixed(4)), cmhStatistic: parseFloat(cmhStatistic.toFixed(4)), pValue: parseFloat(pVal.toFixed(4)), csvData: csvData, status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
}
