import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsDetail } from "@/configs/projects/projectsDetail";
import ProjectDetailPage from "@/components/page/projectDetail/ProjectDetail";

export function generateStaticParams() {
  return projectsDetail.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsDetail.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailPage project={project} />;
}