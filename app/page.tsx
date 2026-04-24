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
          Full Stack & AI Engineer — building systems that scale and think.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I'm a Freelance Full Stack & AI Engineer focused on building production-grade systems
          in communication, civic-tech, and legal AI. I work across the full stack — from
          responsive React and Next.js frontends to event-driven backends with Kafka and Redis,
          AI pipelines with LangGraph, and cloud-native deployments with Docker, Kubernetes,
          Helm, and GitHub Actions CI/CD — shipping reliable, high-performance software end to end.
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
