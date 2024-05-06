import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import "../App.css";
import Navbar from "../components/navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="about-container text-white  font-serif mx-16 my-5">
                <h1 className="text-4xl">Welcome to My Website</h1>
                <p className="text-xl">
                    Hi there! I am Veer Shah and I created this website using
                    React.js for DANC1310 - Understanding Dance. It is hosted
                    using AWS Amplify. Feel free to check out the source code on
                    GitHub:
                </p>
                <div className="my-5"></div>
                <motion.a
                    href="https://github.com/veermshah/DanceFinalProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 5 }}
                    className="github-button text-6xl"
                >
                    <FaGithub />
                </motion.a>
            </div>
        </div>
    );
}
