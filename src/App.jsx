import React, { useState } from "react";
import Card from "./Components/propsData";
function App() {
  const data = [
    {
      name: "John",
      profession: "Painter",
      image:
        "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=is&k=20&c=ucGYVfkrOautxqml9O94gwp-tcR4uvMQOBbsbFI-vO0=",
      friends: false,
    },
    {
      name: "John",
      profession: "Painter",
      image:
        "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=is&k=20&c=ucGYVfkrOautxqml9O94gwp-tcR4uvMQOBbsbFI-vO0=",
      friends: false,
    },
    {
      name: "John",
      profession: "Painter",
      image:
        "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=is&k=20&c=ucGYVfkrOautxqml9O94gwp-tcR4uvMQOBbsbFI-vO0=",
      friends: false,
    },
    {
      name: "John",
      profession: "Painter",
      image:
        "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=is&k=20&c=ucGYVfkrOautxqml9O94gwp-tcR4uvMQOBbsbFI-vO0=",
      friends: false,
    },
  ];

  const [realdata, setRealData] = useState(data);
  const handleFriendsButton = (cardindex) => {
    setRealData((previous) => {
      return previous.map((item, index) => {
        if (index === cardindex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realdata.map((item, index) => (
          <Card
            key={index}
            index={index}
            handleClick={handleFriendsButton}
            value={item}
          />
        ))}
      </div>
    </>
  );
}
export default App;
