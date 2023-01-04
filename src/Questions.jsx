import React from "react";

const Questions = () => {

  return (
    <>
      <div className="main">
        <div className="main-header fit-in">
          <div className="que-sec-1-header">
              <div> Q.No. </div>
              <div> Questions </div>
          </div>
          <div className="que-sec-2">
              <div> <span> Status </span> </div>
              <div> Code </div>
          </div>
        </div>
        <div className="questions fit-in">
          <div className="que-sec-1">
              <div> 1. </div>
              <div> Is Unique </div>
          </div>
          <div className="que-sec-2">
              <div> <span className="que-solved"> Solved </span> </div>
              <div>
                <span className="code-solution"> C++ </span>
              </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Questions;
