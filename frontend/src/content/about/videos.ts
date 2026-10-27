/** The four videos on jti.edu.au/jti-video, same YouTube ids, same headings. */
export interface JtiVideo {
  id: string;
  title: string;
  category: string;
}

export const jtiVideos: JtiVideo[] = [
  { id: "l_KpRuFMq_Y", title: "Life in JTI", category: "Campus life" },
  { id: "dXlPSH-JgUA", title: "Class Discussion", category: "Classroom" },
  { id: "3LiCGXlzxOw", title: "International Students", category: "International" },
  { id: "oa7z4Q4yBVM", title: "A Little Bit About Nursing", category: "Nursing" },
];

export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
