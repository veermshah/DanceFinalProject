import * as cam from "@mediapipe/camera_utils";
import * as mediapipePose from "@mediapipe/pose";
import React, { useEffect, useRef } from "react";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Pose } from "@mediapipe/pose";
import Webcam from "react-webcam";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";

const UserPose = () => {
    // refs to the html elements
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const landmarkRef = useRef(null);
    // landmarkRef = new LandmarkGrid(landmarkContainer);
    let camera = null; // variable to initialize the camera
    // function to draw the landmarks once the pose has been determnined
    function onResults(results) {
        // Define the canvas elements
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        canvasRef.current.height = webcamRef.current.video.videoHeight;
        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d");
        canvasElement.height = 720;
        canvasElement.width = 1280;
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, 1280, 720);
        canvasCtx.drawImage(results.image, 0, 0, 1280, 720);
        drawConnectors(
            canvasCtx,
            results.poseLandmarks,
            mediapipePose.POSE_CONNECTIONS,
            { color: "#3240CF", lineWidth: 2 }
        );
        // The dots are the landmarks
        drawLandmarks(canvasCtx, results.poseLandmarks, {
            color: "red",
            lineWidth: 2,
            radius: 3,
        });
        canvasCtx.restore();
    }
    useEffect(() => {
        const userPose = new Pose({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.2/${file}`;
            },
        });
        userPose.setOptions({
            maxNumFaces: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });
        userPose.onResults(onResults);
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null
        ) {
            camera = new cam.Camera(webcamRef.current.video, {
                onFrame: async () => {
                    await userPose.send({ image: webcamRef.current.video });
                },
                width: 1280,
                height: 720,
            });
            camera.start();
        }
        if (webcamRef.current) {
            webcamRef.current.video.onloadedmetadata = () => {
                canvasRef.current.width = 1000;
                canvasRef.current.height = 720;
            };
        }
    }, []);
    return (
        <div>
            <div className="App">
                <NavBar />
                <div className="flex justify-center items-center py-16 px-16">
                    <motion.h1
                        className="text-6xl text-white font-serif"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Pose Estimation Dance Tutorial
                    </motion.h1>
                </div>
                <div style={{ position: "relative" }}>
                    <Webcam
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            left: "10vw",
                            top: 0,
                            zIndex: 9,
                            width: "80vw",
                            height: "calc(100vw * 9 / 16)",
                        }}
                    />
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            left: "10vw",
                            top: 0,
                            zIndex: 10, // Ensure canvas appears above the webcam
                            width: "80vw",
                            height: "calc(100vw * 9 / 16)",
                        }}
                    ></canvas>
                </div>

                <div className="landmark-grid-container"></div>
            </div>
        </div>
    );
};
export default UserPose;
