import type { ReactNode } from 'react';

/** Shared reading column for legal / long-form pages. */
export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28 [&_a]:text-gold-400 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:display-xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[clamp(1.25rem,3vw,1.75rem)] [&_h2]:text-bone [&_li]:mb-2 [&_li]:text-muted [&_p]:mb-5 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-5"
    >
      {children}
    </div>
  );
}
