import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Sahil Singh</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          AI Engineer building AI-native products, multi-agent systems, and distributed platforms.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I build reliable AI and full-stack systems with AI-native coding workflows, AI Loop
          Engineering, Context Engineering, Graph Engineering, LangChain, LangGraph, RAG, GraphRAG, and MCP. I use
          LLM Evals, observability, and Harness Engineering practices to ship measurable,
          low-latency products on React, Next.js, Kafka, Redis, Docker, and Kubernetes.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
