import type { ReactNode } from "react";
type SectionProps = {
  id: string;
  heading: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, heading, description, children, className }: SectionProps) {
  const headingId = `${id}-title`;
  const descriptionId = description ? `${id}-description` : undefined;
  const sectionClass = ["scroll-mt-28", className].filter(Boolean).join(" ");

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className={sectionClass}
    >
      <div className="mx-auto max-w-5xl space-y-12 px-6 py-16 sm:py-20">
        <header className="space-y-4 text-center">
          <h2 id={headingId} className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            {heading}
          </h2>
          {description && (
            <p
              id={descriptionId}
              className="mx-auto max-w-3xl text-base text-black/70 dark:text-white/70 sm:text-lg"
            >
              {description}
            </p>
          )}
        </header>
        <div className="space-y-10">{children}</div>
      </div>
    </section>
  );
}
