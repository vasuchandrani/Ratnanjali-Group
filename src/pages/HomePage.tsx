import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/home/Hero";
import { Overview } from "@/components/home/Overview";
import { Expertise } from "@/components/home/Expertise";
import { ProudProjects } from "@/components/home/ProudProjects";
import { RecentProject } from "@/components/home/RecentProject";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Stats } from "@/components/home/Stats";
import { ContactCTA } from "@/components/home/ContactCTA";

export function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Overview />
      <Expertise />
      <ProudProjects />
      <RecentProject />
      <WhyChoose />
      {/* <Stats /> */}
      <ContactCTA />
    </PageShell>
  );
}
