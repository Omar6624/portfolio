export const career = [
  {
    title: "Software Engineer Intern",
    subtitle: "ADN Technologies",
    dateStart: "2024",
    dateEnd: "2024",
    duration: "3 Months",
    skills: ["Laravel", "PHP"],
  },
  {
    title: "Intern",
    subtitle: "Financial Reporting Council Bangladesh",
    dateStart: "2024",
    dateEnd: "2024",
    duration: "3 Months",
    skills: ["Javascript", "React"],
  },
  {
    title: "B.Sc in Computer Science and Engineering",
    subtitle: "Ahsanullah University of Science and Technology",
    dateStart: "2020",
    dateEnd: "2024",
    duration: "4 Years",
    skills: [
      "C++",
      "Java",
      "SQL",
      "Database",
      "Application Development",
      "OOP",
      "Algorithms",
    ],
  },
];

export const colors = {
  Laravel: "bg-red-500", // Laravel's official red
  PHP: "bg-indigo-600", // PHP's official purple-ish indigo
  JavaScript: "bg-yellow-400", // JS bright yellow
  Go: "bg-cyan-500", // Go's light cyan-blue
  Nodejs: "bg-green-600", // Node.js dark green
  MySql: "bg-teal-500", // MySQL teal
  Java: "bg-orange-600", // Java orange
  React: "bg-sky-400", // React cyan-sky blue
};

export const techStack: { bgcolor: string; label: ProjectKeys }[] = [
  { bgcolor: "#777BB4", label: "PHP" },
  { bgcolor: "#00ADD8", label: "Go" },
  { bgcolor: "#007396", label: "Java" },
  { bgcolor: "#dcc61c", label: "Javascript" },
];

const Go = [
  {
    name: "",
    link: "#",
    media: "",
    technology: ["Go"],
    description: [],
    type: "",
  },
];
const PHP = [
  {
    name: "Service Repair and Inventory Management Application",
    link: "#",
    media: "",
    technology: ["PHP", "Laravel", "Tailwind CSS"],
    description: [
      "Redesigned the UI to improve usability and aesthetics.",
      "Optimized backend queries, reducing page load time from 15s to 4.5s..",
      "Refactored code into modular, well-commented functions to improve clarity and maintainability.",
    ],
    type: "Professional",
  },
  {
    name: "Alap News Portal",
    link: "#",
    media: "",
    technology: ["PHP", "Laravel", "Tailwind CSS"],
    description: [
      "Built a sleek, dynamic news portal with a modern design.",
      "Updated the existing dashboard to integrate with the new portal with role-based authorization.",
    ],
    type: "Professional",
  },
  {
    name: "ADN Technology Website",
    link: "#",
    media: "",
    technology: ["PHP", "Laravel", "Tailwind CSS"],
    description: [
      "Revamped the static ADN Technology Website using Laravel and Tailwind CSS",
    ],
    type: "Professional",
  },
  {
    name: "ADNCS Website",
    link: "#",
    media: "#",
    technology: ["PHP", "Laravel"],
    description: [
      "Revamped the static ADNCS Website using Laravel and Tailwind CSS",
    ],
    type: "Professional",
  },
];
const Java = [
  {
    name: "BusBooking",
    link: "#",
    media: "",
    technology: ["Java", "Android Studio"],
    description: [
      "Designed the route selection  and seat selection pages for a ticketing platform's POS Application.",
      "Implemented dynamic seat layout configuration, seat booking, and route-based bus search functionalities.",
    ],
    type: "Professional",
  },
];
const Javascript = [
  {
    name: "Note Taking CLI",
    link: "https://link.com/Omar6624/note-taking-cli",
    media: "#",
    technology: ["JavaScript", "Nodejs"],
    description: [
      "A simple and efficient JavaScript CLI app to create, read, update, and delete notes directly from the terminal.",
    ],
    type: "Exploratory Project",
  },
  {
    name: "Music Player",
    link: "https://link.com/Omar6624/MusicPlayer",
    media: "",
    technology: ["JavaScript"],
    description: [
      "A fully functional JavaScript music player with play, pause, track navigation, and volume controls for a seamless audio experience.",
    ],
    type: "Exploratory Project",
  },
];

export const PROJECTS = {
  Go: Go,
  PHP: PHP,
  Java: Java,
  Javascript: Javascript,
};

export type ProjectKeys = "Go" | "Javascript" | "Java" | "PHP";
