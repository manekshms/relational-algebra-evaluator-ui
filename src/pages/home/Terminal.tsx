import ReactTerminal from "terminal-in-react";
import "./Terminal.scss";

export const Terminal = () => {
  return (
    <div className="flex justify-items-stretch h-full">
      <ReactTerminal
        style={{
          width: "100%",
          fontWeight: "bold",
          fontSize: "18px",
        }}
        prompt=">>"
        backgroundColor="#152d3e"
        allowTabs={false}
        hideTopBar={false}
        showActions={false}
        msg={`Welcome to RAE
Relational Algebric Evaluator`}
        commandPassThrough={(cmd, print: any) => {
          print("....loading");
          print(`-PassedThrough:${cmd}: command not found`);
        }}
      />
    </div>
  );
};
