import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Task from "../screen/task";
import Login from "../screen/login";
import Signup from "../screen/signup";
import Protected from "../screen/protected";
import Admin from "../screen/admin";
import QuizApp from "../screen/quiz";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<Protected Screen={Admin}/>} />
          <Route path="quiz" element={<QuizApp />} />
        </Routes>
      </Router>
    </>
  );
}
