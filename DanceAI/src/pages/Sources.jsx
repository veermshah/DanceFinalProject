import React from "react";
import "../App.css";
import Navbar from "../components/navbar";

export default function Sources() {
    const googleDocsUrl =
        "https://docs.google.com/document/d/e/2PACX-1vR1ewhvInzUmwGWi7LXckhmi_32kLO1GRikntB4IGc1Kc3x1wk46PwR5K_ZsADKcLAXBA7u9cQtBPaP/pub?embedded=true";

    return (
        <div>
            <Navbar />
            <iframe
                title="Google Docs Viewer"
                src={googleDocsUrl}
                width="100%"
                height="5000"
            >
                Loading...
            </iframe>
        </div>
    );
}
