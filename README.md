This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Supabase local setup and quick test

1. Copy the sample env file and fill it with values from your Supabase project:

```powershell
copy .env.local.sample .env.local
# Then open .env.local and paste your SUPABASE_SERVICE_ROLE_KEY and SUPABASE_URL
```

2. Restart the dev server:

```powershell
pnpm run dev
```

3. Test insert (POST) from PowerShell — replace name/contact as needed:

```powershell
$body = '{"name":"Test user","contact":"+1234567890"}'
Invoke-RestMethod -Method Post -Uri http://localhost:3000/api/profiles -Body $body -ContentType 'application/json' | ConvertTo-Json
```

4. Check stored rows with GET:

```powershell
Invoke-RestMethod -Method Get -Uri http://localhost:3000/api/profiles | ConvertTo-Json
```

Notes:

- If you do not set `SUPABASE_SERVICE_ROLE_KEY`, the API will fall back to the anon key (if provided) but inserts may be blocked by Row-Level Security (RLS) and you will receive a 403 with guidance.
- To allow inserts without the service role key, configure an RLS policy for the `profiles` table in Supabase.

If you want, I can also add an example SQL policy to allow authenticated inserts only.
