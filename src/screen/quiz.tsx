import React, { useEffect, useState } from "react";
import { fbGet } from "../config/firebasemethod";

function QuizApp() {
  const [questions, setQuestions] = useState<any>([]);
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  function checkAnswer() {
    let correctValue = questions[ind].correctAns;
    if (selectedValue == correctValue) {
      setScore(score + 1);
    }
    if (questions.length == ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  }
  console.log(score);
  
  const getTask = () => {
    fbGet("QuizQuestions")
      .then((res: any) => {
        console.log(res);
        setQuestions([...res]);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="App bg-gradient-to-r from-slate-500 via-slate-800 to-slate-500 h-screen text-center">
      <div className="p-6">
        <div className="text-center">
          {isLoading ? ( 
            <p className="text-white font-bold">Loading...</p>
          ) : showResult ? (
            <div className="p-[40px] font-bold text-[30px] my-2 rounded shadow bg-slate-400 text-black">
              <p className="font-serif text-slate-700	">Result</p>
              <progress
                className="p-3"
                id="file"
                value={score}
                max={questions.length}
              ></progress>
              <h3 className="font-serif text-slate-700">{((score / questions.length) * 100).toFixed(2)} %</h3>
              <h3 className="font-serif text-slate-700">
                {(score / questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}
        </div>

        {!isLoading && !showResult ? (
          <div className=" p-[40px] font-bold text-[30px] my-2 rounded shadow bg-slate-400 text-black">
            <p className="fs-4">
              Question Number <span>{ind + 1}</span> of{" "}
              {questions.length}
            </p>
            <h3 className="py-10">{questions[ind].question}</h3>
          </div>
        ) : null}
        {!isLoading && !showResult ? ( 
          <div className="p-5 my-4 ">
            <div className="grid grid-cols-3">
              {questions[ind].options.map((e: any, i: any) => 
                  <div key={i} className="col-md-4 py-2">
                    <button
                      onClick={() => setSelectedValue(e)}
                      className="col-span-1 p-2 text-neutral-100 font-bold rounded shadow-md px-5 hover:bg-gradient-to-r from-slate-400 via-slate-900 to-slate-400"
                    >
                      {e}
                    </button>
                  </div>)}
            </div>
          </div>
        ) : null}
        {!isLoading && !showResult ? ( // Check if data is available and not showing result
          <div className="text-center">
            <button
              onClick={() => checkAnswer()}
              className="p-1 bg-gradient-to-r from-slate-400 via-slate-900 to-slate-400 text-white mt-5 px-5 rounded-pill"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default QuizApp;
