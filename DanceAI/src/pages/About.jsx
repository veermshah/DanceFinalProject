import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import "../App.css";
import Navbar from "../components/navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="about-container text-white text-4xl font-serif mx-16 my-5">
                <h1>Welcome to My Website</h1>
                <p>Feel free to check out the source code on GitHub:</p>
                <div className="my-5"></div>
                <motion.a
                    href="https://github.com/veermshah/DanceFinalProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 5 }}
                    className="github-button "
                >
                    <FaGithub />
                </motion.a>
            </div>
        </div>
    );
}
