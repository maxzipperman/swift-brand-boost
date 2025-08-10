import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { segmentExpectations, type SegmentKey } from "@/content/segment-expectations";

interface SegmentExpectationsProps {
  defaultSegment?: SegmentKey;
  calendlyUrl?: string;
}

const SegmentExpectations = ({ defaultSegment = "professional", calendlyUrl = "https://calendly.com/" }: SegmentExpectationsProps) => {
  const segments: SegmentKey[] = ["professional", "local", "creators", "nonprofits"];

  return (
    <section className="section-padding" aria-label="What each segment expects and how we package it">
      <div className="container space-y-8">
        <header className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What each segment expects (and how we package it)
          </h2>
          <p className="text-muted-foreground mt-2">
            Align your website with buyer expectations. Same 3-offer architecture, tuned per segment.
          </p>
        </header>

        <Tabs defaultValue={defaultSegment} className="w-full">
          <TabsList className="flex flex-wrap gap-2">
            {segments.map((key) => (
              <TabsTrigger key={key} value={key} className="capitalize">
                {segmentExpectations[key].title}
              </TabsTrigger>
            ))}
          </TabsList>

          {segments.map((key) => {
            const seg = segmentExpectations[key];
            return (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="h-full">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">Must-haves</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                        {seg.mustHaves.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="h-full">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">How we package it</h3>
                      <ul className="space-y-3">
                        {seg.packaging.map((p, i) => (
                          <li key={i} className="text-muted-foreground">
                            <span className="font-medium text-foreground">{p.name}:</span> {p.summary}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 flex flex-wrap gap-3">
                        <Button asChild>
                          <a href="/contact?audit=1" aria-label="Request a Loom mini-audit">
                            Request Loom mini-audit
                          </a>
                        </Button>
                        <Button asChild variant="outline">
                          <a href={calendlyUrl} target="_blank" rel="noreferrer" aria-label="Book a discovery call on Calendly">
                            Book discovery call
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default SegmentExpectations;
