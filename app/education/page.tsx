import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Building the foundation, one semester at a time.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I&apos;m currently pursuing a B.Tech in Computer Science with a Cloud Computing
          specialization at Parul University, Vadodara. My academic path has been
          backed by consistent problem-solving practice and hands-on project work
          in backend systems and AI engineering.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/skills-tools"
        nextHref="/contact"
        prevTitle="Skills & Tools"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
