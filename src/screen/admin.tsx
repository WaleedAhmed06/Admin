import CPButton from '../component/CPbutton'
import CPInput from '../component/CPinput'
import { useState } from 'react'
import { fbAdd } from '../config/firebasemethod'
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [mainarr, setMainarr] = useState<any>({});
  const [array, setArray] = useState<any>([]);
  const [val, setVal] = useState<any>("");
  const [first, setFirst] = useState<any>("");
  const [second, setSecond] = useState<any>("");
  const navigate = useNavigate()


  const Arr = () => {
    setArray([...array, val]); // Use setArray to update the state
    setVal("");
    console.log(array);
  };

  const saveList = () => {
    setMainarr({ question: first, options: array, correctAns: second });
    console.log(mainarr);
    setArray([]);
    setFirst("");
    setSecond("");
  };

  const addTask = () => {
    fbAdd("QuizQuestions", mainarr)
      .then((res) => {
        console.log(res);
        setMainarr({});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let move = () => {
    navigate(`/quiz`)
  }

  return (
    <div>
      <div className="grid grid-cols-4 ">
        <div className="bg-zinc-400 p-5 h-screen">
            <div className='flex flex-col'>
                <h1 className='bg-slate-100 w-[150px] h-[150px] rounded-full ml-[60px] my-[20px]'></h1>
                <CPButton onClick={move} label='HTML'/>
                <CPButton onClick={move} label='CSS'/>
                <CPButton onClick={move} label='JS Quiz 1'/>
                <CPButton onClick={move} label='JS Quiz 2'/>
                <div className='text-center my-2 mt-[100px]'>
                <CPButton label='Layout'/>
                </div>
            </div>
        </div>
        <div className="col-span-3 mr-[5px] mt-[10px] ml-[30px]">
            <div className='flex my-3'>
            <h1 className='w-2/4 text-2xl font-serif'>QUIZ APP ADMIN</h1>
            <div className='w-2/4 text-right'><CPButton onClick={addTask} label='SAVE'/></div>
            </div>
            <div className="grid grid-cols-3">
    
                <div className="bg-zinc-200 mr-2 mb-4 p-1.5">Quiz Name</div>
                <div className="bg-zinc-200 mr-2 mb-4 p-1.5">Quiz Duration in min</div>
                <div className="bg-zinc-200 mr-2 mb-4 p-1.5">Secret key</div>

             
                <div className="bg-zinc-200 mr-2 mb-4 p-1.5">Quiz Open</div>
                <div className="bg-zinc-200 col-span-2 mr-2 mb-4 p-1.5">Description</div>
               
                
                <div className="col-span-3  mb-4 mt-2"><CPButton onClick={saveList} label='Lock Quiz'/></div>
            
         
                <div className="bg-zinc-400 col-span-3 mr-2 mb-4 p-1.5"><CPInput onChange={(e:any) => setFirst(e.target.value)} label='Question'/></div>
          
              
                <div className="bg-zinc-400 col-span-2 mr-2 mb-4 p-1.5"><CPInput onChange={(e:any) => setVal(e.target.value)} label='Option'/></div>
                <div className=" mr-2  text-right"><CPButton onClick={Arr} label='+'/></div>
          
                {array.map((x:any) => <div className="bg-zinc-200 col-span-1 mr-2 mb-4 p-1.5">{x}</div>
                
                )}
                
                <div className="bg-zinc-200 mr-2 mb-4 p-1.5"><CPInput onChange={(e:any) => setSecond(e.target.value)} label='Correct: Option 2'/></div>
              
             
               
              
            </div>
        </div>
      </div>
    </div>
  )
}
