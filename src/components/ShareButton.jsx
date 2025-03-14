import React from "react";

const ShareButton = ({ onClick }) => {
  return (
    <button
      className="ml-auto flex justify-center items-center gap-4 bg-[#406AFF] px-4 py-2 rounded-4xl cursor-pointer hover:bg-[#4069ffc2] transition-all"
      onClick={onClick}
    >
      <img src="/Share.svg" alt="share button" /> Share
    </button>
  );
};

export default ShareButton;
