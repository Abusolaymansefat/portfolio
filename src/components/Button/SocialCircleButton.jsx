import React from "react";

const SocialCircleButton = ({ icon: Icon, url, onClick, color = "bg-gray-800" }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={url || "#"}
      target={url ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`w-12 h-12 flex items-center justify-center rounded-full ${color} text-white shadow-md 
        hover:scale-110 transition-transform duration-300`}
    >
      <Icon size={20} />
    </a>
  );
};

export default SocialCircleButton;
