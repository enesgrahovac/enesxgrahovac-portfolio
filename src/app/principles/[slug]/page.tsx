import PrinciplePage from '@/components/pageContent/PrinciplePage/PrinciplePage';
import { GetStaticProps, GetStaticPaths } from 'next';


type PrinciplePageProps = {
  title: string;
  content: string | undefined;
};

export default function PrinciplePageRender({  }: PrinciplePageProps) {
    const slug = "meditate"
  return (
    <main>
      <PrinciplePage slug={slug}/>
    </main>
  );
}
