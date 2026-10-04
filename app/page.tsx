import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import ImageSlot from "@/components/image-slot";
import OceanBackground from "@/components/ocean/ocean-background";
import SiteHeader from "@/components/site-header";
import type { Cert, Work } from "@/lib/content";
import {
  certs,
  education,
  jobs,
  links,
  profile,
  skills,
  works,
} from "@/lib/content";

const label =
  "font-mono text-[12px] uppercase tracking-[0.04em] text-ink-muted";
const sectionTitle =
  "font-serif text-[clamp(2.8rem,5.6vw,4.75rem)] leading-[0.95] font-normal tracking-[-0.015em]";

/**
 * Eyebrow + lowercase title on the left (sticky on desktop), content on the
 * right. The right column is pushed down by the eyebrow's height so its first
 * line sits level with the title.
 */
function EditorialSection({
  eyebrow,
  title,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="grid grid-cols-1 gap-x-[clamp(40px,7vw,120px)] gap-y-8 py-[clamp(64px,9vw,120px)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
      data-reveal
    >
      <div className="md:sticky md:top-28 md:self-start">
        <p className={`${label} mb-5`}>{eyebrow}</p>
        <h2 className={sectionTitle}>{title}</h2>
        {aside ? <div className="hidden md:block">{aside}</div> : null}
      </div>
      <div className="md:pt-[34px]">
        {children}
        {aside ? <div className="md:hidden">{aside}</div> : null}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* Hero is full-bleed so the ocean spans the viewport; its content keeps
          the same container as every other section. */}
      <section
        id="top"
        className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden"
      >
        <OceanBackground />

        <div className="relative z-10 mx-auto max-w-[1500px] px-[clamp(20px,5vw,64px)] w-full pt-[120px] pb-20">
          <div className="mb-10 flex items-center gap-3.5" data-reveal>
            <Image
              src="/images/avatar.svg"
              alt={profile.name}
              width={56}
              height={56}
              unoptimized
              priority
              className="size-14 shrink-0 rounded-full"
            />
            <span className="font-mono text-[12.5px] leading-[1.5] uppercase tracking-[0.04em] text-ink-muted">
              Portfolio of
              <br />
              {profile.name}
            </span>
          </div>

          <h1
            className="max-w-[22ch] font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] font-normal tracking-[-0.02em] text-balance"
            data-reveal
          >
            {profile.headline}
          </h1>

          <div className="mt-11 flex flex-wrap gap-3.5" data-reveal>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6.5 py-[15px] text-[15px] font-medium text-paper transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-[3px]"
            >
              <Mail className="size-[17px] opacity-70" aria-hidden="true" />
              <span>Get in touch</span>
              <ArrowUpRight
                className="size-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border border-ink/20 px-6.5 py-[15px] text-[15px] font-medium transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              Experience
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] px-[clamp(20px,5vw,64px)]">
        {/* Background. Every block here shares one editorial layout: a small
            eyebrow and a lowercase title on the left, the substance on the
            right, starting level with the title. */}
        <section
          id="experience"
          className="scroll-mt-24 border-t border-ink/15"
        >
          <EditorialSection eyebrow="Where I’ve been" title="experience">
            <div className="flex flex-col">
              {jobs.map((job) => (
                <div
                  key={job.role}
                  className="grid grid-cols-1 gap-2 border-t border-ink/12 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-5"
                >
                  <div>
                    <h3 className="text-[clamp(1.15rem,1.8vw,1.4rem)] font-semibold tracking-[-0.01em]">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 text-[15px] text-ink-muted">
                      <a
                        href={job.orgHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-60"
                      >
                        {job.org}
                      </a>
                    </p>
                    <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.6] text-ink-body">
                      {job.detail}
                    </p>
                  </div>
                  <span className="order-first font-mono text-[12px] whitespace-nowrap text-ink-muted uppercase sm:order-none sm:text-right">
                    {job.when}
                  </span>
                </div>
              ))}
            </div>
          </EditorialSection>

          <EditorialSection eyebrow="On paper" title="credentials">
            <BadgeCollage />
            <div className="mt-[clamp(56px,7vw,96px)] flex flex-col">
              {certs
                .filter((cert) => !cert.badge)
                .map((cert) => (
                  <CredentialRow
                    key={cert.name}
                    name={cert.name}
                    tag={cert.tag}
                    href={cert.href}
                  />
                ))}
              <CredentialRow
                name={education.name}
                tag={education.tag}
                href={education.href}
              />
            </div>
          </EditorialSection>
        </section>

        {/* Selected work */}
        <section
          id="work"
          className="scroll-mt-24 border-t border-ink/15 pt-[clamp(80px,10vw,140px)] pb-25"
        >
          <div className="mb-[clamp(56px,7vw,100px)]" data-reveal>
            <p className={`${label} mb-5`}>
              Selected work ({String(works.length).padStart(2, "0")})
            </p>
            <h2 className={sectionTitle}>things I&rsquo;ve built</h2>
          </div>

          <div className="flex flex-col gap-[clamp(80px,10vw,150px)]">
            {works.map((work) => (
              <article key={work.no} data-reveal>
                <div className="mb-[clamp(28px,4vw,56px)] flex items-baseline justify-between gap-6">
                  <h3 className="font-serif text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1] font-normal tracking-[-0.015em]">
                    {work.title}
                  </h3>
                  <span className="font-mono text-[12px] whitespace-nowrap text-ink-muted">
                    {work.no} &middot; {work.year}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[170px_minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-x-[clamp(32px,4vw,64px)]">
                  <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 font-mono text-[12px] leading-[1.9] uppercase tracking-[0.04em] text-ink-muted md:flex-col md:gap-0">
                    {work.roles.map((role, i) => (
                      <span key={role} className={i === 0 ? "text-ink" : ""}>
                        {role}
                      </span>
                    ))}
                  </div>

                  <div>
                    <p className="max-w-[46ch] text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-ink-body">
                      {work.desc}
                    </p>
                    {work.links.length ? (
                      <div className="mt-6 flex gap-6">
                        {work.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[14px] font-medium underline decoration-ink/30 underline-offset-[5px] transition-colors hover:decoration-ink"
                          >
                            {link.label}
                            <span aria-hidden="true">&#8599;</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="md:col-span-2 lg:col-span-1">
                    <WorkMedia work={work} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="scroll-mt-24 border-t border-ink/15">
          <EditorialSection eyebrow="What I use" title="stack">
            <div className="flex flex-col">
              {skills.map((group) => (
                <div
                  key={group.group}
                  className="grid grid-cols-1 gap-3 border-t border-ink/12 py-5 first:border-t-0 first:pt-0 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <p className="font-mono text-[12px] uppercase tracking-[0.04em] text-ink-muted sm:pt-0.5">
                    {group.group}
                  </p>
                  <p className="text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.6]">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </EditorialSection>
        </section>

        {/* Contact */}
        <footer
          id="contact"
          className="scroll-mt-24 border-t border-ink/15 pt-[clamp(70px,10vw,120px)] pb-10"
        >
          <div className="grid grid-cols-1 gap-15">
            <div data-reveal>
              <p className={`${label} mb-6`}>Get in touch</p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-block text-[clamp(1.5rem,6vw,5rem)] leading-none font-semibold tracking-[-0.03em] break-all transition-opacity hover:opacity-55"
              >
                {profile.email}
              </a>
            </div>

            <div
              className="flex flex-wrap items-end justify-between gap-x-20 gap-y-12"
              data-reveal
            >
              <div className="flex flex-wrap gap-x-16 gap-y-10">
                <FooterColumn title="Elsewhere" items={links.elsewhere} />
                <FooterColumn
                  title="Direct"
                  items={[
                    ...links.direct,
                    { label: profile.phone, href: profile.phoneHref },
                  ]}
                  trailing={profile.location}
                />
              </div>

              <div className="font-mono text-[11.5px] leading-[1.7] text-ink-muted sm:text-right">
                <p>{profile.name}</p>
                <p>{profile.role}</p>
                <p className="mt-2.5">
                  &copy; {new Date().getFullYear()} &middot; Available for work
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function WorkMedia({ work }: { work: Work }) {
  const href = work.links[0]?.href;

  // A coloured block with the screenshot floated over its top-right corner.
  // The only motion is the card lifting a few pixels on hover.
  const media = (
    <div className="relative aspect-[4/3] w-full">
      <div
        className="absolute bottom-0 left-0 flex h-[72%] w-[58%] items-end p-4"
        style={{ backgroundColor: work.tint }}
      >
        <span className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-[#ECEAE3]">
          {work.tag}
        </span>
      </div>
      <div className="absolute top-[6%] right-0 aspect-[16/10] w-[80%] overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-[0_18px_40px_-20px_rgb(0_0_0/0.35)] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-1.5">
        <ImageSlot
          src={work.image}
          alt={work.title}
          placeholder={work.placeholder}
          sizes="(max-width: 1024px) 80vw, 560px"
        />
      </div>
    </div>
  );

  if (!href) return media;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`Open ${work.title}`}
    >
      {media}
    </a>
  );
}

function BadgeCollage() {
  const badges = certs.filter(
    (c): c is Cert & { badge: string; tint: string } => !!c.badge && !!c.tint,
  );

  // Two staggered columns: every second tile drops down so the set reads as a
  // loose collage rather than a grid. Tiles fade up one after another once the
  // section reveals (see .badge-anim in globals.css). Each badge carries its
  // own name and Credly link underneath, so they are left out of the rows below.
  return (
    <div className="grid grid-cols-2 gap-x-[clamp(16px,3vw,40px)] gap-y-[clamp(24px,4vw,48px)] pb-[clamp(24px,5vw,72px)]">
      {badges.map((cert, i) => (
        <div
          key={cert.name}
          className={`badge-tile ${
            i % 2 ? "translate-y-[clamp(24px,5vw,72px)]" : ""
          }`}
          style={{ "--i": i } as React.CSSProperties}
        >
          <a
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-anim group block"
          >
            <div className="relative aspect-[5/4]">
              <div
                className="absolute bottom-0 left-0 flex h-[70%] w-[62%] items-end p-3 sm:p-4"
                style={{ backgroundColor: cert.tint }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#ECEAE3] sm:text-[11.5px]">
                  {cert.level}
                </span>
              </div>
              <div className="absolute top-0 right-0 flex aspect-square w-[62%] items-center justify-center rounded-lg border border-ink/10 bg-[#F7F6F1] shadow-[0_18px_40px_-20px_rgb(0_0_0/0.35)] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-1.5">
                <div className="relative h-[78%] w-[78%]">
                  <Image
                    src={cert.badge}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 30vw, 220px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-[clamp(0.9rem,1.2vw,1.05rem)] leading-[1.35] font-medium">
              <span className="underline decoration-transparent decoration-1 underline-offset-[4px] transition-colors group-hover:decoration-ink/40">
                {cert.name}
              </span>
              <span aria-hidden="true"> &#8599;</span>
            </p>
            <p className="mt-1.5 font-mono text-[11px] text-ink-muted sm:text-[12px]">
              {cert.tag}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

function CredentialRow({
  name,
  tag,
  href,
}: {
  name: string;
  tag: string;
  href?: string;
}) {
  const title = (
    <span className="text-[clamp(1rem,1.6vw,1.25rem)] font-medium">
      {name}
      {href ? <span aria-hidden="true"> &#8599;</span> : null}
    </span>
  );

  return (
    <div className="grid grid-cols-1 gap-1 border-t border-ink/12 py-4 sm:grid-cols-[1fr_auto] sm:gap-5">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-55"
        >
          {title}
        </a>
      ) : (
        title
      )}
      <span className="font-mono text-[12px] text-ink-muted sm:text-right">
        {tag}
      </span>
    </div>
  );
}

function FooterColumn({
  title,
  items,
  trailing,
}: {
  title: string;
  items: { label: string; href: string }[];
  trailing?: string;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-ink-faint">
        {title}
      </span>
      {items.map((item) => {
        const external = item.href.startsWith("http");
        return (
          <a
            key={item.href}
            href={item.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="text-[15px] transition-opacity hover:opacity-55"
          >
            {item.label}
            {external ? <span aria-hidden="true"> &#8599;</span> : null}
          </a>
        );
      })}
      {trailing ? (
        <span className="text-[15px] text-ink-muted">{trailing}</span>
      ) : null}
    </div>
  );
}
