import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";
import Navbar from "../components/navbar";
import BackToTopButton from "../components/BackToTop";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="relative">
                <Navbar />
                <div className="h-28"></div>
                <div className="h-28"></div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: -200 }}
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
                    whileInView={{ opacity: 1, y: -200 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-0 left-0 px-16 pb-16 text-4xl font-bold text-white font-serif"
                >
                    How Has AI/ML Changed Dance?
                </motion.h1>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="relative text-white font-serif text-xl px-16 py-10"
            >
                The world of dance is no stranger to innovation, and{" "}
                <span className="text-purple-500">generative AI</span> and{" "}
                <span className="text-purple-500">machine learning</span> are
                the latest revolution stirring things up. From assisting
                choreographers in creating groundbreaking moves to transforming
                the way audiences experience dance, AI is leaving its mark. This
                powerful technology is not here to replace the human touch in
                dance, but rather to act as a creative partner, pushing the
                boundaries of expression and accessibility in exciting new ways.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
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
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="relative text-white font-serif text-xl px-16 pb-10"
            >
                Just like AI image and text generators like ChatGPT and DALL-E,
                EDGE steps onto the stage as a choreographer's{" "}
                <span className="text-purple-500">dream assistant.</span> This
                innovative tool allows dance artists to delve into a world of
                iterative refinement, meticulously shaping their sequences one
                move, one position at a time. Imagine seamlessly inserting
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
                    whileInView={{ opacity: 1, y: -200 }}
                    transition={{ duration: 1 }}
                >
                    <video autoPlay loop muted className="w-full">
                        <source src="EDGE.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="text-center mt-2 font-serif text-sm text-gray-400"
            >
                Editable Dance GEneration Example Output
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
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
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
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
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 1 },
                    }}
                    onClick={() =>
                        window.open(
                            "https://artsandculture.google.com/story/fgUhvjdg-9RMuw?hl=en"
                        )
                    }
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: -200 }}
                    transition={{ duration: 1 }}
                    className="relative w-48 h-12 flex items-center justify-center rounded-full border border-white bg-black hover:bg-purple-500 text-white text-lg font-serif"
                >
                    LEARN MORE
                </motion.button>
            </div>
            <div className="flex justify-between">
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: -200 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    src="livingArchive.jpg" // Replace with the actual path to your first image
                    alt="Image 1"
                    className="w-1/2 h-auto mr-2"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: -200 }}
                    transition={{ duration: 1 }}
                    src="livingArchive2.jpg" // Replace with the actual path to your first image
                    alt="Image 1"
                    className="w-1/2 h-auto mr-2"
                />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="text-center mt-2 font-serif text-sm text-gray-400"
            >
                Images from Living Archive: An AI Performance Experiment
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="relative text-white font-serif text-xl px-16 py-5"
            >
                Another application of Machine Learning to dance is{" "}
                <span className="text-purple-500">Pose Estimation (PE).</span>{" "}
                PE is when a computer vision model is trained to detect the
                poses of objects, and in this case, humans. Comparing the poses
                drawn between professional dancers and dance students can tell a
                student what they are lacking and how to improve their
                technique. Pose estimation software can analyze a dancer's
                movement and provide real-time feedback on their form. This can
                help dancers identify misalignments, ensure proper technique,
                and track their progress over time. With a pose estimation
                system, dancers can practice independently and receive immediate
                feedback without relying solely on a teacher or mirror.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="relative text-white font-serif text-xl px-16 pb-5"
            >
                Pose estimation offers a more objective analysis of movement
                compared to subjective feedback from a teacher. This can be
                helpful for dancers who want a data-driven approach to improving
                their technique. Some pose estimation systems can even be used
                to generate new dance movements based on a dancer's input. This
                can spark creativity and help dancers explore new possibilities
                in their choreography. Below is an example of pose estimation
                being used on a dancer.
            </motion.p>
            <div className="relative mx-20 mt-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: -200 }}
                    transition={{ duration: 1 }}
                    className="h-auto"
                >
                    <video autoPlay loop muted className="w-full">
                        <source src="poseEstimation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="text-center font-serif mt-2 mb-10  text-sm text-gray-400"
            >
                Pose Estimation Example
            </motion.div>
            <div
                className="relative px-16 pb-10"
                onClick={() => {
                    // Your click event logic here
                    navigate("/ai");
                }}
            >
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 1 },
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: -200 }}
                    transition={{ duration: 1 }}
                    className="relative w-1/2 h-12 flex items-center justify-center rounded-full border border-white bg-black hover:bg-purple-500 text-white text-lg font-serif"
                >
                    SIMPLE POSE ESTIMATION DEMO
                </motion.div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="relative text-purple-500 font-serif text-xl px-16 py-5"
            >
                *You might want to turn on the sound for the video the below*
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="relative text-white font-serif text-xl px-16 py-5"
            >
                This video of robots dancing may initially seem fake, but it has
                been proven by VFX Artists to be unedited video. These robots
                were made by{" "}
                <span className="text-purple-500">Boston Dynamics,</span> a
                renowned American engineering and robotics design company famous
                for their creation of highly mobile robots with advanced
                capabilities. In the video to the right you see{" "}
                <span className="text-purple-500">Atlas,</span> a powerful
                bipedal humanoid robot designed for research on human-like
                agility and Spot, a four-legged robot. These robots use machine
                learning to move without banging into anything.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="relative mx-20 my-10"
            >
                <video autoPlay loop muted controls>
                    <source src="doYouLoveMe.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                className="relative text-white font-serif text-xl px-16 pb-5"
            >
                These dancing robots are pushing the frontiers of what we
                consider dance. When we think of conventional dance, it tends to
                include solely humans, but even birds, bees, and apes dance
                without human influence. Although these metal mannequins are
                entertaining to watch, they don't have the same emotions that
                professional dancers manifest. There is a long way to go before
                these guys can compete with real dancers but the possibility is
                real. AI has infilitrated other arts forms in more visible ways
                already. Midjourney, DALLE-2, Adobe Firefly and others have been
                creating amazing digital artwork. Kits.ai, ACE Studio, and
                Vocaloid have been creating entire songs with vocals in minutes.
                Although AI hasn't significantly broken into cinema, television,
                and dance yet, it will soon. AI will be an integral part of many
                aspects of our world in the coming years. The challenge lies in
                integrating AI into art in a way that fosters artistic
                expression while safeguarding cultural heritage.
            </motion.p>
            <div className="mt-16"></div>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -150, scale: 1.5 }}
                transition={{ duration: 1 }}
                className="text-white font-serif text-4xl text-center"
            >
                Thanks for visiting! 🕺💃
            </motion.h1>
            <BackToTopButton />
        </div>
    );
}
