import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import avatar from "/src/assets/img/avatar-2-1.png";

function App() {
  return (
    <>
      <Header></Header>

      <div className="min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={avatar}
            className="border-teal-900 border-2 hover:border-4 hover:transition-shadow hover:animate-pulse hover:opacity-20 p-3 rounded-full max-w-xs shadow-2x"
          />
          <div>
            <h1 className="text-5xl text-gray-200 text-center lg:text-left font-bold hover:animate-pulse">
              Hi! I'm Kevin
            </h1>
            <p className="py-6 px-9 uppercase text-gray-200 text-sm lg:text-left lg:px-1">
              And here are the list of things I can help you with
            </p>

            <div className="tiktok my-2">
              <a
                href="/pages/video-editing.html"
                className="h-auto p-2 w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-glass"
              >
                {/* <!-- TIktok Reels YT Shorts Icon --> */}
                <img
                  src="/assets/img/tiktok-logo-bold.svg"
                  className="h-10 w-15 rounded"
                />
                <div className="flex flex-col ml-2 mt-1">
                  <h3 className="text-lg md:text-md sm:text-md font-bold">
                    TikTok | Reels | YT Shorts
                  </h3>
                  <span className="text-teal-200 text-xs uppercase text-left subpixel-antialiased">
                    Video Content Editing
                  </span>
                </div>
              </a>
            </div>
            <div className="podcast my-2">
              <a
                href="#"
                className="my-modal-5 disabled h-auto p-2 w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-glass"
              >
                {/* <!-- <a href="/pages/podcast-management.html" className="my-modal-5 disabled h-auto p-2 w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-glass"> --> */}
                <img
                  src="/assets/img/podcast.svg"
                  className="h-10 w-15 rounded"
                />
                <span
                  className="tooltip tooltip-open tooltip-down opacity-30 tooltip-warning"
                  data-tip="under construction"
                ></span>
                <div className="flex flex-col ml-2 mt-1">
                  <h3 className="text-lg md:text-md sm:text-md font-bold">
                    Podcast Production &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </h3>
                  <span className="text-teal-200 text-xs uppercase text-left subpixel-antialiased">
                    Podcast Editing/Management{" "}
                  </span>
                </div>
              </a>
            </div>
            <div className="software my-2">
              <a
                href="#"
                className="h-auto p-2 w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-glass"
              >
                <img
                  src="/assets/img/code-bold.svg"
                  className="h-9 w-15 rounded"
                />
                <span
                  className="tooltip tooltip-open tooltip-down opacity-30 tooltip-warning"
                  data-tip="under construction"
                ></span>
                <div className="flex flex-col ml-2 mt-1">
                  <h3 className="text-lg md:text-md sm:text-md font-bold">
                    Website Development &nbsp;&nbsp;&nbsp;&nbsp;
                  </h3>
                  <span className="text-teal-200 text-xs uppercase text-left subpixel-antialiased">
                    Programming
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
