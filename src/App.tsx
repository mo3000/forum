import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div
      className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md
      space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
    >
      <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1364376811,3533706268&fm=26&gp=0.jpg"
           alt="Woman's Face" />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Erin Lindford
            </p>
            <p className="text-gray-500 font-medium">
              Product Engineer
            </p>
          </div>
          <button
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full
              border border-purple-200 hover:text-white hover:bg-purple-500
              hover:border-transparent focus:outline-none focus:ring-2
              focus:ring-purple-600 focus:ring-offset-2"
          >
            Message
          </button>
        </div>
    </div>
  );
}

export default App;
