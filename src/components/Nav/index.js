import React from "react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

export default function index({ mode }) {
  return <div>{mode === "1" ? <Nav1 /> : <Nav2 />}</div>;
}
