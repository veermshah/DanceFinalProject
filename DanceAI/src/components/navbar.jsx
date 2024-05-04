import React from "react";
import "../App.css";

export default function Navbar() {
    return (
        <>
            <div class="flex flex-wrap h-screen">
                <section class="relative mx-auto">
                    <nav class="flex justify-between bg-gray-900 text-white w-screen">
                        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                            <ul class="hidden md:flex px-4 font-semibold font-heading space-x-12">
                                <li>
                                    <a
                                        className="scrolling-button-down font-mono hover:text-purple-400 text-xl tracking-widest"
                                        href="/"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="font-mono hover:text-purple-400 text-xl tracking-widest"
                                        href="#"
                                    >
                                        ABOUT
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="font-mono hover:text-purple-400 text-xl tracking-widest"
                                        href="#"
                                    >
                                        AI
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="font-mono hover:text-purple-400 text-xl tracking-widest"
                                        href="#"
                                    >
                                        SOURCES
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
        </>
    );
}
