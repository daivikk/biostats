
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

  const lines = buffer.toString('utf8').split('\r\n')

  let strata = []

  for(let i = 1; i < lines.length; i+=4){
    let arr = []
    for(let j = 0; j < 4; j++){
        arr.push(Number(lines[i + j].split(',')[3]))
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
    
    return NextResponse.json({ oddsRatio: parseFloat(oddsRatio.toFixed(4)), cmhStatistic: parseFloat(cmhStatistic.toFixed(4)), pValue: parseFloat(pVal.toFixed(4)), status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
}
