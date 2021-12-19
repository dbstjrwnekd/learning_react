import React, { useState } from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm";
import CheckBox from "./components/Checkbox";
import Numbers from "./components/Numbers.js";
import User from "./components/User.js";
import GitHubUser from "./components/GitHubUser.js";
import SearchForm from "./components/SearchForm";
import BigListData from "./components/BigListData.js";

function App() {
  const [login, setLogin] = useState("dbstjrwnekd");

  return (
    <>
      <BigListData />
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login}/>
      <User />
      <Numbers />
      <CheckBox />
      <AddColorForm />
      <ColorList />
      </>
  );
}

export default App;
