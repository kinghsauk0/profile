"use client";

import React, { useEffect, useRef, useState } from "react";
import SideButton from "./SideButton";
import * as motion from "motion/react-client";
import { FaChevronDown } from "react-icons/fa";
import projects from "@/data/data";
import { InputText } from "primereact/inputtext";
import { Card } from "@/components/ui/card";
import { tach } from "@/data/tach";
import { InputTextarea } from "primereact/inputtextarea";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog } from "primereact/dialog";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

function Main() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const toast = useRef<Toast>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const colorClassMap: { [key: string]: string } = {
    "yellow-700": "shadow-yellow-700",
    "blue-700": "shadow-blue-700",
    "blue-900": "shadow-blue-900",
    "yellow-400": "shadow-yellow-400",
    "green-900": "shadow-green-900",
    "pink-700": "shadow-pink-700",
    "purple-600": "shadow-purple-600",
    black: "shadow-gray-200",
  };

  const handleSendMessage = () => {
    if (name !== "" && email !== "" && textAreaValue !== "") {
      toast?.current?.show({
        severity: "success",
        summary: "Message sand to Kingshuk Mondal",
        detail: "Message Content",
        life: 3000,
      });

      setEmail("");
      setName("");
      setTextAreaValue("");
    } else {
      toast?.current?.show({
        severity: "error",
        summary: "Fill the all fields !",
        detail: "Message Content",
        life: 3000,
      });
    }
  };

  return (
    <main className="w-full text-white h-screen overflow-y-auto pt-[80px]">
      <SideButton />
      {/* Home Section */}
      <section
        className="h-screen flex flex-col items-center justify-center px-4 md:px-0"
        id="home"
      >
        <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-6 md:gap-4">
          {/* Text Section */}
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-pink-700 mb-4">
                I'm{" "}
                <motion.span
                  animate={{}}
                  className="text-4xl md:text-6xl font-bold text-white"
                >
                  Kingshuk Mondal
                </motion.span>
              </h1>
              <div className="mb-4">
                <span className="py-2 px-4 text-2xl md:text-3xl font-bold text-[#00FF00] bg-purple-950/50">
                  Full Stack Developer
                </span>
              </div>
              <p className="text-lg md:text-2xl mb-6">
                A passionate Full Stack Software Developer 🚀 having experience
                of building Web and Mobile applications with{" "}
                <span className="text-lg md:text-2xl text-pink-700">
                  JavaScript
                </span>{" "}
                <span className="text-white text-lg md:text-2xl">/</span>{" "}
                <span className="text-lg md:text-2xl text-pink-700">
                  Next.js
                </span>{" "}
                <span className="text-white text-lg md:text-2xl">/</span>{" "}
                <span className="text-lg md:text-2xl text-pink-700">
                  React Native
                </span>{" "}
                /
                <span className="text-lg md:text-2xl text-pink-700">
                  {" "}
                  Node.js
                </span>{" "}
                and some other cool libraries and frameworks.
              </p>
              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                href="#about"
                className="py-2 px-4 bg-[#00FF00] text-white rounded-md flex justify-center items-center gap-2 w-[150px] mx-auto md:mx-0"
              >
                About me <FaChevronDown />
              </motion.a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] flex justify-center items-center mt-4 md:mt-0">
            <motion.img
              animate={{
                rotateY: isHovered ? 180 : 0,
                scale: isHovered ? 0 : 1,
              }}
              className="w-[300px] h-[400px] md:w-[350px] md:h-[500px] rounded-xl shadow-[0px_0px_10px_4px_white,0px_0px_20px_8px_pink] transition-all duration-500"
              src="/king.webp"
              alt="Dynamic Image"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="h-auto md:h-screen flex flex-col items-center justify-center px-4 md:px-0 py-8"
        id="about"
      >
        <div className="w-full md:w-[60%]">
          <div>
            <h3 className="text-4xl md:text-6xl text-pink-700 text-center md:text-left">
              About me
            </h3>
            <div className="h-2 w-full bg-purple-950/50 my-4" />
          </div>
          <div>
            <p className="text-lg md:text-2xl text-center md:text-left">
              I am a seasoned full-stack developer with over five years of
              experience, specializing in web development. My expertise spans
              across the entire development lifecycle, from conceptualization
              and design to implementation and deployment. With a strong
              foundation in both front-end and back-end technologies, I have a
              proven track record of building high-quality, user-friendly web
              applications.
            </p>
            <p className="text-lg md:text-2xl text-center md:text-left mt-6">
              Thanks to my creativity, my attention to detail and my
              determination, I realized that I have a great talent for
              developing Mobile applications. I am fascinated by this great
              world of technologies and possibilities, and I am sure that I will
              be able to create incredible projects both professionally and
              personally with you.
            </p>
          </div>
          <div className="flex justify-center md:justify-start mt-8">
            <motion.a
              whileHover={{
                scale: 1.2,
              }}
              href="#projects"
              className="py-2 px-4 bg-[#00FF00] text-white rounded-md flex items-center gap-2 w-[150px]"
            >
              See more <FaChevronDown />
            </motion.a>
          </div>
        </div>
        <a href="#projects">
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className=" flex flex-col justify-center items-end mt-24"
          >
            <FaChevronDown size={50} className=" text-[#00FF00]" />
          </motion.div>
        </a>
      </section>

      {/* Other Sections */}
      <section
        className="h-auto md:h-auto flex flex-col items-center justify-center px-4 md:px-0 py-8"
        id="projects"
      >
        <div className="w-full md:w-[60%]">
          <h3 className="text-4xl md:text-6xl text-pink-700 text-center md:text-left">
            Projects
          </h3>
          <div className="h-2 w-full bg-purple-950/50 my-4" />
          <p className=" text-lg text-white">Check out some of my work here</p>

          <div className="w-full flex flex-col flex-wrap  gap-4 md:flex-row justify-between mt-24">
            {projects.map((ele, i) => (
              <Card
                className="md:w-[45%] w-[100%] justify-between h-[400px] md:h-[500px]  flex flex-col bg-transparent p-4 shadow-[0px_0px_10px_4px_rgba(128,0,128,0.5),0px_0px_20px_8px_rgba(255,20,147,0.6)]"
                key={i}
              >
                <div>
                  <div className="mb-2  text-center">
                    <span className=" text-2xl  text-pink-700">
                      {ele.projectName}
                    </span>
                  </div>
                  <Carousel
                    plugins={[Autoplay({ delay: 2000 })]}
                    className="w-full   relative"
                  >
                    <CarouselContent>
                      {ele.imagePaths.map((e, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img
                              key={index}
                              src={e}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                <div className=" flex flex-row w-full gap-4">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 1.1 }}
                    onClick={() => setSelectedProject(i)}
                    className=" text-white h w-[50%]  rounded-md bg-[#00FF00] h-16"
                  >
                    Description
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                    className="text-white w-[50%] flex justify-center items-center rounded-md bg-blue-700 h-16"
                    href={ele.projectLink}
                  >
                    <button className=" text-white w-[50%] rounded-md bg-blue-700 h-16">
                      Link
                    </button>
                  </motion.a>
                </div>
                <Dialog
                  
                  visible={selectedProject === i}
                  className="md:w-[50vw] w-[90%] text-2xl bg-transparent border-2 border-white p-10 rounded-md"
                  onHide={() => setSelectedProject(null)}
                >
                  <p className="m-0 text-[#00FF00]">{ele.projectDes}</p>
                </Dialog>
              </Card>
            ))}
          </div>
        </div>
        <a href="#technologies">
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className=" flex flex-col justify-center items-end mt-24"
          >
            <FaChevronDown size={50} className=" text-[#00FF00]" />
          </motion.div>
        </a>
      </section>

      <section
        className="h-auto md:h-screen flex flex-col items-center justify-center px-4 md:px-0 py-8"
        id="technologies"
      >
        <div className="w-full flex flex-col md:w-[60%]">
          <h3 className="text-4xl md:text-6xl text-pink-700 text-center md:text-left">
            Technologies
          </h3>
          <div className="h-2 w-full bg-purple-950/50 my-4" />
          <p className=" text-lg text-white">
            These are the technologies I've worked with
          </p>
          <div className="w-full flex flex-row flex-wrap justify-between gap-8 mt-10">
            {tach.map((ele, i) => (
              <motion.div
                whileTap={{ rotateX: 180, scale: 1.2 }}
                whileHover={{ rotateX: 180, scale: 1.2 }}
                key={i}
              >
                <Card
                  className={`bg-translate text-center flex p-4 flex-col gap-2 shadow-lg ${
                    colorClassMap[ele.color] || "shadow-red-500"
                  }`}
                >
                  <img className="w-[100px] h-[100px]" src={ele.image} />
                  <p className="py-2 px-4 bg-purple-950/50 text-white">
                    {ele.name}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <a href="#contact">
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className=" flex flex-col justify-center items-end mt-24"
          >
            <FaChevronDown size={50} className=" text-[#00FF00]" />
          </motion.div>
        </a>
      </section>

      <section
        className="h-auto md:h-screen flex flex-col items-center justify-center px-4 md:px-0 py-8"
        id="contact"
      >
        <div className="w-full md:w-[60%] ">
          <h3 className="text-4xl md:text-6xl text-pink-700 text-center md:text-left">
            Contact
          </h3>
          <div className="h-2 w-full bg-purple-950/50 my-4 " />
          <p className=" text-lg text-white">
            Submit the from below to get in touch with me
          </p>
          <div className=" w-full justify-center items-center  flex flex-col gap-4 mt-16">
            <InputText
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="p-inputtext-lg w-full md:w-[45%] h-[3rem] px-4 rounded-md bg-transparent border-[2px] border-pink-700"
              placeholder="Enter your name"
            />
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="p-inputtext-lg w-full md:w-[45%] h-[3rem] px-4 rounded-md bg-transparent border-[2px] border-pink-700"
              placeholder="Enter your email"
            />
            <InputTextarea
              className="md:w-[45%] w-full bg-transparent border-[2px] border-pink-700 mt-16 px-4 pt-4"
              placeholder="Enter your message"
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)}
              rows={10}
              cols={30}
            />
          </div>
          <div className=" w-full flex flex-col justify-center items-center mt-4">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 1.1 }}
              onClick={handleSendMessage}
              className=" text-white   rounded-md bg-[#00FF00] px-4 py-2"
            >
              Let's talk
            </motion.button>
            <Toast ref={toast} position="bottom-center" />
          </div>
        </div>
      </section>
      <footer className="h-[200px] flex items-center justify-center">
        <div className=" w-[80%] flex flex-row justify-between items-center">
          <div>kingshukmonal012345@gmail.com</div>
          <div>• Copyright ©2025 | All rights reserved •</div>
          <div className=" flex flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/kingshuk-mondal-965184285"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
                className=" p-4 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <FaLinkedin size={30} />
              </motion.div>
            </a>

            <a
              href="https://github.com/kinghsauk0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
                className=" rounded-lg p-4 overflow-hidden flex items-center justify-center"
              >
                <FaGithub size={30} />
              </motion.div>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Main;
