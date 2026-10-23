import { Button } from "@/components/ui/Button";

export function ButtonShowcase() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 rounded-card border border-line bg-paper p-6">
        <Button withArrow>Apply now</Button>
        <Button variant="secondary">Find a course</Button>
        <Button variant="outline">Download handbook</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-card border border-line bg-paper p-6">
        <Button size="lg" withArrow>
          Apply now
        </Button>
        <Button size="lg" variant="secondary">
          Find a course
        </Button>
        <Button size="lg" variant="outline">
          Talk to us
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-card bg-plum-950 p-6">
        <Button withArrow>Apply now</Button>
        <Button variant="inverse">Call 1300 144 584</Button>
      </div>
      <p className="max-w-[65ch] text-[0.9375rem] text-muted">
        Two heights only: 44px (md) and 52px (lg). Gold is the single primary action per view; the
        arrow slides 3px on hover. Inverse is for plum backgrounds.
      </p>
    </div>
  );
}
