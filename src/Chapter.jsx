import React from "react";
import Topics from "./Topics";
import { useState, useEffect } from "react";

const Chapter = () => {
  const [active, setActive] = useState(false);
  let [question, setQuestion] = useState(null);

  const callAPI = async () => {
    let data = await fetch(
      "https://raw.githubusercontent.com/abhinav1229/byte-flip-code-series/main/problems.json"
    );
    data = await data.json();
    setQuestion(data);
    console.log(data)
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <div className="main">
        <div className="main-header fit-in">
          <div className="que-sec-1-header">
            <div> Q.No. </div>
            <div> Questions </div>
          </div>
          <div className="que-sec-2">
            <div>
              {" "}
              <span> Status </span>{" "}
            </div>
            <div> Code </div>
          </div>
        </div>

        {question != null && ["array", "string", "linked list", "hashing"].map((topic, i) => {
          return (
            <div className="question-wrapper" key={i}>
              <Topics topic={topic} data={question[topic]} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Chapter;