import { Project } from '@Types/Project.type';

export const project_list: Project[] = [
  {
    name: "My Website",
    icon: "/cat.jpg",
    desc: "My personal website. Made using Next.js, Three.js and Framer Motion.",
    github: "https://github.com/Andromeda08/Tsukiakari",
    link: "https://tsukiakari.studio",
    tech: [
      { name: "Typescript", icon: "/tech/typescript.svg", color: "typescript" },
      { name: "React", icon: "/tech/react.svg", color: "react" },
      { name: "SCSS", icon: "/tech/sass.svg", color: "scss" },
      { name: "WebGL", icon: "/tech/webgl.svg", color: "webgl" },
    ]
  },
  {
    name: "Shogi",
    icon: "/projects/shogi.webp",
    desc: "An implementation of Shogi, the Japanese variant of chess, written in Java.",
    github: "https://github.com/Andromeda08/Shogi",
    tech: [
      { name: "Java", icon: "/tech/java.svg", color: "java" }
    ]
  },
  {
    name: "Minesweeper",
    icon: "/projects/minesweeper.png",
    desc: "An implementation of the classic Minesweeper game for the command line, written in C.",
    github: "https://github.com/Andromeda08/Minesweeper",
    tech: [
      { name: "C", icon: "/tech/c.svg", color: "cpp" }
    ]
  }
];