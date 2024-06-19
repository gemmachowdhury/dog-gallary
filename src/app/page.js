"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Dropdownmenu from "./components/Dropdownmenu";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (

    <main>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          <div><h1 className="text-center">Dog Breads</h1></div>
        </div>
      </div>
      <div className="container d-flex align-items-center justify-content-center">
        <Dropdownmenu />
      </div>
    </main>

  );
}
