import { createContext, useState, useEffect, useReducer } from "react";

import { Layout, NavMenu, Badge } from "tea-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down
// https://reactjs.org/docs/hooks-reference.html#usereducer

const { Header, Body } = Layout;

export const LayoutContext = createContext(null);

const initialState = {
  visible: false,
  lastOrigin: ""
};

function reducer(state, action) {
  console.log("state =>", state);
  console.log("action =>", action);
  switch (action.type) {
    case "open":
      if (action.lastOrigin === "layout") {
        return;
      }
      return { ...state, visible: true, lastOrigin: state.origin };
    case "close":
      if (action.lastOrigin === "notification") {
        return;
      }
      return { ...state, visible: false, lastOrigin: state.origin };
    default:
      throw new Error();
  }
}

const PageLayout = ({ children }) => {
  // const [visible, setVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleMailClick = () => {
    // setVisible(true);
    dispatch({ type: "open", origin: "layout" });
  };

  return (
    <Layout>
      <Header>
        <NavMenu
          right={
            <div className={`navbar__operations`}>
              <div
                onClick={handleMailClick}
                className="navbar__operations--item"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fa-lg"
                ></FontAwesomeIcon>
                <Badge className="navbar__badge" theme="danger" dark>
                  2
                </Badge>
              </div>
            </div>
          }
        ></NavMenu>
      </Header>
      <Body>
        <LayoutContext.Provider
          value={{
            state,
            dispatch
          }}
        >
          {children}
        </LayoutContext.Provider>
      </Body>
    </Layout>
  );
};

export default PageLayout;
