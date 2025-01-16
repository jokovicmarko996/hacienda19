import Image from "next/image";
import React from "react";

const Card = ({ isPopular, isNew, logoImage, imageSrc, title, options }) => {
  return (
    // class card
    // ${
    //   isPopular ? "shadow-[0_10px_0_#ff6723]" : ""
    // } ${isNew ? "shadow-[0_10px_0_#00a6ed]" : ""}`}

    <article
      className={`relative
     w-[min(370px,100%)] text-[var(--card-text-color)]  shadow-md 

     before:content-[''] before:bg-transparent before:absolute before:top-0 before:right-0 before:w-[40%] before:h-[70px] before:rounded-bl-[var(--card-border-radius)] before:shadow-[-30px_30px_0_var(--card-bg-color)]

      after:bg-[var(--card-bg-color)] after:absolute after:top-0 after:right-0 after:h-[60px] after:w-[calc(40%-10px)] after:rounded-[var(--card-border-radius)] after:flex after:justify-center after:items-center after:font-medium after:text-lg 

          ${isPopular ? "after:content-['🔥Popular']" : ""} 
          ${isNew ? "after:content-['🆕New']" : ""}

      `}
    >
      {/* Author Section */}
      <div className="bg-[var(--card-bg-color)] w-[60%] h-[70px] grid grid-cols-[50px_1fr] gap-[2px] p-[10px] rounded-t-[var(--card-border-radius)]">
        <div>
          <Image
            /* ovde bih pre dodao logo image nego da ide preko author objekta */
            src={logoImage}
            alt="Author"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex items-center">
          {/* ovde bih promenio stil hacijende i dodao neki motion, i ovo da ide author ne znam da li ima smilsa */}
          <p className="font-caveat text-xl">Hacienda</p>
          {/* <p className="text-sm">Subscribe</p> */}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative bg-[var(--card-bg-color)] text-center rounded-tr-[var(--card-border-radius)]">
        <Image
          src={imageSrc}
          alt={title}
          // w-[90%] rotate-[5deg] transition duration-500
          className="inline-block w-[80%] rotate-3 transition-transform duration-500 hover:transform hover:rotate-[15deg] hover:scale-[1.1] hover:translate-x-[10px] hover:translate-y-[-20px]"
        />
      </div>

      {/* Info Section */}
      <div className="bg-[var(--card-bg-color)] p-8 text-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {/* ovde bih pre dodao da stoji ovako  */}
        {/* <div class="price">{price}$</div> */}
        <div class="price">1120$</div>
      </div>

      {/* More Section */}
      <div
        className={`flex justify-between items-center bg-[var(--card-bg-color)] pt-0 pr-[30px] pb-[30px] pl-[30px] rounded-b-[var(--card-border-radius)] ${
          isPopular ? "shadow-[0_10px_0_#ff6723]" : ""
        } ${isNew ? "shadow-[0_10px_0_#00a6ed]" : ""}`}
      >
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-gray-700 rounded-full">🛒</button>
          <button className="px-4 py-2 bg-gray-700 rounded-[var(--card-border-radius)]">
            Buy now
          </button>
        </div>
        <div>
          {/* <label for="">Options</label> */}
          <ul className="m-0 flex justify-center items-center gap-[10px] border border-[#313131] p-[5px] w-max rounded-[20px]">
            {options.map((color, index) => (
              <li
                key={index}
                className="w-[15px] h-[15px] rounded-full"
                style={{ backgroundColor: color }}
              ></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Label */}
      {/* {(isPopular || isNew) && (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-[var(card-bg-color)] h-[70px] w-[40%] rounded-br-[var(--card-border-radius)]">
          <span className="font-medium text-lg z-10">
            {isPopular ? "🔥Popular" : "🆕New"}
          </span>
        </div>
      )} */}
    </article>
  );
};

export default Card;
