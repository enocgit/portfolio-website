import Image from "next/image";
import { Button } from "antd";
import Section from "@/components/Section";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import servicesOffered from "@/content/services/servicesOffered";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SkillsSlider from "@/components/SkillsSlider";
import portfolio from "@/content/portfolio/portfolio";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        {/* Landing */}
        <Section
          className="min-h-[35rem] bg-primary text-white py-40 landing"
          id="home"
        >
          <div className="space-y-6 translate-y-[-20%] lg:translate-y-0">
            <h1 className="max-w-2xl text-4xl font-black text-tertiary">
              Discover Your Dream Career with my Skills and Expertise
            </h1>
            <h2>Designing for the user, building for success</h2>
            <div className="flex gap-5">
              <Button className="bg-white">Hire me</Button>
              <Button className="text-white bg-secondary-100 border-tertiary hover:text-tertiary hover:border-tertiary">
                Portfolio
              </Button>
            </div>
          </div>
        </Section>
        {/* Who I am */}
        <Section className="text-white bg-secondary-100" id="about">
          <div className="flex flex-col items-end gap-y-5 gap-x-20 md:flex-row md:items-start">
            <div className="space-y-4 translate-y-[-20%] lg:translate-y-0">
              <h1 className="text-3xl font-extrabold text-tertiary">
                Who I am
              </h1>
              <p className="max-w-xl">
                Hello, I&apos;m Enoch - a{" "}
                <span className="font-bold text-tertiary">
                  Front-End developer
                </span>{" "}
                with three years of experience. My passion for technology,
                combined with my problem-solving skills, drives me to create
                seamless and user-friendly digital experiences.
              </p>
              <p>
                Let&apos;s work together to bring your vision to{" "}
                <span className="font-bold text-tertiary">life.</span>
              </p>
            </div>
            <div>
              <div className="relative w-52 h-80">
                <Image
                  src="/svg/wiam-vector.svg"
                  alt="male with laptop"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </Section>
        {/* Showcase of Expertise */}
        <Section className="text-primary" id="portfolio">
          <div className="space-y-8">
            <div className="">
              <h1 className="text-3xl font-extrabold text-center">
                Showcase of Expertise
              </h1>
              <h2 className="text-center">A collection of my Latest Works</h2>
            </div>
            <ul className="grid gap-10 grid-col-1 sm:grid-cols-autofit-project-card">
              {portfolio.map((project) => {
                const { href, images, projectName, projectType, stack } =
                  project;
                return (
                  <li key={projectName} className="min-w-full min-h-40">
                    <ProjectCard
                      projectName={projectName}
                      projectType={projectType}
                      stack={stack as "Front-End" | "Fullstack" | "Back-End"}
                      href={href}
                      images={images}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>
        {/* What I offer */}
        <Section className="bg-primary/90" id="services">
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold text-white">What I Offer</h1>
            <ul className="flex flex-wrap gap-10">
              {servicesOffered.map((service) => {
                const { id, title, description, image } = service;
                return (
                  <li
                    key={id}
                    className="flex-grow bg-primary min-h-[20rem] w-[18rem] p-8 space-y-5 rounded-lg"
                  >
                    <h3 className="font-bold text-white capitalize">{title}</h3>
                    <div className="relative">
                      <Image
                        src={image}
                        alt={title.toLowerCase()}
                        height={60}
                        width={60}
                        className="relative z-10"
                      />
                      <div className="absolute top-0 w-16 h-16 rounded-full right-28 bg-neutral-700/30"></div>
                    </div>
                    <small className="inline-block max-w-md text-white/60">
                      {description}
                    </small>
                    <FaArrowRight className="text-white/60" />
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>
        {/* Skills */}
        <Section id="skills">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-extrabold text-center text-transparent bg-gradient-to-r from-secondary-100 to-secondary-200 bg-clip-text">
                My Toolbox
              </h1>
              <h2 className="text-center">In-Depth Look at my Proficiencies</h2>
            </div>
            <div className="w-full h-40">
              <SkillsSlider />
            </div>
          </div>
        </Section>
        {/* Contact */}
        <section className="min-h-[35rem] lg:h-[35rem]" id="contact">
          <div className="grid min-h-full lg:grid-cols-2">
            <div className="min-h-full pt-32 pb-10 text-white bg-primary">
              <div className="flex flex-col items-center justify-end gap-32  lg:translate-y-[20%]">
                <Image
                  src="/svg/contact-illustration.svg"
                  alt="contact"
                  height={210}
                  width={210}
                />
                <div className="flex gap-5">
                  <Link href="https://github.com/enocgit" target="_blank">
                    <FaGithub className="text-4xl hover:translate-y-[-20%] transition-transform" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/enoch-ansah"
                    target="_blank"
                  >
                    <FaLinkedin className="text-4xl hover:translate-y-[-20%] transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            {/* form */}
            <div
              className="relative min-h-[120%] lg:min-h-full p-10 text-neutral-800"
              id="form-area"
            >
              <h1 className="text-3xl font-black">Let&apos;s Connect</h1>
              <ContactForm />
              <div className="relative z-10 flex items-center justify-end gap-5 translate-y-[220%]">
                <Link
                  href="tel:0553219740"
                  target="_blank"
                  className="grid w-10 h-10 bg-white rounded-full place-items-center"
                >
                  <FaPhoneAlt className="text-xl bg-transparent" />
                </Link>
                <Link
                  href="enocansah@gmail.com"
                  target="_blank"
                  className="grid w-10 h-10 bg-white rounded-full place-items-center"
                >
                  <FaEnvelope className="text-xl bg-transparent" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
