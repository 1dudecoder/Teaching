import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [ans, setAns] = useState("");

  function hanleEnter(e) {
    if (e.key == "Enter") {
      let ans = eval(data);
      setData("");
      setAns(ans);
    }
  }

  return (
    <div className="App">
      {/* inputs layout */}
      <div className="ans">
        <input
          type="text"
          value={data}
          onChange={(e) => {
            let val = e.target.value;
            let flag = false;
            var letters = /^[A-Za-z]+$/;
            let arr = val.split("");
            arr.forEach((item) => {
              if (letters.test(item)) {
                flag = true;
              }
            });
            if (flag == false) {
              setData(val);
            }
          }}
          onKeyPress={hanleEnter}
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
                return prev + "%";
              });
            }}
          >
            %
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "/";
              });
            }}
          >
            /
          </button>
          <button
            className="bt"
            onClick={() => {
              setData((prev) => {
                return prev + "*";
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
                return prev + "+";
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
                return prev + "-";
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
          <button
            className="bt"
            onClick={() => {
              setData("");
              setAns("");
            }}
          >
            D
          </button>
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
              let ans = eval(data);
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
