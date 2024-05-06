import React from "react";
import Navbar from "../components/navbar";

export default function Sources() {
    const googleDocsUrl =
        "https://docs.google.com/document/d/e/2PACX-1vSk5SwQVgDUudmBYwLNYPyvKzJXQ5fogV0l461FZ5khiX62llR8HtwcmyAXcp1wZ6r0EK--lJjWAXkv/pub?embedded=true";

    return (
        <div>
            <Navbar />

            <div className=" items-center justify-center h-screen mt-5 mx-16">
                <iframe
                    title="Google Docs Viewer"
                    src={googleDocsUrl}
                    width="100%"
                    height="1000"
                    className="border border-gray-300 rounded-md"
                >
                    Loading...
                </iframe>
            </div>
        </div>
    );
}
