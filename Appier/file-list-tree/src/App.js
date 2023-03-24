import "./styles.css";

import React from "react";
import Tree from "./Tree";

/**
 * A tree node of a checkbox tree.
 * Each Node will always contain the following 3 properties,
 * and their type will always be as specified below.
 *
 * @typedef {object} Node
 * @property {string} id - The value in selectedNodeIds
 * @property {string} label - The label to display in UI, beside the checkbox
 * @property {Node[]} children - List of child Nodes.
 *                               Empty if no children for this Node
 */

/**
 * @type {Node[]} - A tree is a list of top-level Nodes
 */
const sampleTreeInput = [
  {
    id: "1",
    label: "Option 1",
    children: [
      { id: "1-1", label: "Option 1-1", children: [] },
      {
        id: "1-2",
        label: "Option 1-2",
        children: [
          { id: "1-2-1", label: "Option 1-2-1", children: [] },
          {
            id: "1-2-2",
            label: "Option 1-2-2",
            children: [{ id: "1-2-2-1", label: "Option 1-2-2-1", children: [] }]
          },
          { id: "1-2-3", label: "Option 1-2-3", children: [] }
        ]
      },
      { id: "1-3", label: "Option 1-3", children: [] }
    ]
  },
  { id: "2", label: "Option 2", children: [] }
];

export default function App() {
  /**
   * @type {string[]}
   */
  const [selectedNodeIds, setSelectedNodeIds] = React.useState([]);

  /**
   * Whenever <Tree>'s onChange is invoked, a list of node IDs (strings) should be
   * passed in as its arguments.
   */
  const handleSelectedNodeIdsChange = (selectedNodeIds) =>
    setSelectedNodeIds(selectedNodeIds.sort());

  return (
    <div className="App">
      <h4>Click [+] to see children.</h4>
      <h4>Selected: {selectedNodeIds.join(", ")}</h4>
      <Tree
        tree={sampleTreeInput}
        selectedNodeIds={selectedNodeIds}
        onChange={handleSelectedNodeIdsChange}
      />
    </div>
  );
}
