import portfolio from "../assets/projectsImg/portfolio.png";
import blackJackGame from "../assets/projectsImg/blackJackGame.png";
import pokemongenerator from "../assets/projectsImg/pokemonGenerator.png";
import pennywiser from "../assets/projectsImg/pennyWiser.png";
import videotube from "../assets/projectsImg/videoTube.png";
import nqueenvisulaiser from "../assets/projectsImg/nqueen.png";
import leetsheet from "../assets/projectsImg/leetSheet.png";
import multipligame from "../assets/projectsImg/multipliGame.png";

// import pokeGames from "../assets/projectsImg/pokeGames.webp";

export const PROJECTS = [
  {
    img: videotube, // Replace with actual image URL
    liveLink: "https://my-ytclone.netlify.app/",
    gitHubTrue: true,
    gitHubLink: "https://github.com/Abhisheksingh734/my-youtubeClone",
    title: "VideoTube",
    desc: "A video platform with YouTube Live API Integration.",
    techs: ["React", "TailwindCSS", "ReduxToolkit"],
  },
  {
    img: pennywiser, // Replace with actual image URL
    liveLink: "https://pennywiser.netlify.app/",
    gitHubTrue: true,
    gitHubLink: "https://github.com/Abhisheksingh734/pennywise",
    title: "PennyWiser",
    desc: "A web application to manage and track spending efficiently.",
    techs: ["React", "Firebase", "TailwindCSS", "Ant Design"],
  },
  {
    img: pokemongenerator, // Replace with actual image URL
    liveLink: "https://my-pokemongenerator.netlify.app/",
    gitHubTrue: true,
    gitHubLink: "https://github.com/Abhisheksingh734/PokemonGenerator",
    title: "Pokemon Generator",
    desc: "A web app for searching and viewing Pokemon information.",
    techs: ["React", "TailwindCSS", "Parcel"],
  },
  {
    img: nqueenvisulaiser, // Replace with actual image URL
    liveLink: "https://my-nqueenvisualizer.netlify.app/",
    gitHubTrue: true,
    gitHubLink: "https://github.com/Abhisheksingh734/N-Queen-Visualizer",
    title: "N-Queen Visualizer",
    desc: "A tool to visualize N-Queen solutions using backtracking algorithms.",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: leetsheet, // Replace with actual image URL
    liveLink: "https://company-wise-leetsheet.vercel.app/",
    gitHubTrue: true,
    gitHubLink:
      "https://github.com/Abhisheksingh734/Company-Wise-Leetcode-Questions",
    title: "LeetSheet",
    desc: "A tool to browse company-specific LeetCode questions efficiently.",
    techs: ["React", "TailwindCSS"],
  },
  {
    img: multipligame, // Replace with actual image URL
    liveLink: "https://my-multiplicationscoreadder.netlify.app/",
    gitHubTrue: true,
    gitHubLink:
      "https://github.com/Abhisheksingh734/Multiplication-Quiz-ScoreStorage",
    title: "MultipliScore Game",
    desc: "A fun web app for practicing multiplication and tracking scores.",
    techs: ["JavaScript", "HTML", "CSS"],
  },
  {
    img: portfolio,
    liveLink: "https://supermoooo.github.io/MyPortfolio/",
    gitHubTrue: true,
    gitHubLink: "https://github.com/SuperMoooo/MyPortfolio",
    title: "My Portfolio",
    desc: "The site you are on right now",
    techs: ["React", "TailwindCSS"],
  },
  {
    img: blackJackGame,
    liveLink: "https://supermoooo.github.io/blackJackGame/",
    gitHubTrue: true,
    gitHubLink: "https://github.com/SuperMoooo/blackJackGame",
    title: "BlackJack Game",
    desc: "BlackJack game with infinite money and no split cards",
    techs: ["HTML", "CSS", "JavaScript"],
  },
];
