import React, {lazy, Suspense } from "react";
import "./dashboard.css";
import Layout from "../Layout";
import BowlingGame from "./../../BowlingScoreboard/components/Game";
import User from "./../../User";
import NoPage from "./../NoPage";
import { Routes, Route } from "react-router-dom";
const TicTacToeGame =  lazy(() => import("./../../TicTacToeGame"));


const Dashboard = () => {
  return (
    <div>
      Welcome to UI world
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      <Routes>
        <Route path="bowling" element={<BowlingGame />}></Route>
        <Route path="user" element={<User />}></Route>
        <Route path="tictactoe" element={<TicTacToeGame />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
      </Suspense>
    </div>
  );
};

export default Dashboard;
