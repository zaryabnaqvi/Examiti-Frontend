import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Error404Page from "./Pages/Errors/404";
import Profile from "./Pages/Profile";
import CourseManage from "./Pages/CourseManage";
import CoursePage from "./Components/Course/CoursePage";
import TeacherManage from "./Pages/TeacherManage";
import AboutPage from "./Pages/About";

import PaperMaking from "./Pages/PaperMaking";
import QuestionManage from "./Pages/QuestionManage";
import { CreateQuestionForm } from "./Components/Question/CreateQuestion";



function App() {
  const items = [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounts/sign-in" element={<SignInPage />} />
        <Route path="/accounts/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/courses" element={<CourseManage />} />


        <Route path="/admin/courses/:id" element={<CoursePage />} />


        <Route path="/dashboard/teacher" element={<TeacherManage />} />
        <Route path="/paper" element={<PaperMaking/>}/>
        <Route path="/dashboard/questions" element={<QuestionManage/>}/>
        <Route path="/dashboard/question/create" element={<CreateQuestionForm/>}/>

        

        <Route path="/about" element={<AboutPage/>} />

     

        





        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
