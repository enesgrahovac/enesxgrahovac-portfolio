import ProjectPage from '@/components/pageContent/ProjectPage/ProjectPageContent';
// import { GetStaticProps, GetStaticPaths } from 'next';
// import { useParams } from 'next/navigation';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPageRender({ params }: ProjectPageProps) {
  const { slug } = params;
  // Ensure slug is available before rendering
  if (!slug || typeof slug !== 'string') {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ProjectPage slug={slug} />
    </main>
  );
}
