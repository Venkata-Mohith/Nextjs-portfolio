"use client";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-32 bg-[#f8f7f5] rounded-t-[100px] flex flex-col items-center justify-center text-center"
    >
      {/* Icon */}
      <div className="p-6 bg-white rounded-full shadow-md mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="h-16 w-16 fill-gray-900"
        >
          <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/>
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        Tell me about your next <br /> <span className="block">project</span>
      </h2>

      {/* Buttons (ONLY LinkedIn stays here) */}
      <div className="mt-6 flex gap-4">
        <a
          href="https://www.linkedin.com/in/mohithpuppala/"
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-teal-600 transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-5 w-5 fill-white"
          >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
          </svg>
          LinkedIn
        </a>
      </div>

      {/* Divider */}
      <hr className="w-3/4 border-t border-gray-300 mt-12" />

      {/* Footer Links (Email moved here) */}
      <div className="mt-6 text-gray-500 text-sm">
        <div className="mt-2 flex gap-4 justify-center items-center">
          
          {/* EMAIL NOW HERE */}
          <a
            href="mailto:mohithpupppala@gmail.com"
            className="flex items-center gap-2 hover:text-teal-600"
          >
            <FaEnvelope />
            Email
          </a>

          <span>/</span>

          {/* GitHub */}
          <a
            href="https://github.com/mohith-hub"
            className="hover:text-teal-600 flex items-center gap-2"
          >
             <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-6 w-6 fill-gray-900 transition-colors"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 
    3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 
    0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 
    -.546-1.387-1.333-1.757-1.333-1.757 
    -1.089-.745.083-.729.083-.729 
    1.205.084 1.84 1.236 1.84 1.236 
    1.07 1.835 2.809 1.305 3.495.998 
    .108-.776.418-1.305.762-1.605 
    -2.665-.3-5.466-1.332-5.466-5.93 
    0-1.31.469-2.381 1.236-3.221 
    -.123-.303-.535-1.523.117-3.176 
    0 0 1.008-.322 3.301 1.23 
    .957-.266 1.983-.399 3.003-.404 
    1.02.005 2.047.138 3.006.404 
    2.291-1.552 3.297-1.23 3.297-1.23 
    .653 1.653.241 2.873.118 3.176 
    .77.84 1.235 1.911 1.235 3.221 
    0 4.61-2.805 5.625-5.476 5.921 
    .43.372.823 1.102.823 2.222 
    0 1.606-.014 2.898-.014 3.293 
    0 .321.19.694.8.576 
    C20.565 21.796 24 17.297 24 12 
    24 5.37 18.63 0 12 0z"/>
  </svg>

            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
