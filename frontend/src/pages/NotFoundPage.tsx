import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Most nav links point at pages that are not built yet; they land here. */
export function NotFoundPage() {
  return (
    <Container className="py-24 md:py-32 [&_p]:text-left [&_p]:hyphens-manual">
      <title>Page not found · Job Training Institute</title>
      <p className="text-label text-plum-700">404</p>
      <h1 className="mt-4 text-h1 max-w-[18ch]">This page is not here yet</h1>
      <p className="mt-4 max-w-[52ch] text-body-lg">
        We are rebuilding jti.edu.au and this page has not moved across. Head back to the home page or send us an enquiry.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" size="lg" withArrow>
          Back to home
        </Button>
        <Button href="/#enquire" size="lg" variant="outline">
          Send an enquiry
        </Button>
      </div>
    </Container>
  );
}
