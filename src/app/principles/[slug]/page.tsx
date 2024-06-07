import PrinciplePage from '@/components/pageContent/PrinciplePage/PrinciplePage';
// import { GetStaticProps, GetStaticPaths } from 'next';
// import { useParams } from 'next/navigation';

type PrinciplePageProps = {
  params: {
    slug: string;
  };
};

export default function PrinciplePageRender({ params }: PrinciplePageProps) {
  const { slug } = params;
  console.log(params)
  // Ensure slug is available before rendering
  if (!slug || typeof slug !== 'string') {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <PrinciplePage slug={slug} />
    </main>
  );
}
