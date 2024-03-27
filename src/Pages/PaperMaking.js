import React, { useRef, useState } from 'react'
import Paper from './Paper'
import jsPDF from 'jspdf';
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
import { Button, Typography } from '@material-tailwind/react';
import TextEditor from '../Components/TextEditor';
import { ModalSelectQuestion } from '../Components/Paper/ModalSelectQuestion';
import DraggableList from '../Components/Paper/Draggable';




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

  const items = [
    { id: '1', content: 'Question 1' },
    { id: '2', content: 'Question 2' },
    { id: '3', content: 'Question 3' },
  ]
  
const getTargetElement = () => document.getElementById("container");

const downloadPdf = () => generatePDF(getTargetElement, options);
let [data,setData]=useState("zaryab")
  return (
    <div className='max-h-screen'>
      <div className=' flex flex-wrap justify-center'>
        <div className='md:w-1/2 w-full flex flex-col items-center max-h-screen scrollable-container overflow-y-auto'>
           
            {/* <button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button> */}
            {/* <Button onClick={downloadPdf}>Download PDF</Button> */}
            <div className='my-2 w-11/12 mt-7'><Typography variant='h2' className='font-mar opacity-75'>Paper Editor</Typography></div>
           <div className='w-11/12 my-2'>
            <ModalSelectQuestion />
            </div>
            <div className='w-11/12 my-2'> 
              <Typography variant='h4' className='font-mar opacity-70 mb-2'>
                Selected Question
                </Typography>           
              <DraggableList items={items} />
            </div>
            <div className='w-11/12 my-2'>
              <Button variant='gradient' color='blue'  fullWidth>
                Add Custom Question
              </Button>
            </div>

            <TextEditor setData={setData}/>
        </div>
        <div className='md:w-1/2 w-full scrollable-container overflow-y-auto'  >
            <div className='w-full' id="container">
            <Paper  htmlContent={data} data={data}/>
            </div>
        </div>
      </div>
    </div>
  )
}
