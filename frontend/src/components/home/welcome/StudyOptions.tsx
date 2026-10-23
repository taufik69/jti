import { Clock, MonitorSmartphone, Users } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

const options = [
  { icon: Users, name: "Face-to-face", text: "Classes on campus with your trainer." },
  { icon: MonitorSmartphone, name: "Blended", text: "Live Zoom classes plus practical sessions." },
  { icon: Clock, name: "Self-paced", text: "Online, on your own schedule." },
];

export function StudyOptions() {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-medium text-ink">Study options at JTI</h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
        {options.map((option) => (
          <li key={option.name} className="rounded-card border border-line bg-canvas p-5">
            <span className="flex size-11 items-center justify-center rounded-control bg-plum-700 text-gold-400">
              <Icon icon={option.icon} />
            </span>
            <p className="mt-4 font-medium text-ink">{option.name}</p>
            <p className="mt-1 text-[0.9375rem] leading-snug">{option.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
