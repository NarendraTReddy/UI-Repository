import React from "react";
import "./dashboard.css";
import Layout from "../Layout/index";
import BowlingGame from "./../../BowlingScoreboard/components/Game";
import User from "./../../User/index";
import NewApp from "./../NewApp";
import NoPage from "./../NoPage";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Welcome to UI world
      <Layout />
      <Routes>
        <Route path="bowling" element={<BowlingGame />}></Route>
        <Route path="user" element={<User />}></Route>
        <Route path="newApp" element={<NewApp />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
