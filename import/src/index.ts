import express from 'express';
import { json } from "body-parser";
import {parse} from "csv-parse";
import fs from "fs";
import axios from "axios";
import FormData from 'form-data';

const app = express();
// app.use(json());
// open stream
const inputCsvStream = fs.createReadStream(__dirname+'/2021_12_ActualGenerationOutputPerGenerationUnit_16.1.A.csv')

// send stream (csv)
console.time('process POST')
const csvForm = new FormData();
csvForm.append('csv', inputCsvStream);
axios.post('http://localhost:3001/csv', csvForm, { headers: csvForm.getHeaders(), maxBodyLength: Infinity })
  .then(response =>{
    console.log(response.data)
    console.timeEnd('process POST')
  })
  .catch(err =>{
    console.error('Axios POST error')
  })

// parse dim
  const parser = parse({
    delimiter: '\t',
    trim: true,
    columns: true
  })
  const stream = inputCsvStream.pipe(parser)  // piping to parser delays axios POST as well?
  // const ResolutionCodeDims = new Set()
  // // const ResolutionCodeDims = new Set()
  
  console.time('process stream')
  stream.on('data', data =>{
    // ResolutionCodeDims.add(data.ResolutionCode)
  })
  
  stream.on('end', ()=>{
    console.timeEnd('process stream')
    // console.log(ResolutionCodeDims)
  })
  

app.listen(3000, () => {
  console.log("listening @ 3000")
})