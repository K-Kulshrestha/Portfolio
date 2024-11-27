import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Kshitij Kulshrestha",
  initials: "KK",
  url: "https://k-kulshrestha.vercel.app/",
  location: "Dallas, TX",
  locationLink: "https://www.google.com/maps/place/dallas",
  description:
    "Full-stack Developer. I love growing communities and building projects. Very active on VS Code and Discord",
  summary:
    "My journey started in high school with FRC Robotics, sparking my interest in tech. In college, I dove into web development through [hackathons](#hackathons), which led me to UX design. As a [Software Engineer Intern at TuneTunnel](#work), I honed my skills, and now I continue this journey at Headstarter. At the [University of Texas at Dallas](#education), [I lead a team of 17 officers as Vice President of the User Experience Club](#experience), driving innovative [projects](#projects) that blend creativity with technical expertise.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Go",
    "R",
    "Java",
    "C++",
    "C",
    "Bootstrap",
    "jQuery",
    "Angular",
    "OpenCV",
    "Django",
    "Flask",
    "Tailwind",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "SQL",
    "Firebase",
    "MongoDB",
    "AWS",
    "Google Cloud",
    "Google Analytics",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kshitijkuls6@gmail.com",
    tel: "+18482035522",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/K-Kulshrestha",
        icon: Icons.github,
        navbar: true,
        target: "_blank",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kshitijkulshrestha/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discordapp.com/users/360440853430534154",
        icon: Icons.Discord,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:kshitijkuls6@gmail.com",
        icon: Icons.Email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "TuneTunnel",
      href: "https://tunetunnel.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/TuneTunnel.jpg",
      start: "June 2024",
      end: "August 2024",
      description:
        "Boosted dashboard efficiency by 30% through a comprehensive approach involving query optimization, indexing, and server-side data aggregation. Enhanced frontend performance with asynchronous data loading, client-side caching, and asset minification. Improved user interface with streamlined layout and real-time feedback mechanisms.",
    },
    {
      company: "Rex K-12",
      badges: [],
      href: "https://www.rexk12.com/",
      location: "Dallas, TX",
      title: "Instructor",
      logoUrl: "/Rex.png",
      start: "May 2024",
      end: "July 2024",
      description:
        "Delivered a web design curriculum for middle school students covering HTML and CSS, guiding 20 students in Carroll ISD to create their own websites. Managed a class of 40 children (ages 5-12) at YMCA, teaching foundational programming through Scratch and Scratch Jr., resulting in a 20% increase in student participation. Recognized as a top-rated part-time instructor for exceptional teaching effectiveness and student engagement, achieving a 95% student satisfaction rate.",
    },
    {
      company: "University of Texas at Dallas",
      badges: [],
      href: "https://www.rexk12.com/",
      location: "Dallas, TX",
      title: "Engagement Representative",
      logoUrl: "/utd.png",
      start: "September 2022",
      end: "January 2023",
      description:
        "Harnessed exceptional interpersonal skills to forge lasting relationships with over 100 college alumni, raising $4k for UT Dallas scholarships and essential resources, while meticulously tracking engagement outcomes to enhance donor impact and student success.",
    },
  ],
  education: [
    {
      school: "University of Texas at Dallas",
      href: "https://www.utdallas.edu/",
      degree: "Bachelor's of Science in Computer Science",
      logoUrl: "/utd.png",
      start: "2021",
      end: "2025",
    },
  ],
  experience: [
    {
      organization: "User Experience Club",
      href: "https://uxutd.com/",
      role: "Vice President",
      logoUrl: "/uxutd.jpg",
      start: "October 2023",
      end: "Present",
      description:
        "Lead a team of 17 in organizing the inaugural design-a-thon for UX Club at UTD, driving member engagement and collaboration within a community of 630+ members and 50+ sponsors.",
    },
    {
      organization: "Headstarter AI",
      href: "https://headstarter.co/",
      role: "SWE Fellow",
      logoUrl: "/headstarter.jpg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Developed a personal website with NextJS, TypeScript, and React. Created a Pantry Tracker app using ReactJS, NextJS, and Firebase. Integrated AI customer support with OpenAI and AWS, enhancing user engagement. Managing shipments to 1,000+ users and delivering presentations to engineering teams.",
    },
    {
      organization: "SASE UTD",
      href: "https://www.instagram.com/sase.utd/",
      role: "Professional Committee Officer",
      logoUrl: "/sase.jpg",
      start: "July 2023",
      end: "June 2024",
      description:
        "Increased member engagement by 30%, secured industry partnerships, and launched a successful mentorship program, leading to a 15% rise in internship placements.",
    },
    {
      organization: "Bronc Botz",
      href: "https://www.broncbotz.org/",
      role: "Mentor",
      logoUrl: "/broncbotz.png",
      start: "May 2019",
      end: "July 2021",
      description:
        "Mentor for the FIRST Robotics Competition (FRC), leading a team to build a 125-pound robot, achieving a top 10% regional finish and completing over 30 complex tasks, while being recognized as a Dean's List Semifinalist for outstanding mentorship.",
    }
  ],
  projects: [
    {
      title: "Swift-Cards",
      href: "https://swift-cards.vercel.app/",
      target: "_blank",
      dates: "August 2024 - Ongoing",
      active: true,
      description:
        "Create, group, and store flashcards easily, with options to generate cards from prompts and choose flexible payment plans. Perfect for streamlined study and learning.",
      technologies: [
        "Next.js",
        "Firebase",
        "Clerk",
        "TailwindCSS",
        "Stripe",
        "Llama 3.1",
        "MUI",
        "Google Analytics"
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://swift-cards.vercel.app/",
          target: "_blank",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hemkan/swift-cards",
          target: "_blank",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "SwiftCards.jpg",
      video: "",
    },
    {
      title: "Gourmet Guide",
      href: "https://gourmetguide.vercel.app/",
      target: "_blank",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "A virtual kitchen companion that offers tailored recipe suggestions, meal planning, and shopping lists based on your preferences and ingredients.",
      technologies: [
        "Next.js",
        "Firebase",
        "TailwindCSS",
        "Stripe",
        "Llama 3.1",
        "MUI"
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://gourmetguide.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hemkan/gourmet-guide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "gourmetguide.jpg",
      video: "",
    },
    {
      title: "NomNomNet",
      href: "https://nomnomnet.vercel.app",
      dates: "June 2024 - Ongoing",
      active: true,
      description:
        "Track pantry ingredients, get personalized recipe suggestions, and reduce food waste by using what you already have.",
      technologies: [
        "Next.js",
        "Firebase",
        "React",
        "Node.js",
        "MUI",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://nomnomnet.vercel.app",
          target: "_blank",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/K-Kulshrestha/NomNomNet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/NomNomNet.jpg",
      video: "",
    },
    {
      title: "Nurse Nav",
      href: "https://github.com/SriNethala317/NurseNav",
      dates: "April 2023 - Ongoing",
      active: true,
      description:
        "Connects families with trusted local healthcare providers for children with special needs, ensuring access to the best care.",
      technologies: [
        "Python",
        "Flask",
        "MapBox",
        "MongoDB",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SriNethala317/NurseNav",
          target: "_blank",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "NurseNav.jpg",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "UXUTD Website",
      dates: "May - Ongoing",
      location: "Dallas, Texas",
      description:
        "Led the development and successful launch of our club's website, ensuring a seamless user experience and professional design.",
      image:
        "uxutd.jpg",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "Website",
          href: "https://uxutd.com/",
          icon: <Icons.globe className="size-3" />,
          target: "_blank",
        },
      ],
    },
    {
      title: "ACM Research : Feelings Behind Words",
      dates: "Feburary - May 2024",
      location: "Dallas, Texas",
      description:
        "Developed a multimodal model integrating BERT for sentiment analysis and ResNet for image classification, to analyze persuasive techniques.",
      image:
        "acmutd.jpg",
      links: [
        {
          title: "Poster",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "Feelings_Behind_Words.pdf",
          target: "_blank",
        },
      ],
    },
    {
      title: "Axxess Hackathon : Second Iteration",
      dates: "Feburary 17 - 18,2024",
      location: "Dallas, Texas",
      description:
        "Developed a React Native app to identify opioid overdose using camera detection to assess pupils in three simple steps.",
      image:
        "axxess.png",
      mlh: "",
      links: [
        {
          title: "Dev Post",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/od",
          target: "_blank",
        },
      ],
    },
    {
      title: "HackUTD X : Golden Hour",
      dates: "November 4 - 5,2023",
      location: "Dallas, Texas",
      description:
        "Created a dashboard to simplify and expedite the process of obtaining insurance quotes for small businesses.",
      image:
        "hackutd.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/K-Kulshrestha/PolicyPioneer",
          target: "_blank",
        },
      ],
    },
    {
      title: "Axxess Hackathon : First Iteration",
      dates: "April 1 - 2,2023",
      location: "Dallas, Texas",
      description:
        "Developed a web application to help families find reliable healthcare providers nearby for children with special needs.",
      image:
        "axxess.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const; 
