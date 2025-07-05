import React from "react";
import { images } from "../../constant/images";

const avatarData = [
  { src: images.ME_TWO, gradient: "from-blue-500 to-cyan-400" },
  { src: images.EX_TWO, gradient: "from-purple-500 to-pink-500" },
  { src: images.AVIK, gradient: "from-yellow-400 to-orange-500" },
  { src: images.AYAN, gradient: "from-pink-400 to-red-500" },
];

const AvatarGroup = () => {
  return (
    <div className="flex items-center relative group"> {/* 👈 this is key */}
      {avatarData.map((avatar, index) => (
        <div
          key={index}
          className={`w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr ${avatar.gradient} -ml-7 first:ml-0 z-[${index + 10}]`}
        >
          <img
            src={avatar.src}
            alt={`avatar-${index}`}
            className="w-full h-full object-cover rounded-full border-2 border-black"
          />
        </div>
      ))}

      {/* Dots Avatar */}
     {/* Dots Avatar with hover image + ring */}
<div className="w-20 h-20 -ml-5 rounded-full bg-neutral-700 flex items-center justify-center text-white text-xl font-bold z-[50] relative overflow-hidden group-hover:bg-transparent transition-colors duration-300">
  ...
  {/* Gradient ring + image */}
  <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-green-300 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img
      src={images.ME}
      alt=""
      className="w-full h-full object-cover rounded-full border-2 border-black"
    />
  </div>
</div>

    </div>
  );
};

export default AvatarGroup;
