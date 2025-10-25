import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  badge?: string;
  icon?: ReactNode;
  children?: ReactNode;
};

export default function Card({ title, description, badge, icon, children }: CardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg dark:border-white/10 dark:bg-black/40">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {icon && (
            <span
              aria-hidden
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-100 dark:bg-brand-100/20 dark:text-brand-100"
            >
              {icon}
            </span>
          )}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
            {badge && (
              <span className="mt-1 inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:bg-brand-100/20 dark:text-brand-100">
                {badge}
              </span>
            )}
          </div>
        </div>
        {description && <p className="text-sm text-black/70 dark:text-white/70">{description}</p>}
        {children && <div className="space-y-4 text-black/80 dark:text-white/80">{children}</div>}
      </div>
    </article>
  );
}
