"use server"
import ProjectsPageContent from "@/components/pageContent/AllProjectsPage/ProjectsPageContent";
export default async function Home() {
  return (
    <main>
        <ProjectsPageContent />
    </main>
  );
}
