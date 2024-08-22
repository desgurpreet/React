import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1590599145008-e4ec48682067?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur, magnam. Cum quia.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590599145008-e4ec48682067?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur, magnam. Cum quia.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590599145008-e4ec48682067?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur, magnam. Cum quia.",
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
              srcset=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-5">{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
