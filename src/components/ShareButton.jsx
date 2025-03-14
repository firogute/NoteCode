import React from "react";

const ShareButton = ({ onClick, loading }) => {
  return (
    <button
      className="ml-auto flex justify-center items-center gap-4 bg-[#406AFF] px-4 py-2 rounded-4xl cursor-pointer hover:bg-[#4069ffc2] transition-all"
      onClick={onClick}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
      ) : (
        <img src="/Share.svg" alt="share button" />
      )}
      Share
    </button>
  );
};

export default ShareButton;
