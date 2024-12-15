import Image from "next/image";
import homePage from "../../public/jpmain.jpg";
import { Copyright } from "lucide-react";

export default function Home() {
  return (
    <div className="grid text-white grid-cols-4 sm:grid-cols-3 grid-rows-3 h-screen bg-[#0d3354] place-content-center">
      <div className="sm:invisible sm:hidden"></div>
      <div className="text-5xl self-center font-bold order-1 col-span-3 sm:order-none sm:col-span-1 sm:text-7xl">
        <h1 className="mx-5 pt-3 sm:pt-0 sm:m-5">Ryan Gleeson</h1>
      </div>

      <div className="order-2 col-span-4 sm:order-none sm:col-span-2 sm:ml-auto">
        <h3 className="italic text-md mt-3 ml-6 text-left sm:text-xl sm:mt-8 sm:text-right sm:mr-9 sm:ml-0 md:text-2xl">
          A Self-driven programmer that<br></br>tries to make an impact.
        </h3>
      </div>
      <Image
        src={homePage}
        alt="Picture of Ryan Gleeson"
        className="col-span-3 row-span-4 object-cover c-full h-full row-start-1 sm:row-start-auto sm:col-span-2 sm:row-span-2"
      ></Image>
      <div className="row-span-2 flex flex-col order-2 col-span-4 mx-8 sm:order-none text-3xl sm:col-span-1 sm:text-3xl md:text-4xl sm:m-0">
        <div className="ml-auto text-right sm:text-left sm:m-auto">
          <h1 className="font-bold my-4">Coming soon</h1>
          <ul className="line-through">
            <li>Profile</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex mx-auto my-3 h-min text-sm md:text-lg">
          <Copyright className="my-auto mx-2" size={16} />
          <span className=""> Ryan Gleeson 2024</span>
        </div>
      </div>
    </div>
  );
}
