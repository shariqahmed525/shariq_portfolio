/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import { SiJavascript, SiChatwoot, SiExpress, SiNestjs, SiNodedotjs, SiTwilio } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { MdDeveloperMode } from 'react-icons/md';
import { BiLogoPostgresql, BiLogoGraphql, BiLogoFirebase, BiLogoMongodb, BiLogoAws } from 'react-icons/bi';
import { FaCss3, FaReact, FaSass, FaStripe } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shariq Ahmed",
  title: "Greetings, I am Shariq",
  subTitle: emoji(
    "A dedicated Full Stack Software Developer 🚀 with a strong track record in constructing the infrastructure for both Web and Mobile Applications. My expertise encompasses a wide array of technologies, including JavaScript, React, React Native, Next.JS, Node JS, Nest.JS, GraphQL, Firebase, TypeScript, MongoDB, AWS, and various other cutting-edge libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10NDXdvKfl4vYwbjiVPVa7819jZBqh1p5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shariqahmed525",
  linkedin: "https://www.linkedin.com/in/shariqahmed525/",
  gmail: "shariq.ahmed525@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10648973/shariq-ahmed",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "An enthusiastic Full Stack Developer with a strong passion for exploring diverse technology stacks",
  skills: [
    emoji(
      "⚡ Create exceptionally interactive front-end user interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications (PWAs) in both standard and Single Page Application (SPA) stacks."),
    emoji(
      "⚡ Seamless integration of third-party services including Firebase, AWS, Twilio, Stripe, Comet Chat, and many more."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML 5",
      icon: <AiOutlineHtml5 color="gray" size={50} />
    },
    {
      skillName: "CSS 3",
      icon: <FaCss3 color="gray" size={50} />
    },
    {
      skillName: "Sass",
      icon: <FaSass color="gray" size={50} />
    },
    {
      skillName: "Javascript",
      icon: <SiJavascript color="gray" size={50} />
    },
    {
      skillName: "React JS",
      icon: <FaReact color="gray" size={50} />
    },
    {
      skillName: "React Native",
      icon: <MdDeveloperMode color="gray" size={50} />
    },
    {
      skillName: "Next JS",
      icon: <TbBrandNextjs color="gray" size={50} />
    },
    {
      skillName: "Node JS",
      icon: <SiNodedotjs color="gray" size={50} />
    },
    {
      skillName: "Express JS",
      icon: <SiExpress color="gray" size={50} />
    },
    {
      skillName: "Nest JS",
      icon: <SiNestjs color="gray" size={50} />
    },
    {
      skillName: "Firebase",
      icon: <BiLogoFirebase color="gray" size={50} />
    },
    {
      skillName: "Postgress SQL",
      icon: <BiLogoPostgresql color="gray" size={50} />
    },
    {
      skillName: "Mongo DB",
      icon: <BiLogoMongodb color="gray" size={50} />
    },
    {
      skillName: "Graph QL",
      icon: <BiLogoGraphql color="gray" size={50} />
    },
    {
      skillName: "AWS",
      icon: <BiLogoAws color="gray" size={50} />
    },
    {
      skillName: "Comet Chat",
      icon: <SiChatwoot color="gray" size={50} />
    },
    {
      skillName: "Stripe",
      icon: <FaStripe color="gray" size={50} />
    },
    {
      skillName: "Twilio",
      icon: <SiTwilio color="gray" size={50} />
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      // logo: require("./assets/images/harvardLogo.png"),
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
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-end Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Code Structure",
      progressPercentage: "80%"
    },
    {
      Stack: "Infrastructure",
      progressPercentage: "40%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Systems Avenue",
      companylogo: require("./assets/images/systemsAvenue.webp"),
      date: "March 2019 – November 2019",
      desc: "At Systems Avenue, my main responsibility was on mobile development particularly in utilizing Firebase services to complete tasks effectively.",
    },
    {
      role: "Full Stack Developer",
      company: "Daily Cart",
      companylogo: require("./assets/images/dailycart.jpeg"),
      date: "January 2020 – April 2021",
      desc: "In Daily Cart, my primary focus is on mobile development, but I also handle backend tasks when necessary to provide assistance."
    },
    {
      role: "CTO",
      company: "Dirideal",
      companylogo: require("./assets/images/dirideal.jpeg"),
      date: "June 2021 – June 2023",
      desc: "As a CTO, my primary responsibility was typically to provide technical leadership, set the technology strategy, and oversee the overall technology direction of the company. While have expertise in mobile application development I was working on mobile size, my also role was managing and guiding teams of developers."
    }
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
  title: "Portfolios",
  subtitle: "Contributions to Tech Development for Various Startups and Companies",
  projects: [
    {
      image: require("./assets/images/dirideal-logo.jpg"),
      projectName: "Dirideal",
      projectDesc: "It's a mobile app, A Second-hand Marketplace: The Leading Platform in Algeria for Effortless Selling, Safe Buying, and Promoting Sustainable Fashion Choices by Rejecting Fast Fashion.",
      footerLink: [
        {
          name: "View application",
          url: "https://play.google.com/store/apps/details?id=com.dirideal"
        }
      ]
    },
    {
      image: require("./assets/images/moertsch.webp"),
      projectName: "Moertsch",
      projectDesc: "It's a mobile app, Moertsch is global nightlife party planner. Discover events, create and share them with friends, and enjoy features like a personal calendar preview",
      footerLink: [
        {
          name: "View application",
          url: "https://apps.apple.com/de/app/moertsch/id1617860624"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dailycart-logo.jpg"),
      projectName: "Daily Cart",
      projectDesc: "It's a mobile app, Daily Cart is subscription-based e-grocery shopping app. Get all your daily essentials in one place, from breakfast to household items, delivered to your local area.",
      footerLink: [
        {
          name: "View application",
          url: "https://play.google.com/store/apps/details?id=com.dailycartapp&hl=en&gl=US"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/iagility.jpg"),
      projectName: "iAgility",
      projectDesc: "It's a web app, iAgility is an online consulting platform for future-proofing businesses. We connect businesses and independent talent, keeping them ahead of the curve..",
      footerLink: [
        {
          name: "View website",
          url: "https://iagility.com/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆 "),
  subtitle:
    "My Accomplishments, Certifications, Award Letters, and Noteworthy Achievements.",

  achievementsCards: [
    {
      title: "Udacity (React Nanodegree)",
      subtitle:
        "Successfully attained the React Nanodegree certification from Udacity, specializing in Web and Mobile App Development.",
      image: require("./assets/images/udacity.png"),
      imageAlt: "Udacity Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://graduation.udacity.com/confirm/YDYPUAYY"
        },
      ]
    },
    {
      title: "ACCP (Aptech Certified Computer Program)",
      subtitle:
        "Accomplished the ACCP Pro certification program from Aptech, focusing on application infrastructure, deployment, and programming",
      image: require("./assets/images/aptech.png"),
      imageAlt: "Aptech Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1G2au1thtPKqMQWv7smyzAyGaREOsaL2l/view?usp=sharing"
        }
      ]
    },
    {
      title: "PWA (Progressive Web App)",
      subtitle: "Accomplished the certification in PWA Web App Development, including expertise in Web push notification, from SMIT.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1Nh1GNVfMOe_Fs7mAzAongjOguEJZTmrJ/view?usp=sharing"
        },
        {
          name: "Project",
          url: "https://sa-classifiedapp.web.app/"
        }
      ]
    },
    {
      title: "SMIT (Web & Mobile App Developement)",
      subtitle: "Successfully completed the certification in Web and Mobile Application development, utilizing cutting-edge technologies, at SMIT",
      image: require("./assets/images/smit.webp"),
      imageAlt: "SMIT Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1iS5DLdigUaDo65ioujI4ymIZITS4Gp4O/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // Please Provide with Your Podcast embeded Link
  podcast: [
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Whether you'd like to engage in project-related discussions or simply wish to extend a greeting, please feel free to reach out. My inbox is open to all.",
  number: "+92-3032139848",
  email_address: "shariq.ahmed525@gmail.com"
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
  isHireable
};
