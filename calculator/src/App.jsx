import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [ans,setAns] = useState("");

  return (
    <div className="App">
      {/* inputs layout */}
      <div className="ans">
        <input
          type="text"
          value={data}
          onChange={(e) => {
            let data = e.target.value;
            let newdata = data.split("");
          }}
        />
        <input type="text" value={ans} />
      </div>

      {/* buttons layout*/}
      <div className="btn">
        <div className="inner-div">
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev.substring(0, prev.length - 1);
              });
            }}
          >
            C
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + " % ";
              });
            }}
          >
            %
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + " / ";
              });
            }}
          >
            /
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + " X ";
              });
            }}
          >
            X
          </button>
        </div>
        <div className="inner-div">
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "1";
              });
            }}
          >
            1
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "2";
              });
            }}
          >
            2
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "3";
              });
            }}
          >
            3
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + " + ";
              });
            }}
          >
            +
          </button>
        </div>
        <div className="inner-div">
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "4";
              });
            }}
          >
            4
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "5";
              });
            }}
          >
            5
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "6";
              });
            }}
          >
            6
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + " - ";
              });
            }}
          >
            -
          </button>
        </div>
        <div className="inner-div">
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "7";
              });
            }}
          >
            7
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "8";
              });
            }}
          >
            8
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "9";
              });
            }}
          >
            9
          </button>
          <button className="bt" onClick={()=>{
            setData('');
            setAns('');
          }}>D</button>
        </div>
        <div className="inner-div">
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "0";
              });
            }}
          >
            0
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + ".";
              });
            }}
          >
            .
          </button>
          <button
            className="bt"
            onClick={() => {
              console.log("data", data);
              let newdata = data.split(" ");
              console.log(newdata);
              let ans = Number.parseInt(newdata[0]);
              for (let i = 1; i < newdata.length; i++) {
                if (newdata[i] == "+") {
                  ans +=  Number.parseInt(newdata[i+1]);
                }
              }
              setAns(ans);
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
