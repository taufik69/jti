"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Audience } from "@/content/types";
import { AudienceToggle } from "./AudienceToggle";
import { CourseGrid } from "./CourseGrid";

export function CourseFinder() {
  const [audience, setAudience] = useState<Audience>("domestic");

  return (
    <Section id="courses" tone="paper" labelledBy="courses-title">
      <SectionHeader
        id="courses-title"
        label="Courses"
        title="Choose a field, then the level that suits you."
        intro="Every qualification is nationally recognised. The steps show its level, from Certificate III up to Advanced Diploma."
        aside={
          <div className="mt-6">
            <AudienceToggle value={audience} onChange={setAudience} />
          </div>
        }
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={audience}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <CourseGrid audience={audience} />
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
