export default class DataService {
  _data = {
    projectRepo: "https://github.com/its-Saab/portfolio",
    react95Repo: "https://github.com/React95/React95",
    items: [
      {
        id: "about",
        name: "About.txt",
        image: require("./Icons/logo.png"),
        content: {
          paragraphs: ["blah", "blah", "blah", "blah", "blah"]
        }
      },
      {
        id: "resume",
        name: "Resume.txt",
        image: require("./Icons/logo.png"),
        content: {
          resumeLink:
            "https://drive.google.com/file/d/1DaAQXEdqn-UfbDfIEn7Spb_yozg0EnEA/view?usp=sharing",
          workExperience: [
            {
              jobTitle: "Civil Engineer",
              company: "B.B.",
              location: "Istanbul - Turkey",
              period: "Sep 2018 – Jan 2019",
              accomplishments: [
                "Steel structures desing",
                "Reviewed design and calculation to ensure European Standards"
              ]
            },
            {
              jobTitle: "Civil Engineer",
              company: "SFC",
              location: "Jeddah - Saudi Arabia",
              period: "Nov 2015 – May 2017",
              accomplishments: []
            },
            {
              jobTitle: "Civil Engineer",
              company: "HAACS",
              location: "Jeddah - Saudi Arabia",
              period: "Nov 2014 – Nov 2015",
              accomplishments: []
            }
          ],
          education: [
            {
              credit: "Software Development Academy",
              place: "KTH - Sweden",
              period: "Jan 2021 – Jun 2021"
            },
            {
              credit: "Bachelor in Civil Engineering",
              place: "AAU - Amman",
              gpa: "3.2/4.0 GPA",
              period: "SEPT 2008 – Jun 2014"
            }
          ]
        }
      },
      {
        id: "projects",
        name: "Projects.txt",
        image: require("./Icons/logo.png"),
        content: {
          projects: [
            {
              title: "Landing Page",
              description: "meow",
              myRole: "Frontend developer",
              techStack:
                "JavaScript, PostgreSQL, React, Java, firebase, webpack",
              repo: "https://github.com/its-Saab/LandingPage"
            },
            {
              title: "TODOLY",
              description:
                "ToDoLy is a command line tool to help users add/monitor daily tasks.",
              myRole: "",
              techStack: "Java,Gradle",
              repo: "https://github.com/its-Saab/TODO-List"
            },
            {
              title: "My Portfolio Site",
              description: "Portfolio using React95 library",
              techStack: "JavaScript, React, firebase, webpack",
              repo: "https://github.com/its-Saab/portfolio"
            }
          ]
        }
      },
      {
        id: "skills",
        name: "Skills.txt",
        image: require("./Icons/logo.png"),
        content: {
          hard: [
            {
              name: "JavaScript",
              img: require("./Icons/logo.png")
            },
            {
              name: "Java",
              img: require("./Icons/logo.png")
            },
            {
              name: "React",
              img: require("./Icons/logo.png")
            },
            {
              name: "Node.js",
              img: require("./Icons/logo.png")
            },

            {
              name: "Git",
              img: require("./Icons/logo.png")
            },
            {
              name: "MongoDB",
              img: require("./Icons/logo.png")
            },
            {
              name: "GraphQL/Apollo Client",
              img: require("./Icons/logo.png")
            },
            {
              name: "Next.js",
              img: require("./Icons/logo.png")
            }
          ],
          soft: "hfg"
        }
      },
      {
        id: "contact",
        name: "Contact.txt",
        image: require("./Icons/logo.png"),
        content: {
          emailText: "I'm available for hire, let's have a chat ",
          email: "musaababs@gmail.com",
          socialText: "Or you can reach me out through social media:",
          social: [
            {
              name: "FaLinkedin",
              link: "https://linkedin.com/in/mosaab-abbas"
            },
            {
              name: "FaGithub",
              link: "https://github.com/its-Saab"
            }
          ]
        }
      }
    ]
  };

  getItems() {
    return this._data.items.map(({ id, name, image }) => ({ id, name, image }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo
    };
  }
}
