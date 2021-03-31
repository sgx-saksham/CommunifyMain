import React from "react";

function AlgoVisualizer() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <title>Algorithm Visualizer</title>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <span className="ml-3 text-xl">Algo Visualizer</span>
          </a>
        </div>
      </header>
      {/* This is section */}
      <section className="text-gray-600 body-font">
        <a href="https://visualgo.net/en"></a>
        <div className="container px-5 py-24 mx-auto">
          <a href="https://visualgo.net/en"></a>
          <div className="flex flex-wrap -m-4">
            <a href="https://visualgo.net/en"></a>
            <div className="p-4 lg:w-1/3">
              <a href="https://visualgo.net/en"></a>
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <a href="https://visualgo.net/en">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Algorithms
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    You can Visualize many Algorithms from this section
                  </h1>
                  <p className="leading-relaxed mb-3">
                    This is the Way you can learn many algorithms not by reading
                    or by studying but by understanding them and learning them
                    through visualizations
                  </p>
                </a>
                <a className="text-blue-500 inline-flex items-center">
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AlgoVisualizer;
