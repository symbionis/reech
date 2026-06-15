# Reech Fund

Investor-information site for **Reech Fund** — a €100M digital fund financing
large-scale corporate climate-abatement initiatives, targeting institutional returns
with auditable impact outcomes.

A Bun + Vite + React + TypeScript SPA, styled with Tailwind and shadcn/ui. Includes
the regulatory gating appropriate to a financial-product site — an entry disclaimer
modal, persistent disclaimer banner, and compliance copy.

## Develop

```sh
bun install
bun run dev
bun run build
bun run preview
```

## Structure

```
src/
├── pages/              Home, About, Strategy, FundDetails, RiskReturns,
│                       CpuMechanism, Contact
├── components/
│   ├── layout/         Header, Footer, Layout, EntryDisclaimerModal,
│   │                   DisclaimerBanner, ComplianceDisclaimer
│   └── ui/             shadcn/ui primitives
```
