import React from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm";
import CheckBox from "./components/Checkbox";
import Numbers from "./components/Numbers.js";
import User from "./components/User.js";
import GitHubUser from "./components/GitHubUser.js";

function App() {
  return (
    <>
      <GitHubUser login="dbstjrwnekd"/>
      <User />
      <Numbers />
      <CheckBox />
      <AddColorForm />
      <ColorList />
      </>
  );
}

export default App;
