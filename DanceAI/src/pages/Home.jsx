import React from "react";
import "../App.css";
import Navbar from "../components/navbar";

export default function Home() {
    return (

        <div>
            <Navbar />
            <p className="font-sans hover:font-serif text-3xl ">Home</p>
        </div>
    );
}
