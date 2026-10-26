import { ButtonShowcase } from "@/components/styleguide/ButtonShowcase";
import { CardShowcase } from "@/components/styleguide/CardShowcase";
import { ColorSwatches } from "@/components/styleguide/ColorSwatches";
import { ContrastTable } from "@/components/styleguide/ContrastTable";
import { FormShowcase } from "@/components/styleguide/FormShowcase";
import { ShapeShowcase } from "@/components/styleguide/ShapeShowcase";
import { StyleguideBlock } from "@/components/styleguide/StyleguideBlock";
import { TypeScale } from "@/components/styleguide/TypeScale";
import { Container } from "@/components/ui/Container";

export function StyleguidePage() {
  return (
    <Container className="pb-24 pt-12 md:pt-20">
      <title>Styleguide · Job Training Institute</title>
      <meta name="robots" content="noindex, nofollow" />
      <h1 className="text-h1 max-w-[18ch]">JTI design system</h1>
      <p className="mt-4 max-w-[60ch] text-body-lg">
        Tokens and base components for the jti.edu.au rebuild. Everything on the site is assembled
        from what is on this page.
      </p>
      <div className="mt-12">
        <StyleguideBlock id="colour" title="Colour" note="Contrast ratio shown on each swatch against its label colour.">
          <ColorSwatches />
        </StyleguideBlock>
        <StyleguideBlock id="contrast" title="Contrast" note="Every text pair used on the site, checked against WCAG 2.2.">
          <ContrastTable />
        </StyleguideBlock>
        <StyleguideBlock id="type" title="Type" note="Roboto only, for every heading, label and paragraph.">
          <TypeScale />
        </StyleguideBlock>
        <StyleguideBlock id="buttons" title="Buttons">
          <ButtonShowcase />
        </StyleguideBlock>
        <StyleguideBlock id="cards" title="Cards">
          <CardShowcase />
        </StyleguideBlock>
        <StyleguideBlock id="forms" title="Form fields" note="Labels always visible. Errors sit under the field and say how to fix it.">
          <FormShowcase />
        </StyleguideBlock>
        <StyleguideBlock id="shape" title="Shape and labels">
          <ShapeShowcase />
        </StyleguideBlock>
      </div>
    </Container>
  );
}
