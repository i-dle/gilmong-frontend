import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import LoadMap from "./components/loadMap";
import Main from "./components/main";
import Modal from "./components/modal";
import Process from "./components/process";
import ShowPost from "./components/showpost";
function App() {
  return (
    <>
      <Modal></Modal>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/roadmap" element={<LoadMap></LoadMap>}></Route>
        <Route path="/showpost/:id" element={<ShowPost></ShowPost>}></Route>
        <Route path="/process" element={<Process></Process>}></Route>
      </Routes>
    </>
  );
}

export default App;
