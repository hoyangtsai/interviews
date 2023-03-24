import React from "react";
import ReactDOM from "react-dom";
import Tree from "./Tree";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const tree = [{ id: "1", label: "1", children: [] }];
  ReactDOM.render(
    <Tree tree={tree} selectedNodeIds={[]} onChange={() => {}} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
