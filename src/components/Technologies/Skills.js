import { DiHtml5, DiJava, DiReact, DiTerminal } from "react-icons/di";
import { SiCss3, SiFirebase, SiGit, SiJavascript, SiMicrosoftsqlserver, SiMongodb, SiMysql, SiPostgresql, SiRedis } from "react-icons/si";

export const Skills = [
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Experto en java</>,
  },
  {
    slug: "Springboot",
    Component: DiJava,
    title: "Java",
    Description: () => <>Springboot 3</>,
  },
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Maquetado de páginas estáticas</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Dando estilo a páginas web</>,
  },
  {
    slug: "javascript",
    Component: SiJavascript,
    title: "Javascript",
    Description: () => <>Manejo de scripts</>,
  },
  {
    slug: "React",
    Component: DiReact,
    title: "React",
    Description: () => <>Construyendo SPAs</>,
  },
  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Persistencia de datos</>,
  },
  {
    slug: "PostgreSQL",
    Component: SiPostgresql,
    title: "PostgreSQL",
    Description: () => <>Persistencia de datos</>,
  },
  {
    slug: "SQL Server",
    Component: SiMicrosoftsqlserver,
    title: "SQL Server",
    Description: () => <>Persistencia de datos</>,
  },
  {
    slug: "MongoDB",
    Component: SiMongodb,
    title: "MongoDB",
    Description: () => <>Base de datos documental</>,
  },
  {
    slug: "Redis",
    Component: SiRedis,
    title: "Redis",
    Description: () => <>Cacheo de datos con Springboot con Jedis</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Creación de Scripts</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Autenticación, mensajería</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];
