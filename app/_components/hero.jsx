import React from "react";
import pergolaHero from "../../public/hero/pergola1.png";
import { Container } from "./container";
import Image from "next/image";
import AnimatedText from "./animatedText";

function FullScreenImage() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src={pergolaHero} // Replace with your image path
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-[-1]" // z-[-1] Ensures it stays in the background
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to My Page</h1>
      </div>
    </div>
  );
}

// Headline:
// "Transform Your Outdoor Space with Custom Pergolas"

// Subheadline:
// "Expertly designed and built to enhance your backyard, providing shade, style, and a space to create memories."

// Call to Action:
// "Browse Designs" | "Get a Free Quote"

// Supporting Text:
// "Whether you’re looking for modern elegance or classic charm, our custom-built pergolas are tailored to suit your style and needs. Experience the perfect blend of beauty and functionality."

// Transform Your Outdoor Space
// Expertly designed and built to enhance your backyard, providing shade, style, and a space to create memories.

const Hero = () => {
  return (
    <Container>
      <div className="relative w-screen h-screen  overflow-hidden">
        <Image
          src={pergolaHero}
          fill
          placeholder="blur"
          quality={80}
          // objectFit="cover"
          className="object-cover z-[-1]" // z-[-1] Ensures it stays in the background
     
          alt="Pergola hero image"
        />
        {/* <FullScreenImage /> */}

        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-4xl lg:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
            Hacienda
          </h1> */}

          <AnimatedText
            text="Hacienda"
            className="text-7xl lg:text-8xl font-caveat"
          />
        </div>
      </div>

      {/* <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link> */}
    </Container>
  );
};

export default Hero;
