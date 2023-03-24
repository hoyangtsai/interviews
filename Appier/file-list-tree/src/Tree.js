import React, { useCallback, useEffect, useState, useRef } from "react";
import ExpandButton from "./ExpandButton";

import { normalize, schema } from "normalizr";
import produce from "immer";

import classnames from "classnames";

import "./Tree.css";

const Tree = ({ tree, selectedNodeIds, onChange }) => {
  /*
      The following code shows you the expected DOM structure. CSS styles are already done by us.
      Please replace the whole thing with your implementation.

      TODO:

      1. Replace the following `return` statement to something that really works.
      2. Break-down this render() with React components.

      <ul className="node-list">
        <li className="node">
          <label>
            <input type="checkbox" />
            Option 1
          </label>
          <ExpandButton expanded />
          <ul className="node-list">
            <li className="node">
              <label>
                <input type="checkbox" />
                Option 1-1
              </label>
            </li>
            <li className="node">
              <label>
                <input type="checkbox" />
                Option 1-2
              </label>
              <ExpandButton />
            </li>
            <li className="node">
              <label>
                <input type="checkbox" />
                Option 1-3
              </label>
            </li>
          </ul>
        </li>
        <li className="node">
          <label>
            <input type="checkbox" />
            Option 2
          </label>
        </li>
      </ul>  
  */

  // https://alexsidorenko.com/blog/react-update-nested-state/

  // console.log("tree =>", tree);

  const flattenTree = (tree) => {
    let nodes = {};

    const traverse = (node, parentId, level) => {
      if (!Array.isArray(node.children)) return;

      nodes[node.id] = {
        label: node.label,
        id: node.id,
        level: level,
        parentId: parentId,
        childrenId: node.childrenId || [],
        expanded: false,
        checked: false
      };

      if (parentId) {
        nodes[parentId] = {
          ...nodes[parentId],
          childrenId: [...nodes[parentId]["childrenId"], node.id]
        };
      }

      node.children.forEach((child) => {
        traverse(child, node.id, level + 1);
      });
    };

    tree.forEach((option) => {
      traverse(option, null, 0);
    });

    return nodes;
  };

  const [flatTree, setFlatTree] = useState({});

  useEffect(() => {
    const flatNodes = flattenTree(tree);
    setFlatTree(flatNodes);
  }, [tree]);

  // console.log("flatTree =>", flatTree);

  const handleChange = (e) => {
    e.stopPropagation();
    const selectId = e.target.id;
    const checked = e.target.checked;

    //   setFlatTree((prevState) => {
    //     // Object.assign({}, prevState)
    //     const nextState = { ...prevState };
    //     nextState[selectId].checked = checked;
    //     return nextState;
    //   });

    setFlatTree(
      produce((draft) => {
        draft[selectId].checked = checked;

        const checkChildren = (currId) => {
          if (draft[currId].childrenId.length === 0) return;
          draft[currId].childrenId.forEach((childId) => {
            draft[childId].checked = checked;
            checkChildren(childId);
          });
        };
        checkChildren(selectId);
      })
    );
  };

  const handleExpand = (e, id) => {
    e.preventDefault();

    // const sibling = e.target.nextElementSibling;
    // const scrollHeight = sibling.scrollHeight;

    // setFlatTree((prevState) => {
    //   const nextState = { ...prevState };
    //   nextState[id] = { ...nextState[id], expanded: !nextState[id].expanded };
    //   return nextState;
    // });

    setFlatTree(
      produce((draft) => {
        draft[id].expanded = !draft[id].expanded;
      })
    );
  };

  const renderList = (node, key, level) => {
    if (node.level !== level) return;

    return (
      <li className="node" key={key}>
        <input
          id={key}
          type="checkbox"
          checked={flatTree[key].checked}
          onChange={handleChange}
        />
        <label htmlFor={key}>{flatTree[key].label}</label>
        {flatTree[key].childrenId.length > 0 && (
          <React.Fragment>
            <ExpandButton
              expanded={flatTree[key].expanded}
              onClick={(e) => handleExpand(e, key)}
            />
            <ul
              className={classnames("node-list", {
                expanded: !flatTree[key].expanded
              })}
            >
              {flatTree[key].childrenId.map((childId) =>
                renderList(flatTree[childId], childId, level + 1)
              )}
            </ul>
          </React.Fragment>
        )}
      </li>
    );
  };

  return (
    <ul className="node-list">
      {Object.keys(flatTree).map((key) => renderList(flatTree[key], key, 0))}
    </ul>
  );
};

export default Tree;
