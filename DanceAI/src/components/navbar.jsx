import React from "react";
import "../App.css";

export default function Navbar() {
    return (
        <>
            <div class="flex flex-wrap">
                <section class="relative mx-auto">
                    <nav class="flex justify-between bg-black text-white w-screen">
                        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                            <ul class="hidden md:flex px-4 font-serif space-x-12">
                                <li>
                                    <a
                                        className="font-serif font-mono hover:text-purple-400 text-xl tracking-widest"
                                        href="/"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="font-serif hover:text-purple-400 text-xl tracking-widest"
                                        href="/about"
                                    >
                                        ABOUT
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="font-serif hover:text-purple-400 text-xl tracking-widest"
                                        href="/AI"
                                    >
                                        AI
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="font-serif hover:text-purple-400 text-xl tracking-widest"
                                        href="/sources"
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
