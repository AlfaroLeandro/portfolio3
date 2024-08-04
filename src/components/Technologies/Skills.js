import { DiHtml5, DiJava, DiReact, DiTerminal } from "react-icons/di";
import { SiApachekafka, SiCss3, SiDocker, SiFirebase, SiGit, SiGooglemaps, SiGrafana, SiGraphql, SiJavascript, SiLinux, SiMicrosoftsqlserver, SiMongodb, SiMysql, SiPostgresql, SiPrometheus, SiRedis, SiSpring } from "react-icons/si";

export const Skills = [
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Experto en java</>,
  },
  {
    slug: "Spring",
    Component: SiSpring,
    title: "Spring",
    Description: () => <>Spring framework</>,
  },
  {
    slug: "GraphQL",
    Component: SiGraphql,
    title: "GraphQL",
    Description: () => <>Construcción de APIs</>,
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
    slug: "Kafka",
    Component: SiApachekafka,
    title: "Kafka",
    Description: () => <>Arquitectura guiada por eventos</>,
  },
  {
    slug: "Prometheus",
    Component: SiPrometheus,
    title: "Prometheus",
    Description: () => <>Recolección de métricas</>,
  },
  {
    slug: "Grafana",
    Component: SiGrafana,
    title: "Grafana",
    Description: () => <>Visor de métricas</>,
  },
  {
    slug: "Dokcer",
    Component: SiDocker,
    title: "Dokcer",
    Description: () => <>Virtualización</>,
  },
  
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Creación de Scripts</>,
  },
  {
    slug: "Linux",
    Component: SiLinux,
    title: "Linux",
    Description: () => <>Ubuntu y Red Hat</>,
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
    Description: () => <>Gestor de versiones</>,
  },
];
