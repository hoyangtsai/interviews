import { Layout } from "tea-component";
import Notification from "./Notification";

const { Content } = Layout;

const PageContent = () => {
  return (
    <>
      <Content className="app-content">
        <Content.Header title="Hello CodeSandbox" />
        <h2>Start editing to see some magic happen!</h2>
      </Content>
      <Notification></Notification>
    </>
  );
};

export default PageContent;
