import covid from "../../Assets/ProjectsImg/Covid-19-Tracker.jpg";
import got from "../../Assets/ProjectsImg/GOT.jpg";
import netflix from "../../Assets/ProjectsImg/Netflix.jpg";
import twitter from "../../Assets/ProjectsImg/Twitter.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Covid-19 Tracker ",
    projectDesc:
      "A single page app which shows the no of covid cases, made using React js.",
    tags: ["React", "Material UI"],
    code: "https://github.com/siddharthkanna/Covid-19-Tracker",
    demo: "https://covid-19-tracker-7e954.web.app/",
    image: covid,
  },
  {
    id: 2,
    projectName: "Netflix Clone",
    projectDesc:
      "This is a clone of Netflix website built using React.JS as a Front-end & Firebase as Back-end.",
    tags: ["React", "Firebase", "Material Ui"],
    code: "https://github.com/siddharthkanna/netflix-clone",
    demo: "https://netflix-clone-71a66.web.app/",
    image: netflix,
  },
  {
    id: 3,
    projectName: "GotWiki",
    projectDesc:
      "A simple and basic React app which shows the basic info of the show 'Game of thrones'.Made by a GOT stan.",
    tags: ["Reactjs", "React Bootstrap", "Material Ui"],
    code: "https://github.com/siddharthkanna/gotwiki",
    demo: "https://got-wiki.web.app/",
    image: got,
  },
  {
    id: 4,
    projectName: "TwitterBot",
    projectDesc: "A Simple TwitterBot which likes and retweets.",
    tags: ["Python", "tweepy"],
    code: "https://github.com/siddharthkanna/TwitterBot-LikesAndRetweets",
    demo: "",
    image: twitter,
  },
];
