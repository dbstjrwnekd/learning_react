import React from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm";
import CheckBox from "./components/Checkbox";
import Numbers from "./components/Numbers.js";

function App() {
  return (
    <>
      <Numbers />
      <CheckBox />
      <AddColorForm />
      <ColorList />
      </>
  );
}

export default App;
