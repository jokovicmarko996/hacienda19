import { logo } from "./_assets";
import Hero from "./_components/hero";

{
  /* Author Section */
}
// <div className="bg-gray-900 flex gap-2 p-4 rounded-t-[30px]">
//   <img src={author.image} alt="Author" className="w-12 h-12 rounded-full" />
//   <div>
//     <p className="font-bold">{author.name}</p>
//     <p className="text-sm">{author.role}</p>
//   </div>
// </div>

const author = [
  {
    name: "Hacienda",
    image: logo,
    role: "Subscribe",
  },
];

const options = ["#fe6969", "#ffa666", "#ffdd66", "#323232"];

export default function Home() {
  return (
    // bg-gradient-to-tr from-[yellow] to-[black]
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      {/* <p>Hacienda</p> */}
      {/* const Card = ({ isPopular, isNew, author, imageSrc, title, options }) => { */}
      {/* <Card isPopular={true} isNew={false} author={author.at(0)} imageSrc={baldehina} title={`Premium Decking`} options={} /> */}

      <Hero />

      {/* <HeroTailwind /> */}

      {/* <HeroC /> */}

      {/* <Card
        isPopular={true}
        isNew={false}
        // logoImage={author.at(0).image}
        logoImage={logo}
        imageSrc={decking}
        title={`Premium Decking`}
        options={options}
      /> */}
    </div>
  );
}
