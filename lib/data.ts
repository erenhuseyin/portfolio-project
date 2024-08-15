import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import { RiJavaLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import web from "@/public/web.png";

export const links = [
  {
    name: "Giriş",
    hash: "#home",
  },
  {
    name: "Hakkımda",
    hash: "#about",
  },
  {
    name: "Projeler",
    hash: "#projects",
  },
  {
    name: "Beceriler",
    hash: "#skills",
  },
  {
    name: "Deneyimler",
    hash: "#experience",
  },
  {
    name: "İletişim",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Trakya Üniversitesi",
    location: "Bilgisayar Mühendisliği",
    description:
      "Bilgisayar mühendisliği eğitimi",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Stajyer",
    location: "Exedra HRTech StajOkulu ",
    description:
      "Sektörde tecrübeli yazılımcılar tarafından çeşitli alanlarda eğitimler gerçekleşti. Bu eğitimler doğrultusunda uzmanlaşmak istediğimiz alanlardan sunum yapmamıza imkan sağlandı. StajOkulu bünyesinde spring boot frameworku ile backend alanında kendimi geliştirme fırsatı buldum. ",
    icon: React.createElement(CgWorkAlt),
    date: "07/2022 - 08/2022",
  },
  {
    title: "Junior Java Developer",
    location: "Sugar Technology",
    description:
      "Spring boot frameworku ile backend alanında aldığım eğitim sonrasında mikroservis mimarisiyle sıfırdan crm projesi geliştirdik. Mikroservis oluşturma, gateway, mikroservisler arası iletişim gibi kıymetli tecrübeler kazandım.",
    icon: React.createElement(RiJavaLine),
    date: "09/2022 - 12/2022",
  },
  {
    title: "Fullstack Java Developer",
    location: "Finastech Technology",
    description:
      "Uçtan uca projelerin her aşamasında yer aldım ve dijital bankacılık sektörünün iş süreçlerinde tecrübe kazandım. Agile metodolojisi ile geliştirdiğimiz projelerde, java spring boot ile mikroservis geliştirirken front tarafında bff-nodejs, react ve nextjs ile çalışma imkanı buldum. Deployment süreçlerine dahil olup atlassian toollarında da hakimiyet kazandım. 35+ mikroservis modülü içeren dijital para transfer uygulaması, sanal pos ve açık bankacılık projelerinde çalıştım.",
    icon: React.createElement(MdPayment),
    date: "01/2023-halen",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Web Sitesi",
    description:
      "Kendimi geliştirmek amaçlı bir portolyo sitesi geliştirdim.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer Motion", "React Email & Resend"],
    imageUrl: web,
  },
  {
    title: "E-Ticaret",
    description:
      "Stajımı tamamlamak için yaptığım kullanıcı, ürün, kategori, sipariş ve sepet modullerini içeren backend projesi.",
    tags: ["Spring Boot", "Mikroservis", "Eureka Discovery", "Api Gateway", "Postgresql", "Mvc"],
    imageUrl: web,
  },
  {
    title: "Mimik Tanıma Projesi",
    description:
      "Üniversite bitirme projesi olarak, kameradan yüzün özniteliklerini çıkarıp mimik sonucu çıkaran, makine öğrenmesi ile bir görüntü işleme projesi.",
    tags: ["Python", "Tensorflow", "Machine Learning", "Image Processing"],
    imageUrl: web,
  },
] as const;

export const skillsData = [
  "Postgresql",
  "H2db",
  "Mysql",
  "Git",
  "Jenkins",
  "Docker",
  "Bitbucker",
  "Jira",
  "Nexus"
] as const; 

export const skillsBackendData = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Microservices",
  "Eureka Discovery",
  "Api Gateway",
  "Feign Client",
  "Redis",
  "Swagger",
  "Scheduler",
  "Jsch",
  "ElasticSearch",
  "Spring Data Jpa",
  "Hibernate",
  "Hql",
  "Websocket",
  "Graphql"
] as const; 

export const skillsDataFrontend = [
  "React",
  "MongoDB",
  "Elk - Kibana",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "Middleware",
  "Bff",
  "Tailwind",
  "Socket.io"
] as const; 