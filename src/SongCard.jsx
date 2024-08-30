import React from "react";

function SongCard({ song, handleClick,index }) {
  const { image, artist, name, added } = song;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="">
        <h3 className="font-semibold text-xl">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button
        onClick={()=>handleClick(index)}
        className="px-4 py-3 whitespace-nowrap bg-orange-600 absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] rounded-full"
      >
        {added === false ? "Add To Favourites" : "Added"}
      </button>
    </div>
  );
}

export default SongCard;
