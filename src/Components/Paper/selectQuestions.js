import { Button, Checkbox, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import parser from "html-react-parser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import TopicSearchableDropdown from '../Paper/SearchableDropDown';

export default function SelectQuestions({handleOpen}) {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "<p>Government of <strong>Pakistan</strong> to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, 'it has been running the way for years and nobody is going to notice it'. What will you do next? Support your answer with ethical theories and PEC code of conduct.</p>",
      marks: 6,
      duration: "3 minutes",
      clo: "CLO 1",
      selected: false
    },
    {
      id: 2,
      text: "Government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, 'it has been running the way for years and nobody is going to notice it'. What will you do next? Support your answer with ethical theories and PEC code of conduct.",
      marks: 6,
      duration: "3 minutes",
      clo: "CLO 1",
      selected: false
    },
    ,
    {
      id: 3,
      text: "Government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, 'it has been running the way for years and nobody is going to notice it'. What will you do next? Support your answer with ethical theories and PEC code of conduct.",
      marks: 6,
      duration: "3 minutes",
      clo: "CLO 1",
      selected: false
    },
    {
      id: 4,
      text: "Government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, 'it has been running the way for years and nobody is going to notice it'. What will you do next? Support your answer with ethical theories and PEC code of conduct.",
      marks: 6,
      duration: "3 minutes",
      clo: "CLO 1",
      selected: false
    },
    {
      id: 5,
      text: "Government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, 'it has been running the way for years and nobody is going to notice it'. What will you do next? Support your answer with ethical theories and PEC code of conduct.",
      marks: 6,
      duration: "3 minutes",
      clo: "CLO 1",
      selected: false
    },
    {
      id: 6,
      text: "Government of Pakistan to all its employees. It is also involved in child labour. You discussed the matter with the owner, but the reply was, 'it has been running the way for years and nobody is going to notice it'. What will you do next? Support your answer with ethical theories and PEC code of conduct.",
      marks: 6,
      duration: "3 minutes",
      clo: "CLO 1",
      selected: false
    }
    // Add more questions in a similar format
  ]);

  const handleCheckboxChange = (id) => {
    const newQuestions = questions.map((question) =>
      question.id === id ? { ...question, selected: !question.selected } : question
    );
    setQuestions(newQuestions);
  };


  const [selectedTopic, setSelectedTopic] = useState({id:0,name:"",courseId:0})
  const [value1, setValue1] = useState("Select Topic");


    const [filteredTopics,setFilteredTopics]=useState( [
        {id:12,name:"Stack",courseId:1},
        {id:12,name:"Queue",courseId:1},
        {id:12,name:"Loops",courseId:2},
        {id:12,name:"Conditional Statements",courseId:2},
    ])


  const renderQuestions = () =>
    questions.map((question) => (
      <tr key={question.id} className="border-b border-gray-200">
        <td className="py-3 w-1/12 pr-4">
          <Checkbox
            type="checkbox"
            name={`question-${question.id}`}
            onChange={() => handleCheckboxChange(question.id)}
            checked={question.selected}
            color="indigo"
            size="sm"
          />
        </td>
        <td className="py-3 pr-4 w-4/6">{parser(question.text)}</td>
        <td className="py-3 pr-4 text-center w-1/12">{question.marks}</td>
        <td className="py-3 pr-4 text-center w-1/12">{question.duration}</td>
        <td className="py-3 pr-4 text-center w-1/12">{question.clo}</td>
      </tr>
    ));

  return (
    <section className="container mx-auto px-4 py-8">
        <Typography variant='h2' className='font-mar'>
            Select Question for the Paper
        </Typography>
        <div className='flex my-2'>
        <div className='flex items-center mr-2'><Typography variant='h4' className='mr-1'><FontAwesomeIcon  icon={faFilter}/></Typography><Typography variant='h5' className='font-mar' >Filter </Typography></div>
        <div>
        <TopicSearchableDropdown

options={filteredTopics}
label="name"
id="id"
selectedVal={value1}
setSelectedObject={setSelectedTopic}
handleChange={(val) => {
    setValue1(val)
}
}/>
        </div>
        </div>
      <table className="w-full bg-white rounded-lg">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="py-3 pr-4"></th>
            <th className="py-3 pr-4 text-left">Question</th>
            <th className="py-3 pr-4 text-center">Marks</th>
            <th className="py-3 pr-4 text-center">Duration</th>
            <th className="py-3 pr-4 text-center">CLO</th>
          </tr>
        </thead>
        <tbody>
          {renderQuestions()}
        </tbody>
      </table>
      <hr style={{color:"black"}} className='my-2'/>
      <div className='flex justify-end mt-3'>
        <Button size='lg' onClick={handleOpen} variant='gradient' color='blue' className=''>
            Done
        </Button>
        </div>
    </section>
  );
}
