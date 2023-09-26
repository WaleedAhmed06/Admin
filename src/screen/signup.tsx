import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbSignUp } from "../config/firebasemethod";
import CPInput from "../component/CPinput";
import CPButton from "../component/CPbutton";

export default function Signup() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let back = () =>{
    navigate(`/login`)
  }
  return (
    <>
      <div className="bg-gradient-to-r from-slate-400 via-slate-900 to-slate-400 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-slate-300 p-10 rounded-lg">
          <div className="py-5">
            <h1 className="border-2 border-x-slate-700 font-serif flex justify-center text-3xl font-medium">Sign Up</h1>
          </div>
          <div className="py-4">
            <CPInput
              value={model.userName}
              onChange={(e: any) => fillModel("userName", e.target.value)}
              label="User Name"
            />
          </div>
          <div className="py-4">
            <CPInput
              value={model.email}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-4">
            <CPInput
              type="password"
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-4">
            <CPButton onClick={signUpUser} label="Sign Up" />
            <h1 className="cursor-pointer text-2xl font-serif text-black px-7 py-5 hover:text-white w-8" onClick={back}>Login</h1>
          </div>
        </div>
      </div>
    </>
  );
}
