"use client";

import * as motion from "motion/react-client";
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { PiReadCvLogoBold } from 'react-icons/pi'

function SideButton() {

    const handleDownload = () => {
        const fileUrl = "/Kingshuk Mondal.pdf"; // Path to the file in the public folder
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Kingshuk Mondal.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up
      };
    
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2">
       <a
         href="https://www.linkedin.com/in/kingshuk-mondal-965184285"
         target="_blank"
         rel="noopener noreferrer" 
       >
       <motion.div
       initial={{ width: 65 }} // Set the initial width
       whileHover={{
         width: 130,
         borderTopRightRadius: "8px", 
         borderBottomRightRadius: "8px", 
       }}
      
       transition={{
         type: "spring",
         stiffness: 100,
         damping: 25,
       }}
       className="bg-[#00FF00] p-4 rounded-tr-lg overflow-hidden flex items-center justify-center"
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
       initial={{ width: 65 }} // Set the initial width
       whileHover={{
         width: 130,
         borderTopRightRadius: "8px", 
         borderBottomRightRadius: "8px", 
       }}
       transition={{
         type: "spring",
         stiffness: 100,
         damping: 25,
       }}
       className="bg-[#00FF00] p-4 overflow-hidden flex items-center justify-center"
     >
       <FaGithub size={30} />
     </motion.div>
    </a>
     
    <a  href="mailto:kingshukmondal012345@gmail.com?subject=Compose%20Email&body=Hi,%20I'd%20like%20to%20connect%20with%20you.">
    <motion.div
       initial={{ width: 65 }}
       whileHover={{
         width: 130,
         borderTopRightRadius: "8px", 
         borderBottomRightRadius: "8px", 
       }}
       transition={{
         type: "spring",
         stiffness: 100,
         damping: 25,
       }}
       className="bg-[#00FF00] flex items-center justify-center  p-4 overflow-hidden"
     >
       <MdEmail size={30} />
     </motion.div>
    </a>
     
   
     <motion.div
     onClick={handleDownload}
       initial={{ width: 65 }} 
       whileHover={{
         width: 130, 
         borderTopRightRadius: "8px", 
         borderBottomRightRadius: "8px", 
       }}
       transition={{
         type: "spring",
         stiffness: 100,
         damping: 25,
       }}
       className="bg-[#00FF00] flex items-center justify-center p-4 rounded-br-lg overflow-hidden"
     >
       <PiReadCvLogoBold size={30} />
     </motion.div>
   </div>
  )
}

export default SideButton