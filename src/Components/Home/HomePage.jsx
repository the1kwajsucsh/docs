import React from "react";
import Entry from "./Entry";
import {Link} from 'react-router-dom';
import uuid from 'react-uuid'

const HomePage = () => {
  const libs = [
    {
      title: "Title",
      description: "description",
      github: "https://google.com",
      url: 'r3f'
    },
    {
      title: "Title",
      description: "description",
      github: "https://google.com",
      url: 'r3f'
    },
    {
      title: "Title",
      description: "description",
      github: "https://google.com",
      url: 'r3f'
    },
  ];

  return (
    <>
      <div className="min-h-screen p-8 lg:p-32 bg-gray-50">
        <Link to="/" className="p-2 block text-3x1 text-center lg:text-left">
          <span className="font-bold">Kwa </span>
          <span className="font-normal">docs</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-12 w-full max-w-8xl mt-8 lg:mt-20">
          {libs.map((data) => {
           const id = uuid();
           return <Entry key={id} id={id} data={data}/>
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;