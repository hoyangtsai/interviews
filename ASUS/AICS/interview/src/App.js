import "./styles.css";

import Table from "./Table";

import fakeAllergyData from "./fakeAllergyData";

export default function App() {
  return (
    <div className="App">
      <Table data={fakeAllergyData}></Table>
    </div>
  );
}
