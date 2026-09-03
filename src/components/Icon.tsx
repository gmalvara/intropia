import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'chat'
  | 'people'
  | 'bulb'
  | 'bulb-heart'
  | 'hands'
  | 'devices'
  | 'leader'
  | 'compass'
  | 'bars'
  | 'brick'
  | 'chat-people'
  | 'target'
  | 'chart-up'
  | 'search-people'
  | 'strategy'
  | 'megaphone'
  | 'megaphone-people'
  | 'hand-person'
  | 'star'
  | 'network'
  | 'mail'
  | 'phone'
  | 'whatsapp'
  | 'arrow-right'
  | 'arrow-down'
  | 'menu'
  | 'close'
  | 'play';

const PATHS: Record<IconName, ReactNode> = {
  chat: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5z" />
      <circle cx="8.5" cy="9.5" r=".9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="9.5" r=".9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="9.5" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  people: (
    <>
      <circle cx="12" cy="7" r="2.6" />
      <circle cx="5.5" cy="9" r="2.1" />
      <circle cx="18.5" cy="9" r="2.1" />
      <path d="M7.2 20v-2.2A4.8 4.8 0 0 1 12 13a4.8 4.8 0 0 1 4.8 4.8V20" />
      <path d="M2 19v-1.4A3.5 3.5 0 0 1 5.5 14.1c.5 0 1 .1 1.4.3" />
      <path d="M22 19v-1.4a3.5 3.5 0 0 0-3.5-3.5c-.5 0-1 .1-1.4.3" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 3.6 10.8c-.6.5-1 1.2-1.1 2H9.5c-.1-.8-.5-1.5-1.1-2A6 6 0 0 1 12 3z" />
    </>
  ),
  'bulb-heart': (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 3.6 10.8c-.6.5-1 1.2-1.1 2H9.5c-.1-.8-.5-1.5-1.1-2A6 6 0 0 1 12 3z" />
      <path d="M12 12.6l-1.9-1.9a1.3 1.3 0 0 1 1.9-1.8 1.3 1.3 0 0 1 1.9 1.8z" />
    </>
  ),
  hands: (
    <>
      <path d="M3 12l4-4 5 3 5-3 4 4" />
      <path d="M7 8l2.5 7.5L12 11l2.5 4.5L17 8" />
      <path d="M3 12l3.5 4M21 12l-3.5 4" />
    </>
  ),
  devices: (
    <>
      <rect x="3" y="4" width="14" height="10" rx="1.5" />
      <path d="M8 18h5M10 14v4" />
      <rect x="15" y="10" width="6" height="10" rx="1.2" fill="var(--icon-bg, transparent)" />
      <path d="M17.5 18h1" />
    </>
  ),
  leader: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 20v-1.5A5 5 0 0 1 8 13.5h2a5 5 0 0 1 5 5V20" />
      <circle cx="17.5" cy="9" r="2.2" />
      <path d="M17 13.6a4 4 0 0 1 4 4V19" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  bars: (
    <>
      <path d="M4 20V13M10 20V9M16 20V5M22 20H2" />
    </>
  ),
  brick: (
    <>
      <path d="M4 10.5h16v7.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18z" />
      <path d="M6 10.5V8h3v2.5M10.5 10.5V8h3v2.5M15 10.5V8h3v2.5" />
    </>
  ),
  'chat-people': (
    <>
      <path d="M7 4h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5l-3 2.5V13H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <circle cx="6.5" cy="18.5" r="1.6" />
      <circle cx="12" cy="18.5" r="1.6" />
      <circle cx="17.5" cy="18.5" r="1.6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 4V2M20 12h2" />
    </>
  ),
  'chart-up': (
    <>
      <path d="M3 21h18" />
      <path d="M5 17v-4M10 17v-7M15 17v-5M20 17V8" />
      <path d="M4 9l5-4 4 3 7-6" />
      <path d="M17 2h3v3" />
    </>
  ),
  'search-people': (
    <>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M15 15l5.5 5.5" />
      <circle cx="10" cy="8.5" r="1.8" />
      <path d="M6.8 13.5a3.6 3.6 0 0 1 6.4 0" />
    </>
  ),
  strategy: (
    <>
      <rect x="4" y="4" width="16" height="17" rx="2" />
      <path d="M9 3h6v2.5H9z" />
      <path d="M8 10l2 2-2 2M12 14l4-4M13 10h3v3" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H8l8 4V4.5l-8 4H5.5A1.5 1.5 0 0 0 4 10z" />
      <path d="M19 9.5a3.5 3.5 0 0 1 0 5" />
      <path d="M8 15.5l1 4.5" />
    </>
  ),
  'megaphone-people': (
    <>
      <path d="M6 4h12a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 18 12h-5l-3 2.5V12H6a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 6 4z" />
      <path d="M9 7.5h6M9 9.5h4" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="12" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  'hand-person': (
    <>
      <circle cx="12" cy="5.5" r="2.5" />
      <path d="M8.5 12.5a3.5 3.5 0 0 1 7 0" />
      <path d="M3 16.5h3l3.5 2h5a1.2 1.2 0 0 0 0-2.4H11" />
      <path d="M9.5 18.5l6.5-.1 4-2.2a1.3 1.3 0 0 1 1.5 2l-4.8 3.3H9.5L6 20" />
    </>
  ),
  star: (
    <>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="4.5" cy="6" r="1.8" />
      <circle cx="19.5" cy="6" r="1.8" />
      <circle cx="4.5" cy="18" r="1.8" />
      <circle cx="19.5" cy="18" r="1.8" />
      <path d="M6 7.2l3.8 2.8M18 7.2l-3.8 2.8M6 16.8l3.8-2.8M18 16.8l-3.8-2.8" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <>
      <path d="M5.5 3.5h3l1.5 4-2 1.5a10 10 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3.5 5.5a2 2 0 0 1 2-2z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-4A8.5 8.5 0 1 1 8.4 19z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1a4.6 4.6 0 0 1-2.9-2.9l1-1-1-2z" />
    </>
  ),
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-down': <path d="M12 5v14M6 13l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  play: <path d="M8 5.5v13l10-6.5z" />,
};

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

/** Íconos lineales monocolor (stroke 1.75, esquinas redondeadas), en currentColor. */
export function Icon({ name, size = 24, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
