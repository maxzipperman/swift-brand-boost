import { Card, CardContent } from "@/components/ui/card";
import { segmentExpectations, type SegmentKey } from "@/content/segment-expectations";

interface SegmentExpectationsCompactProps {
  segmentKey: SegmentKey;
  heading?: string;
}

const SegmentExpectationsCompact = ({ segmentKey, heading = "What this segment expects" }: SegmentExpectationsCompactProps) => {
  const seg = segmentExpectations[segmentKey];
  return (
    <section className="section-padding" aria-label={heading}>
      <div className="container">
        <Card>
          <CardContent className="p-6 md:p-8">
            <header className="mb-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                {heading}
              </h2>
              <p className="text-muted-foreground">{seg.title}</p>
            </header>
            <ul className="grid gap-2 sm:grid-cols-2 text-muted-foreground">
              {seg.mustHaves.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block size-2 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SegmentExpectationsCompact;
