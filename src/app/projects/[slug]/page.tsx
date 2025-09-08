import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { projectsDetail } from "@/configs/projects/projectsDetail";
// import SplashOpen from "@/components/splash/SplashOpen";

import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export function generateStaticParams() {
  return projectsDetail.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsDetail.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsDetail.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div>
      {/* <SplashOpen onFinish={() => {}} /> */}
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="inset-0 absolute z-10 flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <SectionWrapper className="pt-16 flex bg-background relative overflow-hidden">
        <Container className="flex flex-col gap-8 md:gap-16 lg:gap-20 relative">
          <p className="text-lg md:text-xl mb-8 opacity-90 text-center">
            {project.description}
          </p>

          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              Technologies
            </h2>
            <ul className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-md text-sm md:text-base"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-green text-black rounded-lg font-medium hover:bg-green/80 transition"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/20 rounded-lg font-medium hover:bg-white/30 transition"
              >
                View Code
              </a>
            )}
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
