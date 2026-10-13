# Sevana PWA MVP

A lightweight, mobile-first local-services PWA starter built with Next.js App Router, TypeScript, Supabase, and Tailwind CSS v4.

## Included

- Home page with five Quick Actions: Hotlines, Taxi, Find Donor, Need Blood, Workers
- Two-second logo splash screen
- Install App / Continue on Website prompt
- PWA manifest, icon, and a basic service worker
- Hotlines categories and phone-call actions
- Taxi categories: Cars, Auto, Tourist Bus, Rent a Car
- Workers categories: Plumbing & Wiring, Repair, Construction, Painting
- Blood-group donor search
- Blood request form and WhatsApp message flow
- Supabase Auth admin login
- Admin dashboard with listing, donor, and blood-request management
- Supabase SQL schema and RLS policies
- No content images; icon-led UI

## Requirements

- Node.js 20.9+ (Node 22 recommended)
- A Supabase project

## Run locally

1. Extract the ZIP and open the folder in a terminal.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_GROUP_URL` (your actual group invite)
   - `NEXT_PUBLIC_APP_LOCATION` (defaults to Meenarkuzhi, Malappuram)

4. In Supabase Dashboard → SQL Editor, run `supabase/schema.sql`.
5. Create an admin user in Supabase Authentication.
6. Copy the user's UUID from Authentication and assign the admin role by running the final SQL example in `supabase/schema.sql`.
7. Start the development server:

   ```bash
   npm run dev
   ```

8. Open `http://localhost:3000`.

## Routes

- `/` — Home
- `/services` — All services
- `/hotlines` and `/hotlines/[category]`
- `/transport` and `/transport/[category]`
- `/workers` and `/workers/[category]`
- `/donors`
- `/blood-request`
- `/profile`
- `/admin/login`
- `/admin`
- `/admin/listings?kind=hotline|transport|worker`
- `/admin/donors`
- `/admin/requests`

## Notes and limitations

- This is an MVP starter, not a deployed or production-audited service. Configure environment variables, test all flows, and run `npm run build` before deployment.
- PWA installation is browser-dependent. `beforeinstallprompt` is not supported in every browser; iOS users get manual Add to Home Screen guidance. Localhost works for development; production install requires HTTPS.
- A normal WhatsApp group invite cannot silently post a message to a group. This MVP opens the group if configured, but the user must send the message manually. Without a configured group URL, it opens a prefilled WhatsApp share message.
- If Supabase isn't configured, directory screens display empty states instead of fake phone numbers.
- Donor information is sensitive. Only add donors with explicit consent and keep availability accurate.
- Do not treat the directory as an authoritative emergency dispatch system. Verify emergency contacts before adding them.
- Never put a Supabase service-role key in a `NEXT_PUBLIC_` variable or browser code.
- Before production use, consider rate limiting and anti-spam controls for public blood request submissions, data-retention policy, monitoring, backups, and accessibility testing.


## Launch UI update notes

- The admin dashboard no longer links to the blood-request manager.
- Admin service management opens category tiles first. Open a category to add, edit, delete, search and reorder its listings.
- Public listing pages sort by `service_listings.sort_order`, so saved admin ordering is reflected on the user side.
- Hotline, transport and worker categories and their listing cards use category-specific Lucide icons.
- The admin UI hides the public bottom navigation.

### Required Supabase migration

Before using the updated build, open Supabase Dashboard → SQL Editor and run:

`supabase/migrations/20261012_listing_order.sql`

This adds the persistent `sort_order` column and gives existing records an initial order. Keep the existing admin RLS policies enabled.

### Environment setup

Copy `.env.example` to `.env.local` and enter your own Supabase URL, anon key and any app-specific settings. Never publish `.env.local` or service-role keys in a client bundle or ZIP shared publicly.
