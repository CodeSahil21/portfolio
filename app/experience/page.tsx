import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Building useful systems, then making them faster and more reliable.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I work across AI engineering, full-stack development, and distributed systems,
          with a focus on measurable quality and production readiness. Recent work includes
          multi-agent evaluation, real-time communication, legal document intelligence, and
          geo-spatial governance workflows.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={experiences} />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;
