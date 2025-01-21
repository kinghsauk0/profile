export interface ProjectData {
  projectName: string;
  projectLink: string;
  usedTach: string[];
  projectDes: string;
  imagePaths: string[];
}

const projects: ProjectData[] = [
  {
    projectName: "openwheniamgone",
    projectLink: "https://app.openwheniamgone.com",
    usedTach: ["Next js","Nest js", "Mysql","Aws",],
    projectDes:
      "OpenIAMGone is more than just a storage platform—it’s a way to preserve your legacy. With advanced security measures, seamless file management, and intuitive tools for capturing life’s most precious moments, the platform empowers users to create a lasting digital archive that can be cherished and shared with future generations.\n\nWhether it’s preserving your personal memories, creating a meaningful archive for your family, or securely safeguarding important documents, OpenIAMGone offers the perfect solution for ensuring your legacy is protected and easily accessible.",
    imagePaths: [
      "/project-image/screenshot-4.png",
      "/project-image/screenshot.png",
      "/project-image/screenshot-2.png",
      "/project-image/screenshot-3.png",
    ],
  },
  {
    projectName: "E-com Project",
    projectLink: "https://exclusive3000.vercel.app/",
    projectDes: "This project is a modern e-commerce platform built with a focus on user experience, scalability, and efficient functionality. It provides a seamless shopping experience for users, enabling them to browse, search, and purchase products with ease.",
    usedTach: [],
   imagePaths: [
    "/project-image/ecom-1.png",
    "/project-image/ecom-2.png",
    "/project-image/ecom-3.png",
    "/project-image/ecom-4.png",
   ]
    
  },
  
];

export default projects;
