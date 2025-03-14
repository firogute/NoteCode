import React from "react";

const ShareButton = ({ onClick, loading, disabled }) => {
  return (
    <button
      className={`ml-auto gap-4 bg-[#406AFF] px-4 py-4  hover:bg-[#4069ffc2] transition-all z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover w-full lg:w-32 ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled || loading}
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
