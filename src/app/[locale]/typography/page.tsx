'use client';
import { BodyText, Heading, MenuLabel } from '@/components/ges-ui/typography';
import { PrimaryButton } from '@/components/ges-ui/buttons/primary-button';
import { DownloadIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function Page() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }
  return (
    <div className="bg-background min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Hero Section */}
        <section className="space-y-6">
          <Heading size="xxl" as="h1">
            Design System Typography
          </Heading>
          <BodyText variant="text">
            Sistema completo di tipografia responsive basato sul tuo design
            system. Puoi usare sia i componenti CVA type-safe che le utility
            classes direttamente nel tuo codice.
          </BodyText>
        </section>

        {/* Headings Section */}
        <section className="space-y-8">
          <div className="bg-primary mb-8 rounded-lg p-6 text-center">
            <Heading size="l" as="h2" className="text-primary-foreground">
              HEADINGS
            </Heading>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-28 shrink-0 font-mono text-sm">
                  XXL / H1
                </span>
                <Heading size="xxl" as="h1">
                  Extra Extra Large
                </Heading>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-28 shrink-0 font-mono text-sm">
                  XL / H1
                </span>
                <Heading size="xl" as="h1">
                  Extra Large Heading
                </Heading>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-28 shrink-0 font-mono text-sm">
                  L / H2
                </span>
                <Heading size="l" as="h2">
                  Large Heading
                </Heading>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-28 shrink-0 font-mono text-sm">
                  M / H3
                </span>
                <Heading size="m" as="h3">
                  Medium Heading
                </Heading>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-28 shrink-0 font-mono text-sm">
                  S / H4
                </span>
                <Heading size="s" as="h4">
                  Small Heading
                </Heading>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-28 shrink-0 font-mono text-sm">
                  XS / H5
                </span>
                <Heading size="xs" as="h5">
                  Extra Small Heading
                </Heading>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-28 shrink-0 font-mono text-sm">
                  XXS / H6
                </span>
                <Heading size="xxs" as="h6">
                  Extra Extra Small
                </Heading>
              </div>
              <div className="bg-border h-px" />
            </div>
          </div>
        </section>

        {/* Body Section */}
        <section className="space-y-8">
          <div className="bg-primary mb-8 rounded-lg p-6 text-center">
            <Heading size="l" as="h2" className="text-primary-foreground">
              BODY TEXT
            </Heading>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-muted-foreground w-36 shrink-0 font-mono text-sm">
                  Corpo di testo
                </span>
                <BodyText variant="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </BodyText>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-36 shrink-0 font-mono text-sm">
                  Caption (Raggi)
                </span>
                <BodyText variant="caption">
                  Testo secondario con dimensione ridotta per contenuti di
                  supporto e didascalie.
                </BodyText>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-36 shrink-0 font-mono text-sm">
                  Button Label
                </span>
                <BodyText variant="button">Button Label Text</BodyText>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-36 shrink-0 font-mono text-sm">
                  Caption Label
                </span>
                <BodyText variant="label">Caption Label Text</BodyText>
              </div>
              <div className="bg-border h-px" />
            </div>
          </div>
        </section>

        {/* Menu Label Section */}
        <section className="space-y-8">
          <div className="bg-primary mb-8 rounded-lg p-6 text-center">
            <Heading size="l" as="h2" className="text-primary-foreground">
              MENU LABEL
            </Heading>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-36 shrink-0 font-mono text-sm">
                  Menu label heading
                </span>
                <MenuLabel variant="heading">Menu Heading</MenuLabel>
              </div>
              <div className="bg-border h-px" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground w-36 shrink-0 font-mono text-sm">
                  Menu label body
                </span>
                <MenuLabel variant="body">Menu Body Text</MenuLabel>
              </div>
              <div className="bg-border h-px" />
            </div>
          </div>
        </section>

        {/* Using Utility Classes Directly */}
        <section className="space-y-8">
          <div className="bg-primary mb-8 rounded-lg p-6 text-center">
            <Heading size="l" as="h2" className="text-primary-foreground">
              UTILITY CLASSES (SENZA CVA)
            </Heading>
          </div>

          <div className="space-y-6">
            <h1 className="heading-xxl">Utility Class: heading-xxl</h1>
            <h2 className="heading-xl">Utility Class: heading-xl</h2>
            <h3 className="heading-l">Utility Class: heading-l</h3>
            <p className="body-text">
              Utility Class: body-text - Puoi usare direttamente le classi
              utility nel tuo HTML senza dover importare i componenti.
            </p>
            <span className="body-button">Utility Class: body-button</span>
            <span className="menu-heading">Utility Class: menu-heading</span>
          </div>
        </section>

        {/* Real World Example */}
        <section className="space-y-8">
          <div className="bg-primary mb-8 rounded-lg p-6 text-center">
            <Heading size="l" as="h2" className="text-primary-foreground">
              ESEMPIO REALE
            </Heading>
          </div>

          <div className="border-border bg-card space-y-6 rounded-lg border p-8">
            <Heading size="xl" as="h1">
              Benvenuto nel Design System
            </Heading>

            <BodyText variant="text">
              Questo sistema di tipografia ti offre due modi per utilizzare gli
              stili: componenti CVA type-safe oppure utility classes dirette.
              Entrambi gli approcci sono completamente responsive e seguono le
              specifiche del design system per Mobile, Tablet e Desktop.
            </BodyText>

            <Heading size="m" as="h3">
              Caratteristiche Principali
            </Heading>

            <BodyText variant="caption">
              Sistema configurato con CSS variables responsive che si adattano
              automaticamente ai breakpoint senza bisogno di prefissi md: o lg:
              per ogni elemento.
            </BodyText>

            <div className="flex flex-wrap gap-4">
              <PrimaryButton icon={<DownloadIcon />} label={'Call to action'} />
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="border-border bg-muted/50 space-y-6 rounded-lg border p-8">
          <Heading size="m" as="h3">
            Come Usare il Sistema
          </Heading>

          <div className="space-y-4">
            <div>
              <Heading size="s" as="h4">
                1. Componenti CVA (Consigliato)
              </Heading>
              <BodyText variant="caption">Type-safe e flessibili:</BodyText>
              <pre className="bg-background overflow-x-auto rounded-lg p-4 font-mono text-xs">
                {`<Heading size="xl" as="h1">Titolo</Heading>
<BodyText variant="text">Paragrafo</BodyText>
<MenuLabel variant="heading">Menu</MenuLabel>`}
              </pre>
            </div>

            <div>
              <Heading size="s" as="h4">
                2. Utility Classes
              </Heading>
              <BodyText variant="caption">Uso diretto nel markup:</BodyText>
              <pre className="bg-background overflow-x-auto rounded-lg p-4 font-mono text-xs">
                {`<h1 className="heading-xl">Titolo</h1>
<p className="body-text">Paragrafo</p>
<span className="menu-heading">Menu</span>`}
              </pre>
            </div>
          </div>

          <div className="bg-background mt-6 rounded-lg p-4">
            <Heading size="s" as="h4">
              Breakpoints
            </Heading>
            <div className="space-y-2 font-mono text-xs">
              <p>
                <span className="font-bold">Mobile (MBL):</span> {'< 768px'} -
                Default
              </p>
              <p>
                <span className="font-bold">Tablet (TBL):</span> 768px - 1023px
              </p>
              <p>
                <span className="font-bold">Desktop (DSK):</span> ≥ 1024px
              </p>
            </div>
          </div>

          <div className="bg-accent/50 rounded-lg p-4">
            <BodyText variant="caption">
              <strong>Pro tip:</strong> Le dimensioni si adattano
              automaticamente ai breakpoint senza dover usare prefissi
              responsive (md:, lg:). Tutto è gestito dalle CSS variables!
            </BodyText>
          </div>
        </section>
      </div>
    </div>
  );
}
