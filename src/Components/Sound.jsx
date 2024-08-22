import React from "react";

function Sound() {
  const data = [
    {
      name: "Mahiya Ve",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, neque.",
    },
    {
      name: "Qismat",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, neque.",
    },
  ];
  const handleClick = () => {
    alert("chal raha hai");
  };
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center">
      {data.map((item, index) => (
        <div className="px-3 py-2 bg-zinc-100 rounded">
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <p className="text-xs mt-2">{item.description}</p>
          <button
            onClick={handleClick}
            className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-2"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Sound;
