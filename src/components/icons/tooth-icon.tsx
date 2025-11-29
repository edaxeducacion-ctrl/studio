import type { SVGProps } from 'react';

export function ToothIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M9.57 5.25a2.49 2.49 0 0 1 4.86 0 2.49 2.49 0 0 1-4.86 0Z" />
      <path d="M6 12c0-3.9 4.12-7 6-7s6 3.1 6 7-2 9-6 9-6-5.1-6-9Z" />
      <path d="M12 12v7" />
      <path d="M9.11 10.5a.5.5 0 1 1-.82-.58.5.5 0 0 1 .82.58Z" />
      <path d="M15.71 10.5a.5.5 0 1 1-.82-.58.5.5 0 0 1 .82.58Z" />
    </svg>
  );
}
