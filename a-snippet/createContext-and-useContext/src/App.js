import "./styles.css";
import "tea-component/dist/tea.css";

import Layout from "./Layout";
import Content from "./Content";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Content />
        <div>Other content</div>
      </Layout>
    </div>
  );
}
