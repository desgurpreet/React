import React, { useState } from "react";
import Navbar from "./Navbar";
import SongCard from "./SongCard";
function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1661181736686-d160e7f22680?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nazar",
      artist: "Anmol",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1661181736686-d160e7f22680?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nazar",
      artist: "Anmol",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1661181736686-d160e7f22680?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nazar",
      artist: "Anmol",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1661181736686-d160e7f22680?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nazar",
      artist: "Anmol",
      added: true,
    },
  ];
  const [songData, setSongData] = useState(data);
  const handleClick=((index)=>{
 setSongData((prev)=>{
  return prev.map((item,itemindex)=>{
    if(itemindex===index){
      return {...item, added:!item.added}
    }
    return item;  // Return unchanged items for other indices.
  })
 })
  })
  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={songData}/>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((song, index) => (
            <SongCard key={index} song={song} handleClick={handleClick} index={index}/>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
