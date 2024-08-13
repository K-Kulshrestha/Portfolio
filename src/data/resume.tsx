import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import nursenav from "@/images/NurseNavThumbnail.jpg"

export const DATA = {
  name: "Kshitij Kulshrestha",
  initials: "KK",
  url: "https://kshitij.io",
  location: "Dallas, TX",
  locationLink: "https://www.google.com/maps/place/dallas",
  description:
    "Software Engineer. I love growing communities and building projects. Very active on VS Code and Discord",
  summary:
    "My journey started in high school with FRC Robotics, sparking my interest in tech. In college, I dove into web development through [hackathons](#hackathons), which led me to UX design. As a [Software Engineer Intern at TuneTunnel](#work), I honed my skills, and now I continue this journey at Headstarter. At the [University of Texas at Dallas](#education), [I lead a team of 17 officers as Vice President of the User Experience Club](#experience), driving innovative [projects](#projects) that blend creativity with technical expertise.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Firebase",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,
        navbar: true,
      },
      discord: {
        name: "Discord",
        url: "https://discordapp.com/users/360440853430534154",
        icon: Icons.discord,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kshitijkuls6@gmail.com",
        icon: Icons.email,
        navbar: false,
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
      organization: "Headstarter AI",
      href: "https://uxutd.com/",
      role: "SWE Fellow",
      logoUrl: "/headstarter.jpg",
      start: "May 2017",
      end: "August 2017",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      organization: "User Experience Club",
      href: "https://uxutd.com/",
      role: "Vice President",
      logoUrl: "/uxutd.jpg",
      start: "May 2017",
      end: "August 2017",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      organization: "ACM UTD",
      href: "https://uxutd.com/",
      role: "Student Researcher",
      logoUrl: "/acmutd.jpg",
      start: "May 2017",
      end: "August 2017",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      organization: "SASE",
      href: "https://uxutd.com/",
      role: "Professional Committee Officer",
      logoUrl: "/sase.jpg",
      start: "May 2017",
      end: "August 2017",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      organization: "Bronc Botz",
      href: "https://uxutd.com/",
      role: "Mentor",
      logoUrl: "/broncbotz.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    }
  ],
  projects: [
    {
      title: "NurseNav",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackUTD X",
      dates: "November 23rd - 25th, 2018",
      location: "Dallas, Texas",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Axxess Hackathon : First Iteration",
      dates: "November 23rd - 25th, 2018",
      location: "Dallas, Texas",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Engagment Representative",
      dates: "October 29, 2016",
      location: "Dallas, Texas",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
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
