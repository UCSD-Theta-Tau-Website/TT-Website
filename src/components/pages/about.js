import React from "react";
import "../../style/about.css";
import RedFooter from "../footers/redFooter.js";

const About = () => {
  return (
    <div class="flex flex-col items-center overflow-hidden">

      {/* hero */}
      <div class="bg-22grad bg-cover bg-center bg-no-repeat h-screen md:h-auto pt-96 md:pt-48 md:pb-80 space-y-2 text-center w-screen text-white flex flex-col items-center">
        <h1 class="text-8xl md:text-9xl">ABOUT US</h1>
        <h2 class="text-2xl font-sans italic max-w-xl">Learn more about the Epsilon Delta Chapter of Theta Tau!</h2>
      </div>

      {/* our mission */}
      <div class="py-10 w-screen">
        <div class="flex items-center pb-2">
          <h1 class="text-5xl px-10 text-red-800">Our Mission</h1>
          <div class="grow border-2 border-red-800"></div>
        </div>
        <div class="flex flex-col-reverse items-center md:flex-row pt-8 md:py-8 md:mb-6">
          <div class="bg-flower2 md:bg-flower bg-cover italic w-full md:w-1/2 px-12 mr-8">
            <p class="text-lg md:text-2xl py-12 md:h-96 md:py-96 leading-8 md:leading-10 text-center flex flex-row items-center">Our mission is to develop engineers into socially responsible professionals and leaders of the industry. Our fraternity provides members with unique opportunities for networking, professional development, community service, and lifelong friendships. We are committed to promoting diversity and inclusivity within the engineering community and beyond.</p>
          </div>
          <div class="bg-rectangle4 bg-cover bg-left w-full h-96 py-96 md:h-auto md:w-1/2 rounded-none md:rounded-l-xl"></div>
        </div>
        <div class="grow border-2 border-red-800"></div>
      </div>

      {/* huge photo */}
      <div class="bg-biglitto bg-cover bg-bottom w-screen h-96 py-96"></div>

      {/* our history */}
      <div class="py-10 w-screen">
        <div class="flex items-center pb-2">
          <h1 class="text-5xl px-10 text-red-800">Our History</h1>
          <div class="grow border-2 border-red-800"></div>
        </div>
        <div class="flex flex-col-reverse items-center md:flex-row pt-8 md:py-8 md:mb-6">
          <div class="bg-flower2 md:bg-flower bg-cover italic w-full md:w-1/2 px-12 mr-8 h-auto">
            <p class="text-lg md:text-2xl py-12 md:h-96 md:py-96 leading-8 md:leading-10 text-center py-12 flex flex-row items-center">In the Spring of 2009, several students of UCSD’s Jacobs School of Engineering felt that there was a lack of engineering representation in the Greek community on campus. So, thirteen founding fathers took the first step towards establishing a chapter of the nation’s oldest and largest professional engineering fraternity on the UCSD campus. On November 20th, 2010, UCSD was installed as the Epsilon Delta Chapter of Theta Tau.</p>
          </div>
          <div class="bg-biggrass bg-cover bg-bottom w-full h-96 py-96 md:h-auto md:w-1/2 md:rounded-l-xl"></div>
        </div>
        <div class="grow border-2 border-red-800"></div>
      </div>

      {/* our pillars */}
      <div class="flex flex-col w-screen items-center">
        <h1 class="text-5xl px-10 text-red-800">Our Pillars</h1>
        <div class="grow border w-36 border-red-800 my-10"></div>
        <div class="flex flex-col items-center md:flex-row pb-12 mx-12">
          <div class="flex flex-col items-center pt-8 w-full md:w-1/3">
            <h1 class="text-4xl px-10 text-red-800">Brotherhood</h1>
            <div class="border w-36 border-red-800 my-5"></div>
            <p class="text-lg leading-9 text-center px-12 italic">We strive to develop bonds between our brothers that will last a lifetime.</p>
            <div class="bg-handshake bg-cover bg-bottom h-44 w-44"></div>
          </div>
          <div class="flex flex-col items-center pt-8 w-full md:w-1/3">
            <h1 class="text-4xl px-10 text-red-800">Philanthrophy</h1>
            <div class="border w-36 border-red-800 my-5"></div>
            <p class="text-lg leading-9 text-center px-12 italic">We are involved in projects that give back to the community around us.</p>
            <div class="bg-heart bg-cover bg-bottom h-44 w-44"></div>
          </div>
          <div class="flex flex-col items-center pt-8 w-full md:w-1/3">
            <h1 class="text-4xl px-10 text-red-800">Professionalism</h1>
            <div class="grow border w-36 border-red-800 my-5"></div>
            <p class="text-lg leading-9 text-center px-12 italic">We seek to shape one's professional interests to prepare them for their life ahead of college.</p>
            <div class="bg-handshake bg-cover bg-bottom h-44 w-44"></div>
          </div>
        </div>
      </div>


      <RedFooter />
    </div>
  );
};

export default About;
