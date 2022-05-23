import React from 'react';

export default function Rejected() {
  return (
    <div className="mx-auto my-40 bg-mainblue border border-blue-300 shadow rounded-md p-10 max-w-sm w-full">
      <div className=" flex items-center flex-col justify-center">
        <p className="text-xl text-center text">
          Sorry, the data you want can&apos;t be loaded right now.
          Check your internet and come back later or
          use the button below.
        </p>
        <button type="button" className="animate-bounce mt-20 px-4 py-2 font-semibold text-xl bg-slate-700 text-slate-200 border border-transparent border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-900 ring-blue-500" onClick={() => window.location.reload(true)}>Refresh</button>
      </div>
    </div>
  );
}
