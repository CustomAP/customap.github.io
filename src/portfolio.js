/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashish Pawar",
  title: "Hi, I'm Ashish",
  subTitle: emoji(
    "A skilled software engineer with an expertise in creating scalable software and AI-enhanced solutions across data-driven and cloud applications."
  ),
  image: require("./assets/images/headshot.jpg"),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pawar-ashish/",
  linkedin: "https://www.linkedin.com/in/ashish-a-pawar/",
  gmail: "ashishpawar2015.ap@gmail.com",
  medium: "https://medium.com/@pawar-ashish",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Palantir Technologies",
      companylogo: require("./assets/images/pltr-lg.png"),
      date: "May 2024 – Present",
      desc: "I worked on the Application Frameworks team, building common frameworks for other applications and played a key role in the effort of enhancing interoperability between Palantir Gotham and Palantir Foundry."
    },
    {
      role: "Software Engineer",
      company: "WHOOP",
      companylogo: require("./assets/images/whoopLogo.jpg"),
      date: "July 2023 – Jan 2024",
      desc: "I worked on the Notification Center, delivering personalized user updates. I also created the Year in Review 2023 feature to highlight personalized fitness achievements and expanded API functionality to improve third-party integrations."
    },
    {
      role: "Software Engineer",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/goldman_sachs_logo.jpg"),
      date: "July 2020 – June 2022",
      desc: "I played a pivotal role in transforming the Securitized Derivatives and Structured Products teams by developing high-performance solutions such as an RFQ system, streamlining document approvals, and implementing automated settlement processes."
    }
    // {
    //   role: "Co-Founder",
    //   company: "Pune Startup Fest",
    //   companylogo: require("./assets/images/psflogo.jpeg"),
    //   date: "July 2020 – June 2022",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Impactful Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/mospi.jpg"),
      projectName: "Ministry of Statistics and Programme Implementation",
      projectDesc:
        "I developed a data collection system for the Consumer Price Index (CPI) at the Ministry of Statistics and Programme Implementation, which is now used by the Government of India for critical financial discussions and inflation calculations.",
      footerLink: [
        {
          name: "Government Blog",
          url: "https://blog.mygov.in/sneak-peak-ministry-of-statistics-and-programme-implementation-mospi/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/moodle.webp"),
      projectName: "Moodle Export Quiz",
      projectDesc:
        "I built the Export Quiz plugin for Moodle that can export quizzes in any given format, currently used by over 200 schools and colleges worldwide, automating the reporting flow to save faculty time.",
      footerLink: [
        {
          name: "Plugin Explorer",
          url: "https://moodle.org/plugins/block_export_quiz/"
        }
      ]
    },
    {
      image: require("./assets/images/devutils.png"),
      projectName: "Dev Utilities",
      projectDesc:
        "I am the lead developer of Dev Utilities, an open-source VS Code extension that enhances development workflows by providing a variety of utilities directly within the code editor, all while ensuring data privacy with local processing.",
      footerLink: [
        {
          name: "VS Code Marketplace",
          url: "https://marketplace.visualstudio.com/items?itemName=AshishPawar.dev-utilities"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements"),
  subtitle: "",

  achievementsCards: [
    {
      title: "Khoury Research Apprenticeship",
      subtitle:
        "I was awarded the prestigious Khoury Research Apprenticeship, with an acceptance rate of less than 1%, and received a scholarship covering full tuition for my research work.",
      image: require("./assets/images/khoury.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Apprenticeship Info",
          url: "https://www.khoury.northeastern.edu/information-for-overview/current-masters-and-certificate-students/khoury-research-apprenticeship/"
        }
      ]
    },
    {
      title: "Co-Founded Pune Startup Fest",
      subtitle:
        "I co-founded Pune Startup Fest which attracts over 15,000 attendees, features 100+ startups, and hosts 20+ expert speakers every year to foster innovation and entrepreneurship in Pune's startup ecosystem.",
      image: require("./assets/images/psf_logo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Fest Info",
          url: "https://www.punestartupfest.in/"
        }
      ]
    },

    {
      title: "Pune Mirror Feature",
      subtitle:
        "I was featured in Pune Mirror and India Times newspaper as a young and enthusiastic application developer at the age of 19, highlighting my innovation and contributions to the community.",
      image: require("./assets/images/pune_mirror.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Article",
          url: "https://drive.google.com/file/d/1Az47vmMPrSVFy3-U0MfUXTNcY1D1n7xk/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle: "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://arxiv.org/abs/2111.04930",
      title: "Arxiv",
      image: require("./assets/images/arxiv.png"),
      description:
        "Optimizing Bayesian acquisition functions in Gaussian Processes"
    },
    {
      url: "https://arxiv.org/abs/2111.02604",
      title: "Arxiv",
      image: require("./assets/images/arxiv.png"),
      description: "Auto Tuning of Hadoop and Spark parameters"
    },
    {
      url: "https://arxiv.org/abs/2405.01604",
      title: "Arxiv",
      image: require("./assets/images/arxiv.png"),
      description: "Portfolio Management using Deep Reinforcement Learning"
    },
    {
      url: "https://www.datasciencecentral.com/best-practices-for-structuring-large-datasets-in-retrieval-augmented-generation-rag/",
      title: "Data Science Central",
      image: require("./assets/images/data_science_central.png"),
      description:
        "Best practices for structuring large datasets in Retrieval-Augmented Generation (RAG)"
    },
    {
      url: "https://medium.com/@pawar-ashish/oncreate-vs-onstart-in-android-in-depth-analysis-6b27661958d0",
      title: "Medium",
      image: require("./assets/images/medium.png"),
      description: "onCreate() vs onStart() in Android: In-depth analysis"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks & Judging",
  subtitle: emoji(""),

  talks: [
    {
      title: "Khoury Research Apprentice Showcase",
      subtitle: "Talk",
      image: require("./assets/images/khoury.png"),
      slides_url: "https://bit.ly/saadpasta-slides",
      button_title: "Press Release",
      event_url:
        "https://www.khoury.northeastern.edu/inside-the-spring-2024-khoury-research-apprenticeship-showcase/#Pawar"
    },
    {
      title: "Hack OHI/O",
      subtitle: "Hackathon Judge",
      image: require("./assets/images/hackohio.png"),
      slides_url: "https://bit.ly/saadpasta-slides",
      button_title: "Hackathon Info",
      event_url: "https://hack.osu.edu/hack12/"
    },
    {
      title: "AI/ATL @ Georgia Tech",
      subtitle: "Hackathon Judge",
      image: require("./assets/images/ai_atl.avif"),
      slides_url: "https://bit.ly/saadpasta-slides",
      button_title: "Hackathon Info",
      event_url: "https://www.aiatl.io/"
    },
    {
      title: "International Journal of Intelligent Information Technologies",
      subtitle: "Editorial Review Board",
      image: require("./assets/images/ijiit.jpeg"),
      slides_url: "https://bit.ly/saadpasta-slides",
      button_title: "Journal Info",
      event_url:
        "https://www.igi-global.com/journals/open-access/reviewers/international-journal-intelligent-information-technologies/1089"
    },
    {
      title: "Hack This Fall",
      subtitle: "Hackathon Judge",
      image: require("./assets/images/hackthisfall.jpg"),
      slides_url: "https://bit.ly/saadpasta-slides",
      button_title: "Hackathon Info",
      event_url: "https://hackathon.hackthisfall.tech/virtual"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
