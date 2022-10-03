import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { PageInfo, Experience, Project, Social, Skill } from "../types";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
    const image = "/Turnt.PNG";

    return (
        <div className="bg-[#121318] text-white h-screen font-Montserrat snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-emerald-600/80">
            <Head>
                <title>Brody McFarland</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header socials={socials} />

            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>

            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>

            <section id="experience" className="snap-start">
                <WorkExperience experiences={experiences} />
            </section>

            <section id="skills" className="snap-center">
                <Skills skills={skills} />
            </section>

            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>

            <section id="contact" className="snap-start">
                <Contact />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <ArrowUpCircleIcon className="h-10 w-10 rounded-full bg-emerald-500/40 opacity-40 p-1 hover:opacity-100 duration-500" />
                    </div>
                </footer>
            </Link>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
            fallback: false,
        },
        revalidate: 30,
    };
};
