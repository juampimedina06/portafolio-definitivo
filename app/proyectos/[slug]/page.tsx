import { notFound } from "next/navigation"

import ProjectDetail from "@/app/components/ProjectDetail"
import { getProjectBySlug, projects } from "@/lib/projects"
import Footer from "@/app/components/Footer"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <>
      <ProjectDetail project={project} />
      <Footer />
    </>
  )
}
