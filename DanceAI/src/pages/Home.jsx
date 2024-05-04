import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import Navbar from "../components/navbar";
import BackToTopButton from "../components/BackToTop";

export default function Home() {
    return (
        <div>
            <div className="relative">
                <Navbar />
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-auto"
                    >
                        <video autoPlay loop muted className="w-full">
                            <source src="girldance.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-0 left-0 px-16 pb-16 text-4xl font-bold text-white font-serif"
                >
                    How Has AI Changed Dance?
                </motion.h1>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="relative text-white font-serif text-xl px-16 py-10"
            >
                The world of dance is no stranger to innovation, and{" "}
                <span className="text-purple-500">generative AI</span> is the
                latest revolution stirring things up. From assisting
                choreographers in creating groundbreaking moves to transforming
                the way audiences experience dance, AI is leaving its mark. This
                powerful technology is not here to replace the human touch in
                dance, but rather to act as a creative partner, pushing the
                boundaries of expression and accessibility in exciting new ways.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="relative text-white font-serif text-xl px-16 pb-10"
            >
                There is immense research being done in the field of AI and
                dance. For example, Stanford University's lab for Human-Centerd
                AI has created and AI that analyzes music’s rhythmic and
                emotional content and creates realistic dances. These dances are
                also physically plausible, meaning a real dancer could perform
                them. It is called{" "}
                <span className="text-purple-500">
                    Editable Dance GEneration (EDGE).
                </span>{" "}
                Since it is editable, a choreographer can choose the parts they
                like and regenerate parts they don't. For example, the
                choreographer can design specific leg movements of the
                character, and EDGE will
                <span className="text-purple-500"> “auto-complete”</span> the
                entire body from that positioning in a way that is realistic and
                seamless. (EDGE Shown Below)
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="relative text-white font-serif text-xl px-16 pb-10"
            >
                Just like AI image and text generators like ChatGPT and DALL-E,
                EDGE steps onto the stage as a choreographer's{" "}
                <span className="text-purple-500">dream assistant.</span>
                This innovative tool allows dance artists to delve into a world
                of iterative refinement, meticulously shaping their sequences
                one move, one position at a time. Imagine seamlessly inserting
                specific poses at precise moments – EDGE takes these details and
                seamlessly integrates them into the evolving choreography. The
                future holds even more possibilities, with EDGE soon allowing
                users to personalize their creations further by incorporating
                their own music or even capturing their own movements for the
                system to translate into digital steps.
            </motion.p>
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <video autoPlay loop muted className="w-full">
                        <source src="EDGE.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 1 }}
                className="relative text-white font-serif text-xl px-16 py-10"
            >
                The use of generative AI is not just a hypothetical tool for
                choreographers but it is already being used in the dance world.
                Visionary choreographer Wayne McGregor is actively using AI to
                create innovative dances. For his latest world premiere,{" "}
                <span className="italic text-purple-500">
                    Living Archive: An AI Performance Experiment,
                </span>{" "}
                he utilized a revolutionary, artificially intelligent
                choreographic tool, created in collaboration with Google Arts
                and Culture Lab, and trained on 25 years of his video archive.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 1 }}
                className="relative text-white font-serif text-xl px-16 pb-5"
            >
                Damien Henry, Head of Innovation at Google Arts and Culture,
                worked with McGregor on this. Henry found some technology
                related to handwriting prediction, which focused on hand motions
                to predict the shape of the next letter, and the idea was to
                attempt to extend this technology to the full body. So after
                drawing lines to represent the poses of the human body in
                thousands of images, they were able to train a model to predict
                the next pose. The algorithms had to parse every movement within
                25 years’ worth of dance so that they might learn, as Henry
                states, “how the body behaves, how dancers, specifically, behave
                – to be able to predict the next movement from any given
                [action]." This is similar to how LLMs like GPT-4 and Gemini
                predict the next word in a sentence, but instead it predicts the
                next pose.
            </motion.p>
            <div className="relative px-16 pb-10">
                <motion.div
                    onClick={() =>
                        window.open(
                            "https://artsandculture.google.com/story/fgUhvjdg-9RMuw?hl=en"
                        )
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.5, duration: 1 }}
                    className="relative w-48 h-12 flex items-center justify-center rounded-full border border-white bg-black text-white text-lg font-serif"
                >
                    LEARN MORE
                </motion.div>
            </div>
            <div className="flex justify-between">
                <img
                    src="livingArchive.jpg" // Replace with the actual path to your first image
                    alt="Image 1"
                    className="w-1/2 h-auto mr-2"
                />
                <img
                    src="livingArchive2.jpg" // Replace with the actual path to your second image
                    alt="Image 2"
                    className="w-1/2 h-auto ml-2"
                />
            </div>
            <div className="text-center mt-2 font-serif text-sm text-gray-400">
                Images from Living Archive: An AI Performance Experiment
            </div>

            <BackToTopButton />
        </div>
    );
}
