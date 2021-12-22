import React, { useState } from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm";
import CheckBox from "./components/Checkbox";
import Numbers from "./components/Numbers.js";
import User from "./components/User.js";
import GitHubUser from "./components/GitHubUser.js";
import SearchForm from "./components/SearchForm";
import BigListData from "./components/BigListData.js";
import UserRepositories from "./components/UserRepositories.js";
import RepositoryReadme from "./components/RepositoryReadme.js";

function App() {
  const [login, setLogin] = useState("dbstjrwnekd");
  const [repo, setRepo] = useState("learning-react");

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  }

  if (!login) return(
    <SearchForm value={login} onSearch={handleSearch} />
  )

  return (
    <>
      <BigListData />
      <SearchForm value={login} onSearch={handleSearch} />
      {login && <GitHubUser login={login}/>}
      {login && <UserRepositories 
        login={login}
        repo={repo}
        onSelect={setRepo}
      />}
      {login && <RepositoryReadme login={login} repo={repo} />}
      <User />
      <Numbers />
      <CheckBox />
      <AddColorForm />
      <ColorList />
      </>
  );
}

export default App;
