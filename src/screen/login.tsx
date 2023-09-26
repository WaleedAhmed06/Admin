import { useState } from "react";
import { fbLogin } from "../config/firebasemethod";
import { useNavigate } from "react-router-dom";
import CPButton from "../component/CPbutton";
import CPInput from "../component/CPinput";


export default function Login() {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);
        navigate(`/`)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let back = () =>{
    navigate(`/signup`)
  }

  return (
    <>
      <div className="bg-gradient-to-r from-slate-400 via-slate-900 to-slate-400 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-slate-300 p-10 rounded-lg">
          <div className="py-5">
            <h1 className="border-2 border-x-slate-700 font-serif flex justify-center text-4xl text-black font-medium">Login</h1>
          </div>

          <div className="py-5">
            <CPInput
              value={model.email}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-5">
            <CPInput
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
              type="password"
            />
          </div>
          <div className="py-4 ">
            <CPButton onClick={LoginUser} label="Login" />
            <h1 className="cursor-pointer font-serif text-black px-6 py-6 w-8 hover:text-white" onClick={back}>SignUp</h1>
          </div>
        </div>
      </div>
    </>
  );
}
