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
          AI Engineer focused on AI-native coding, context, graph systems, and evaluations.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I&apos;m Sahil Singh, a B.Tech Computer Science and Engineering student at Parul
          University (2023–2027). I design and ship production-grade platforms across the
          full stack, from React/Next.js frontends to event-driven backends with Kafka, Redis,
          and WebSockets.
        </PageHeaderDescription>

        <PageHeaderDescription>
          On the AI side, I build multi-agent systems, RAG and GraphRAG pipelines, and MCP
          integrations using LangGraph, LangChain, Qdrant, Neo4j, and local LLMs. I apply
          AI Loop Engineering, Context Engineering, Graph Engineering, and LLM Evals with LangSmith and Langfuse,
          then use Harness Engineering practices to improve reliability and delivery.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I&apos;ve shipped systems for real-time communication, legal document intelligence, and
          geo-spatial governance. I also enjoy solving hard engineering problems around
          latency, reliability, observability, and clean system boundaries.
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
