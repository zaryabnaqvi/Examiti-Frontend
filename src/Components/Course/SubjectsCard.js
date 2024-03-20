import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faPencilSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, CardBody, CardFooter, Input, Textarea, Typography } from '@material-tailwind/react';

function AccordionExpandIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Function to measure content height
  const measureContentHeight = () => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  };

  // Update content height on initial render
  React.useEffect(() => {
    measureContentHeight();
  }, []);

  // Update content height when isOpen changes
  React.useEffect(() => {
    measureContentHeight();
  }, [isOpen]);

  return (
    <>    
    
    { (!isEditOpen) ?
    (<div>
      <div className="border border-white overflow-hidden rounded-3xl shadow-lg bg-white py-3 mb-5">
        <div
          className="flex justify-between items-center cursor-pointer px-10 py-2 border-b border-white"
          onClick={toggleAccordion}
        >
          <Typography className="text-2xl font-bold ">Topic Name </Typography>
          <div>  
            <FontAwesomeIcon onClick={()=>setIsEditOpen(!isEditOpen)} className="text-gray-600 text-2xl z-50" icon={faPencilSquare}/>
            <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} className="text-gray-600 ml-3 text-2xl"  />
          </div>

        </div>
        <div
          className="transition-height duration-300"
          style={{ height: isOpen ? contentHeight + 'px' : '0' }}
        >
          <div className="p-4 border-t border-white" ref={contentRef}>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </p>
          </div>
        </div>
      </div>
    </div>):(
    <>

<Card className=" w-full  mb-5">
                            <CardBody className="flex flex-col gap-4 justify-center">


                                <Typography
                                    variant="h4"
                                    className="self-center sm:self-start font-mar font-bold text-3xl tracking-tighter text-[#323226d7] "
                                >
                                    Edit Topic Details
                                </Typography>
                                <Typography className="-mb-2" variant="h6">
                                    Topic Name
                                </Typography>
                                <Input label="Course Name" size="lg" />
                                <Typography className="-mb-2" variant="h6">
                                    Topic Description
                                </Typography>
                                <Textarea label="Descripiton" size="lg" />
                              
                            </CardBody>
                            <CardFooter className="pt-0 flex justify-between">
                                <div>
                                    <Button variant="gradient" color='blue' onClick={()=>setIsEditOpen(!isEditOpen)} >
                                        Delete <FontAwesomeIcon className='ml-2' icon={faTrash} />
                                    </Button>
                                </div>
                                <div >
                                    <Button variant="gradient" color='blue' onClick={()=>setIsEditOpen(!isEditOpen)} >
                                        Save Changes
                                    </Button>

                                    <Button variant="gradient" className='ml-2' onClick={()=>setIsEditOpen(!isEditOpen)} >
                                        Cancel
                                    </Button>
                                </div>


                            </CardFooter>
                        </Card>
      




    </>)}

      </>

  );
}

export default AccordionExpandIcon;
