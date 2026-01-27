# Next.js Project with next-intl

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🌍 Internationalization (i18n)

This project uses [**next-intl**](https://next-intl.dev/) to manage multi-language support.

### Localization Structure

All translation files are located in the `/messages` directory at the root of the project, as shown below:

- `messages/en.json`: English translations (Default).
- `messages/it.json`: Italian translations.
- `messages/en.d.json.ts`: TypeScript definitions for messages to ensure type-safety across the app.

### JSON Structure Example

The translation files follow a nested structure. Here is a snippet of how the data is organized in `messages/it.json`:

```json
{
  "HomePage": {
    "Hero": {
      "title": "Entra anche tu nella community <primary>NextCharge</primary>",
      "description": "Ricarica in modo semplice e flessibile attraverso il circuito NextCharge.",
      "button": "Scarica l’app"
    },
    "SectionDownload": {
      "title": "SCARICA ORA",
      "buttons": {
        "apple-store": "App Store",
        "google-play": "Google Play"
      }
    }
  },
  "Footer": {
    "copyright": "© Copyright {year}. Go Electric Stations SRLS"
  }
}
```

### Usage Example

To use translations within a Server or Client Component, you can use the `getTranslations(server)` or `useTranslations(client)` hook:

```tsx
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <section>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </section>
  );
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
