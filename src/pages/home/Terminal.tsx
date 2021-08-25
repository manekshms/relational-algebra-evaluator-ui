import ReactTerminal from "terminal-in-react";
import { useActions } from "../../hooks/useActions";
import TableLayout from "table-layout";
import "./Terminal.scss";
import { RaeTerminalPlugin } from "./rae-terminal-plugin";
import {
  isRelationData,
  isRelationList,
  pluckColumnTitle,
  processRelationList,
} from "../../utils";

export const Terminal = () => {
  const { evaluateText } = useActions();
  return (
    <div className="flex justify-items-stretch h-full">
      <ReactTerminal
        style={{
          width: "100%",
          fontWeight: "bold",
          fontSize: "18px",
        }}
        plugins={[RaeTerminalPlugin]}
        prompt=">>"
        backgroundColor="#152d3e"
        allowTabs={false}
        hideTopBar={false}
        showActions={false}
        msg={`Welcome to RAE
Relational Algebric Evaluator`}
        // @ts-ignore
        commandPassThrough={(cmd: any, print: any, run: any) => {
          run("loading");
          if (cmd[0] && cmd[0].startsWith("--")) {
            cmd[0] = cmd[0].replace("--", "");
          }
          const res = evaluateText(cmd.join(" ")) as unknown as ReturnType<
            ReturnType<typeof evaluateText>
          >;
          res
            .then((data: any) => {
              // run("removeLine");
              if (isRelationData(data)) {
                const columnNames = pluckColumnTitle(data);
                data.unshift(columnNames);
                print(new TableLayout(data, { maxWidth: 500 }).toString());
              } else if (isRelationList(data)) {
                const processedData = processRelationList(data);
                const columnNames = pluckColumnTitle(processedData);
                processedData.unshift(columnNames);
                print(
                  new TableLayout(processedData, { maxWidth: 500 }).toString()
                );
              } else {
                print(JSON.stringify(data));
              }
            })
            .catch((e) => {
              run("removeLine");
              print(`🔴 ${e.message}`);
            });
        }}
      />
    </div>
  );
};
