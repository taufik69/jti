export type Audience = "domestic" | "international";

export type FieldId =
  | "individual-support"
  | "early-childhood"
  | "community-services"
  | "mental-health"
  | "business"
  | "short-courses";

export interface Qualification {
  code: string;
  title: string;
  level: string;
  /** Australian Qualifications Framework level: 3 = Certificate III … 6 = Advanced Diploma. */
  aqf: 3 | 4 | 5 | 6;
  field: FieldId;
}

export interface CourseGroup {
  title: string;
  href: string;
  audience: Audience;
  codes: string[];
  /** Study modes as published on jti.edu.au/mode-of-study. */
  modes: string[];
  /** Courses without a national code, e.g. short courses. */
  items?: string[];
}

export interface NavLink {
  label: string;
  href: string;
  meta?: string;
  external?: boolean;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

export interface NavFeature {
  label: string;
  title: string;
  href: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
  columns?: NavColumn[];
  feature?: NavFeature;
  /** "See everything" link under the panel. */
  footer?: NavLink;
}
