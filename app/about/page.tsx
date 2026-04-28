import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Sahil</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full Stack & AI Engineer — distributed systems, GenAI pipelines, cloud-native infra.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I&apos;m Sahil Singh, a B.Tech CSE student at Parul University (2023–2027) and a
          Software Engineer specializing in AI & Distributed Systems. I design and ship
          production-grade platforms across the full stack — from React/Next.js frontends
          to event-driven backends with Kafka, Redis, and WebSockets.
        </PageHeaderDescription>

        <PageHeaderDescription>
          On the AI side, I build RAG and Graph AI pipelines using LangGraph, LangChain,
          Qdrant, and Neo4j — with a focus on retrieval accuracy, memory-aware context,
          and multi-hop reasoning. I deploy everything cloud-native via Docker, Kubernetes,
          Helm, and GitHub Actions CI/CD.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I&apos;ve shipped 3 production-style systems in communication, civic-tech, and legal AI.
          Outside of building, I&apos;ve solved 500+ algorithmic problems across LeetCode,
          Codeforces, and GeeksforGeeks — and hold an NPTEL certification in Computer Networks
          from IIT Kharagpur (72/100).
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
