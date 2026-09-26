type IconProps = {
  className?: string;
};

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 6H3V7.5h18V6Zm0 5.25H3v1.5h18v-1.5ZM21 16.5H3V18h18v-1.5Z"
      />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.3 15.2 21 19.9l-1.1 1.1-4.7-4.7a6.8 6.8 0 1 1 1.1-1.1ZM10.6 16.2a5.6 5.6 0 1 0 0-11.2 5.6 5.6 0 0 0 0 11.2Z"
      />
    </svg>
  );
}

export function MicIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 15.2a2.8 2.8 0 0 0 2.8-2.8V6.8a2.8 2.8 0 1 0-5.6 0v5.6A2.8 2.8 0 0 0 12 15.2Zm6.2-2.8a6.2 6.2 0 0 1-5.4 6.1V21h-1.6v-2.5a6.2 6.2 0 0 1-5.4-6.1h1.6a4.6 4.6 0 0 0 9.2 0h1.6Z"
      />
    </svg>
  );
}

export function ThemeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 4.2 13.4 7l3 .5-2.2 2.1.5 3L12 11.2 10.3 12.6l.5-3L8.6 7.5l3-.5L12 4.2ZM6.8 13l.8 1.6 1.7.3-1.3 1.2.3 1.7-1.5-.8-1.5.8.3-1.7-1.3-1.2 1.7-.3L6.8 13Zm10.4 0 .8 1.6 1.7.3-1.3 1.2.3 1.7-1.5-.8-1.5.8.3-1.7-1.3-1.2 1.7-.3.8-1.6Z"
      />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 7.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4ZM11.2 2h1.6v3.2h-1.6V2Zm0 16.8h1.6V22h-1.6v-3.2ZM2 11.2h3.2v1.6H2v-1.6Zm16.8 0H22v1.6h-3.2v-1.6ZM4.7 4.7l1.1-1.1 2.3 2.3-1.1 1.1-2.3-2.3Zm11.2 11.2 1.1-1.1 2.3 2.3-1.1 1.1-2.3-2.3ZM18.2 3.6l1.1 1.1-2.3 2.3-1.1-1.1 2.3-2.3ZM7 14.8l1.1 1.1-2.3 2.3-1.1-1.1 2.3-2.3Z"
      />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.8 3.2A8.4 8.4 0 1 0 20 14.6 7.2 7.2 0 0 1 12.8 3.2Z"
      />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M11.2 11.2V5h1.6v6.2H19v1.6h-6.2V19h-1.6v-6.2H5v-1.6h6.2Z" />
    </svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 21.2a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Zm7.2-5.4V11a7.2 7.2 0 0 0-5.6-7V3.2a1.6 1.6 0 1 0-3.2 0V4a7.2 7.2 0 0 0-5.6 7v4.8L3 17.6v.8h18v-.8l-1.8-1.8Z"
      />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M4 21V10l8-6.5L20 10v11h-6.5v-6.5h-3V21H4Z" />
    </svg>
  );
}

export function ShortsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M11.2 2.2 4.4 13.1h5.3l-1.5 8.7 8.7-12.4h-5.2L13.6 2.2h-2.4Z"
      />
    </svg>
  );
}

export function SubscriptionsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16v1.6H4V6Zm2.2-3.2h11.6V4.2H6.2V2.8ZM3.4 8.4h17.2c.6 0 1 .4 1 1v11.2c0 .6-.4 1-1 1H3.4c-.6 0-1-.4-1-1V9.4c0-.6.4-1 1-1Zm6.2 3.2v7.2L16 15.2l-6.4-3.6Z"
      />
    </svg>
  );
}

export function HistoryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.8 8v4.2l3.2 1.9-.8 1.3-4-2.4V8h1.6ZM5.2 7.4l1.5 1.5A7.2 7.2 0 1 1 4.8 12H3.2a8.8 8.8 0 1 0 2.4-6.1L4 4.3v3.1h1.2Z"
      />
    </svg>
  );
}

export function ShelfIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.4 3.6h11.2c.9 0 1.6.7 1.6 1.6v15.1l-7.2-3.2-7.2 3.2V5.2c0-.9.7-1.6 1.6-1.6Z"
      />
    </svg>
  );
}

export function LikedIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 10.2h3.6V21H3V10.2Zm17.6 1c.3-.4.4-.8.4-1.3 0-1.3-1-2.3-2.3-2.3h-4.6l.8-3.5c.1-.5-.1-1.1-.5-1.4L12.8 1.4 7.4 6.8c-.3.3-.4.7-.4 1.1v10.8c0 1.2.9 2.1 2.1 2.1h8.3c.8 0 1.6-.5 1.9-1.3l2.1-5.4c.1-.3.2-.6.2-.8v-.1Z"
      />
    </svg>
  );
}

export function ClassicsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#e8b923"
        d="M4 10.2 12 4.4l8 5.8V12H4v-1.8Zm1.6 2.4h1.8V18H5.6v-5.4Zm3.6 0h1.8V18H9.2v-5.4Zm3.6 0h1.8V18h-1.8v-5.4Zm3.6 0H18V18h-1.6v-5.4ZM3.6 18.6h16.8V21H3.6v-2.4Z"
      />
    </svg>
  );
}

export function SciFiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#b57bff"
        d="M14.1 3.2c2.8.8 5.2 3.2 6.1 6.1l-5.2.6-.9-1.6-.6-5.1Zm-2.3 6.8 1.6.9 4.6 4.6c-.9 1.2-2.1 2.2-3.4 2.8l-4.6-4.6-.9-1.6 2.7-2.1ZM5.4 12.2l3.4-.3 2.1 2.1.3 3.4-2.6 1.6c-1.6-1.1-2.8-2.6-3.4-4.4l.2-2.4Zm-1.2 5.4 2.1.6.8 2.1-2.9.8-.8-2.9.8-.6Z"
      />
    </svg>
  );
}

export function HorrorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#f04343"
        d="M12 3.4c3.8 0 7 3 7 7.1 0 2.4-1.1 4.3-2.4 6.1l.8 3.4H6.6l.8-3.4C6.1 14.8 5 12.9 5 10.5c0-4.1 3.2-7.1 7-7.1Zm-2.5 5.6c-.7 0-1.3.6-1.3 1.4s.6 1.4 1.3 1.4 1.3-.6 1.3-1.4-.6-1.4-1.3-1.4Zm5 0c-.7 0-1.3.6-1.3 1.4s.6 1.4 1.3 1.4 1.3-.6 1.3-1.4-.6-1.4-1.3-1.4ZM8.8 15.2c.6 1.2 1.7 1.9 3.2 1.9s2.6-.7 3.2-1.9H8.8Z"
      />
    </svg>
  );
}

export function LikeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 10.2h3.6V21H3V10.2Zm17.6 1c.3-.4.4-.8.4-1.3 0-1.3-1-2.3-2.3-2.3h-4.6l.8-3.5c.1-.5-.1-1.1-.5-1.4L12.8 1.4 7.4 6.8c-.3.3-.4.7-.4 1.1v10.8c0 1.2.9 2.1 2.1 2.1h8.3c.8 0 1.6-.5 1.9-1.3l2.1-5.4c.1-.3.2-.6.2-.8v-.1Z"
      />
    </svg>
  );
}

export function DislikeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 13.8h-3.6V3H21v10.8ZM3.4 12.8c-.3.4-.4.8-.4 1.3 0 1.3 1 2.3 2.3 2.3h4.6l-.8 3.5c-.1.5.1 1.1.5 1.4l1.6 1.3 5.4-5.4c.3-.3.4-.7.4-1.1V4.3c0-1.2-.9-2.1-2.1-2.1H6.6c-.8 0-1.6.5-1.9 1.3L2.6 8.9c-.1.3-.2.6-.2.8v.1Z"
      />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M15.2 6.4 20.8 12l-5.6 5.6v-3.8c-4.4 0-7.4 1.4-9.6 4.6.8-4 3.2-8 9.6-8.8V6.4Z"
      />
    </svg>
  );
}

export function SaveIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.4 3.6h11.2c.9 0 1.6.7 1.6 1.6v15.1l-7.2-3.2-7.2 3.2V5.2c0-.9.7-1.6 1.6-1.6Z"
      />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M8 5.4v13.2L19.2 12 8 5.4Z" />
    </svg>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M6.6 5.2h3.6v13.6H6.6V5.2Zm7.2 0h3.6v13.6h-3.6V5.2Z" />
    </svg>
  );
}

export function RomanceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#ff6b9d"
        d="M12 20.4 10.7 19.2C6.8 15.6 4.2 13.2 4.2 10.2c0-2.4 1.8-4.2 4.2-4.2 1.3 0 2.6.6 3.6 1.6 1-1 2.3-1.6 3.6-1.6 2.4 0 4.2 1.8 4.2 4.2 0 3-2.6 5.4-6.5 9L12 20.4Z"
      />
    </svg>
  );
}
