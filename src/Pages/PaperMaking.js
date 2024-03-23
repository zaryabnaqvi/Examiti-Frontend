import React, { useRef, useState } from 'react'
import Paper from './Paper'
import jsPDF from 'jspdf';
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
import { Button } from '@material-tailwind/react';
import TextEditor from '../Components/TextEditor';




const options = {
    filename: "advanced-example.pdf",
    method: "save",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.EXTREME,
    page: {
      // margin is in MM, default is Margin.NONE = 0
    //   margin: Margin.SMALL,
      // default is 'A4'
      format: "A4",
      // default is 'portrait'
      orientation: "potrait"
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/jpeg",
      qualityRatio: 1
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true
      }
    }
  };


  
export default function PaperMaking() {

  
const getTargetElement = () => document.getElementById("container");

const downloadPdf = () => generatePDF(getTargetElement, options);
let [data,setData]=useState("zaryab")
  return (
    <div className='min-h-screen'>
      <div className=' flex flex-wrap justify-center'>
        <div className='md:w-1/2 w-full flex flex-col items-center'>
           
            {/* <button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button> */}
            {/* <Button onClick={downloadPdf}>Download PDF</Button> */}
            <TextEditor setData={setData}/>

        </div>
        <div className='md:w-1/2 w-full scrollable-container'  >
            <div className='w-full' id="container">
            <Paper  htmlContent={data} data={data}/>
            </div>
        </div>
      </div>
    </div>
  )
}
