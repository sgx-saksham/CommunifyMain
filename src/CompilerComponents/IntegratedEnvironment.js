import React from "react";
// import Compiler from "./Compiler";

function IntegratedEnvironment() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Communify Compiler</title>
      <h2>
        Communify Compiler
        <sub style={{ fontSize: "small" }} />
      </h2>
      <h4>Source Code</h4>
      <textarea
        id="source"
        style={{ width: "calc(50% - 8px)", height: "50%", resize: "vertical" }}
        defaultValue={"//Write Your Code Here :)\n"}
      />
      <h4>Language</h4>
      <select id="lang">
        <option>Bash</option>
        <option>C#</option>
        <option selected>C++</option>
        <option>C</option>
        <option>Java</option>
        <option>Python</option>
        <option>Ruby</option>
      </select>
      <h4>Input</h4>
      <textarea
        id="input"
        style={{ width: "calc(50% - 8px)", height: "10%", resize: "vertical" }}
        defaultValue={"VIT"}
      />
      <br />
      <br />
      <button id="run" onclick="run()">
        Run (Ctrl + Enter)
      </button>
      <textarea
        readOnly
        id="output"
        style={{
          width: "50%",
          height: "100%",
          position: "fixed",
          top: 0,
          right: 0,
          resize: "none",
        }}
        defaultValue={""}
      />
    </div>
  );
}

export default IntegratedEnvironment;
