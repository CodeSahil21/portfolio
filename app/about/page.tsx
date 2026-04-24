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
          Full Stack & AI Engineer — systems, pipelines, and real-world impact.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I&apos;m Sahil Singh, a B.Tech CSE student at Parul University (2023–2027)
          and a Freelance Full Stack & AI Engineer. I build production-style systems
          that solve real reliability and retrieval quality problems — from
          enterprise communication platforms to legal AI and civic-tech.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My backend work spans event-driven architectures with Kafka, Redis, and
          BullMQ, real-time systems with WebSockets and Socket.IO, and AI pipelines
          using LangGraph, LangChain, Qdrant, and Neo4j. On the frontend, I build
          clean, responsive interfaces with React and Next.js.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Outside of building, I actively sharpen my problem-solving skills —
          500+ problems solved across LeetCode, Codeforces, and GeeksforGeeks.
          I care about system design, clean architecture, and shipping software
          that actually works under pressure.
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
