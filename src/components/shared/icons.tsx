/** В Lucide нет логотипов брендов, поэтому эти два значка нарисованы отдельно. */

type IconProps = { className?: string };

export function WhatsAppIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.76.46 3.47 1.33 4.98L2 22l5.2-1.36a9.93 9.93 0 0 0 4.84 1.23c5.5 0 9.96-4.46 9.96-9.95C22 6.46 17.54 2 12.04 2Zm0 18.2a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.24 8.24 0 0 1 6.98-12.65c4.55 0 8.25 3.7 8.25 8.25 0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.05-.38-1.99-1.22a7.46 7.46 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.16-.47-.29Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  );
}
