import React from "react";

export default function AnimatedCircles (){
  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500"];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 9 }).map((_, index) => {
        // Random initial position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        
        // Random animation duration and delay
        const duration = 7 + Math.random() * 5; // 5s to 10s
        const delay = Math.random() * 1; // 0s to 3s
        
        return (
          <div
            key={index}
            className={`circle ${colors[index % colors.length]} animate-randomMove`}
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

