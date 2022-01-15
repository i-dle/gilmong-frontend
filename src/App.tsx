import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./components/main";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </>
  );
}

export default App;
