// import { Typography } from '@material-tailwind/react'
// import React from 'react'

// export default function Paper() {
//     return (
//         <div className='mx-8 my-10 w-full'>
//             <div className='px-4 flex flex-col justify-center'>
//                 <div className='w-full'>
//                     <Typography className='text-center font-semibold'>
//                        <b>NED UNIVERSITY OF ENGINEERING AND TECHNOLOGY </b> 
//                     </Typography>

//                 </div>
//                 <div className='w-full'>
//                     <Typography className='text-center'>
//                         THIRD YEAR SPRING SEMESTER (CIVIL /CONSTRUCTION /URBAN /PETROLEUM /MECHANICAL
//                         TEXTILE /INDUSTRIAL & MANUFACTURING /AUTOMOTIVE FOOD ENGINEERING)
//                     </Typography>

//                 </div>
//                 <div className='w-full'>
//                     <Typography className='text-center'>
//                         EXAMINATION 2025
//                     </Typography>

//                 </div>

//                 <div className='w-full'>
//                     <Typography className='text-center'>
//                         BATCH 2020-2021
//                     </Typography>

//                 </div>
//                 <div className='w-full flex justify-between'>
//                 <div>
//                   Time : 3 Hours  
//                 </div>
//                     <div>
//                         <div>
//                             <Typography className='text-center'>
//                                 Dated :03-03-2023
//                             </Typography>
//                         </div>
//                         <div>
//                             <Typography className='text-center'>
//                                 Max. Marks: 60
//                             </Typography>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-full'>
//                     <Typography className='text-center my-3 font-semibold'>
//                         <u>Course Name (HS-201)</u>
//                     </Typography>
//                 </div>
                
//             </div>
//             <main >
//             <div className='w-full mb-5'>
//                     <Typography>
                
//                <span className=' semibold'> Instructions </span>: Attempt five questions in all. Question No. 1 is compulsory. Select any Two questions from Section A, and Two from Section B
//                </Typography>
//                 </div>

//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q1(a)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>
//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q1(a)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>
//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q1(b)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>
//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q2(a)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>
//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q2(b)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>

//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q3(a)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>
//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q3(b)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>



//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q4(a)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>
//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q4(b)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>



//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q5(a)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>
//                 <div className='w-full mb-5'>
//                     <Typography>
                
//                   Q5(b)  government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]
//                </Typography>
//                 </div>
//             </main>
//         </div>
//     )
// }




import React, { useEffect, useState } from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet,Font,Image } from '@react-pdf/renderer';
import parse from 'html-react-parser';
// import { FontStore}  from '@react-pdf/font';
import html2canvas from 'html2canvas';


Font.register({
    family: 'Open Sans',
    fonts: [
      { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-1000.ttf', fontWeight: 1000 }
    ]
  })

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    fontFamily:"Times-Roman",
    padding: 20
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    fontFamily:'Times-Bold',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10
  },
  paragraph: {
    fontSize: 11,
    marginBottom: 10
  },
  bold: {
    fontFamily: 'Times-Bold'
  }
});

const PaperPDF = ({htmlContent}) => {

  

    function replaceStrongWithBold(element) {
        // If the element is a string, return it directly
        if (typeof element === 'string') {
          return <Text stlye={{fontSize:11}}>{element}</Text>;
        }
      
        // If the element is a <strong> tag, replace it with <Bold> component
        if (element.type === 'strong') {
          return <Bold>{React.Children.map(element.props.children, replaceStrongWithBold)}</Bold>;
        }

        if (element.type === 'ul') {
            return <View  style={{fontSize: 11}}>{React.Children.map(element.props.children, replaceStrongWithBold)}</View>;
          }

          if (element.type === 'p') {
            return <Text style={{fontSize: 11,marginBottom: 10}}>{React.Children.map(element.props.children, replaceStrongWithBold)}</Text>;
          }
      
        // If the element is an <li> tag, replace it with <ListItem> component
        if (element.type === 'li') {
          return <ListItem style={{fontSize: 11}}>{React.Children.map(element.props.children, replaceStrongWithBold)}</ListItem>;
        }
    }
      
    //   const Text = ({ children }) => <Text>{children}</Text>;
      const Bold = ({ children }) => <Text style={{fontFamily:"Times-Bold"}}>{children}</Text>;
      const ListItem = ({ children }) =>(<> <Text style={{fontSize: 11, marginHorizontal:8}}>{children}</Text> </> );
      
    
    function MyComponent({ htmlString }) {
        const parsedElements = parse(htmlString);
        console.log(parsedElements)

        // Replace <strong> with <Bold> in the parsed elements
        const replacedElements = React.Children.map(parsedElements, replaceStrongWithBold);
        
      
      return <View style={{fontSize:11}}> {replacedElements}</View>;
    }
    

    
    



    return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>NED UNIVERSITY OF ENGINEERING AND TECHNOLOGY</Text>
          <Text style={styles.subtitle}>THIRD YEAR SPRING SEMESTER (CIVIL /CONSTRUCTION /URBAN /PETROLEUM /MECHANICAL TEXTILE /INDUSTRIAL & MANUFACTURING /AUTOMOTIVE FOOD ENGINEERING)</Text>
          <Text style={styles.subtitle}>EXAMINATION 2025</Text>
          <Text style={styles.subtitle}>BATCH 2020-2021</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:"center",fontSize:14, marginBottom: 10 }}>
            <Text>Time: 3 Hours</Text>
            <View>
              <Text>Dated: 03-03-2023</Text>
              <Text>Max. Marks: 60</Text>
            </View>
          </View>
          <Text style={styles.title}><u>Course Name (HS-201)</u></Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Instructions:</Text> Attempt five questions in all. Question No. 1 is compulsory. Select any Two questions from Section A, and Two from Section B</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q1(a):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q1(b):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q2(a):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q2(b):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q3(a):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q3(b):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q4(a):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q4(b):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q5(a):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Q5(b):</Text> government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, "it has been running the way for years and nobody is going to notice it". What will you do next? Support your answer with ethical theories and PEC code of conduct. [6]</Text>
        {/* <Image src={image}/> */}
        <MyComponent htmlString={htmlContent}/>
        </View>
      </Page>
    </Document>
  )};



const PDFComponent = ({htmlContent}) => {

    const [pdfDataURI, setPdfDataURI] = useState(null);

    // useEffect(() => {
    //   convertHTMLToPDF();
    // }, []);
  
    // const convertHTMLToPDF = () => {
    //     const divw = document.createElement('div');
       
    //     divw.id="doc_image"
    //   html2canvas(document.body).then(canvas => {
    //     setPdfDataURI(canvas.toDataURL('image/png'));
    //   });
    // };
    // console.log(pdfDataURI)

return(
    <>
  <PDFViewer className='scrollable-container overflow-y-auto' style={{ width: '100%', height: '100vh', }}>
    <PaperPDF htmlContent={htmlContent}/>
  </PDFViewer>
  </>
)}
;

export default PDFComponent;






// // NED UNIVERSITY OF ENGINEERING & TECHNOLOGY
// // THIRD VEAR SPRING SEMESTER (CIVIL/CONSTRUCTION/URBAN/PETROLEUM/MECHANICAL
// // TEXTILE/INDUSTRIAL & MANUFACTURING/AUTOMOTIVE FOOD ENGINEERING) EXAMINATION 2015