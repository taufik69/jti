import { lazy, type ComponentType } from "react";

/** Wraps a named page export for React.lazy, so each route becomes its own chunk. */
function page<K extends string>(load: () => Promise<Record<K, ComponentType>>, name: K) {
  return lazy(() => load().then((module) => ({ default: module[name] })));
}

/**
 * Every route except Home loads on demand. Home stays in the main bundle because it is the
 * usual landing page and its hero is the LCP element.
 */
export const lazyRoutes: { path: string; Page: ComponentType }[] = [
  { path: "/courses", Page: page(() => import("@/pages/CoursesPage"), "CoursesPage") },
  { path: "/course/:slug", Page: page(() => import("@/pages/CourseDetailPage"), "CourseDetailPage") },
  { path: "/who-we-are", Page: page(() => import("@/pages/WhoWeArePage"), "WhoWeArePage") },
  { path: "/what-makes-jti-different", Page: page(() => import("@/pages/DifferencePage"), "DifferencePage") },
  { path: "/testimonials", Page: page(() => import("@/pages/TestimonialsPage"), "TestimonialsPage") },
  { path: "/jti-video", Page: page(() => import("@/pages/VideosPage"), "VideosPage") },
  { path: "/study", Page: page(() => import("@/pages/StudyHubPage"), "StudyHubPage") },
  { path: "/study/:slug", Page: page(() => import("@/pages/StudyPage"), "StudyPage") },
  { path: "/list-agents", Page: page(() => import("@/pages/AgentsPage"), "AgentsPage") },
  { path: "/agent-application", Page: page(() => import("@/pages/AgentApplicationPage"), "AgentApplicationPage") },
  { path: "/blogs", Page: page(() => import("@/pages/BlogPage"), "BlogPage") },
  { path: "/blog/:slug", Page: page(() => import("@/pages/BlogPostPage"), "BlogPostPage") },
  { path: "/contact-us", Page: page(() => import("@/pages/ContactPage"), "ContactPage") },
  { path: "/styleguide", Page: page(() => import("@/pages/StyleguidePage"), "StyleguidePage") },
];

export const NotFoundPage = page(() => import("@/pages/NotFoundPage"), "NotFoundPage");
