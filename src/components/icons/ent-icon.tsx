import type { SVGProps } from 'react';

export function EntIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 10c-3 0-3 4 0 4h.5" />
      <path d="M18 10c3 0 3 4 0 4h-.5" />
      <path d="M9.5 10c0-2.5 1-4 2.5-4s2.5 1.5 2.5 4" />
      <path d="M12 14v4" />
      <path d="M12 18h-2" />
      <path d="M12 18h2" />
    </svg>
  );
}
