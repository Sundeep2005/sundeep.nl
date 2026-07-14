import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type SocialLabel = 'E-mail' | 'Instagram' | 'LinkedIn' | 'GitHub';

export interface SocialLink {
  label: SocialLabel;
  href: string;
  icon: IconProp;
}

export const typingWords = [
  'Zelfstandige ondernemer',
  'Leerkracht Basisonderwijs',
  'Webontwikkelaar',
  'Horeca Medewerker',
] as const;

export const socialLinks: SocialLink[] = [
  { label: 'E-mail', href: 'mailto:sundeep.dejongh@hotmail.com', icon: ['fas', 'envelope'] },
  { label: 'Instagram', href: 'https://www.instagram.com/sundeep_2005/', icon: ['fab', 'instagram'] },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sundeepdejongh/', icon: ['fab', 'linkedin-in'] },
  { label: 'GitHub', href: 'https://github.com/Sundeep2005', icon: ['fab', 'github'] },
];
