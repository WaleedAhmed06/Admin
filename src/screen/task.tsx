import { useEffect, useState } from "react";
import { fbAdd, fbGet } from "../config/firebasemethod";
import CPInput from "../component/CPinput";
import CPButton from "../component/CPbutton";
import { useNavigate } from "react-router-dom";

export default function Task() {
  const [model, setModel] = useState<any>({});
  const [Task , setTask] = useState<any>([])
  const navigate  = useNavigate()

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const addTask = () => {
    fbAdd("tasks",model)
    .then((res)=>{
      console.log(res);
      setModel({});
      getTask();
    })
    .catch((err) => {
      console.log(err)
    });
  };
  const getTask = () => {
    fbGet("tasks")
    .then((res : any) => {
      console.log(res);
      setTask([...res])
    })
    .catch((err) =>{
     console.log(err)
    });
  };
useEffect(() => {
  getTask();
},[])
let move = () => {
  navigate(`/admin`)
}
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-900 via-slate-400 to-slate-900 flex justify-center" >
        <h1 className="text-2xl p-5 bg">TASK</h1>
        </div>
        <div className="grid grid-cols-4">
        <div >
          <div className="w-[300px] mx-[10px] my-[20px] ">
      <div className="py-3">
            <CPInput
              value={model.task}
              onChange={(e: any) => fillModel("task", e.target.value)}
              label="Task"
            />
          </div>
          <div className="py-3">
            <CPInput
              value={model.asign}
              onChange={(e: any) => fillModel("asign", e.target.value)}
              label="Asign"
            />
          </div>
          <div className="py-3">
            <CPButton onClick={addTask} label="Submit" />
          </div>    
          <div className="py-3">
            <CPButton onClick={move} label="Move to Admin" />
          </div>    
        </div>
        </div>
        <div className="p-10 col-span-3" >
          {Task && Task.length > 0 ? Task.map((x : any, i : any) =>
          <div className="border-2 border-black font-serif rounded bg-gradient-to-r from-slate-400 via-slate-700 to-slate-900 drop-shadow-xl my-2 p-5" key={x.id}>
            <h1 className="font-serif text-3xl">{x.task}</h1>
            <p>{x.asign}</p>
          </div>
          ):null}
        </div>
        </div>
        </div>
  )
}
