<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>

<br />

<div align="center">

# Invoicely

### Modern, Open-Source Invoice Generation Platform

<p>
  <strong>Built with Next.js 15, tRPC, Drizzle ORM, and TypeScript</strong>
</p>

<p>
  <a href="#-quick-start">Quick Start</a> &bull;
  <a href="#-features">Features</a> &bull;
  <a href="#-tech-stack">Tech Stack</a> &bull;
  <a href="#-system-architecture">Architecture</a> &bull;
  <a href="#-contributing">Contributing</a> &bull;
  <a href="#-license">License</a>
</p>

<p>
  <img src="https://img.shields.io/github/license/legions-developer/invoicely" alt="License" />
  <img src="https://img.shields.io/github/stars/legions-developer/invoicely" alt="Stars" />
  <img src="https://img.shields.io/github/forks/legions-developer/invoicely" alt="Forks" />
  <img src="https://img.shields.io/github/issues/legions-developer/invoicely" alt="Issues" />
  <img src="https://img.shields.io/github/last-commit/legions-developer/invoicely" alt="Last Commit" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
</p>

</div>

---

> **[!CAUTION]**
> We do not allow vibe coding. Your PR will be rejected if the code quality is poor and vibe coded.

---

## Quick Start

### Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| **Node.js** | `>= 20` | LTS recommended |
| **Yarn** | `>= 4.9.1` | Auto-managed via `packageManager` field |
| **PostgreSQL** | Any recent version | Used via Neon Database (serverless) |
| **Git** | Any | For cloning the repository |

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/legions-developer/invoicely.git
cd invoicely
```

**2. Install dependencies**

```bash
yarn install
```

**3. Set up environment variables**

```bash
# Create environment file in root directory
cp .env.example .env

# Create symlinks for environment variables across apps
yarn sys-link
```

**4. Set up the database**

```bash
# Generate database schema
yarn db:generate

# Run database migrations
yarn db:migrate
```

**5. Start development server**

```bash
yarn dev
```

The app will be available at **`http://localhost:3000`**

---

## Features

### Invoice Management

- **Create Invoices** -- Full-featured invoice builder with real-time preview
- **Edit Invoices** -- Modify existing invoices with full CRUD operations
- **Invoice Status Tracking** -- Track invoice lifecycle: `pending` | `success` | `error` | `expired` | `refunded`
- **Local & Server Invoices** -- Store invoices locally (IndexedDB) or on the server (PostgreSQL)
- **Invoice Migration** -- Seamlessly migrate local invoices to the server database
- **PDF Generation** -- Export invoices as professional PDF documents with multiple templates
- **Custom Theming** -- Light/dark mode with customizable base colors per invoice

### Client & Company Details

- **Company Profiles** -- Store company name, address, logo, and signature
- **Client Management** -- Manage client details with custom metadata fields
- **Flexible Metadata** -- Add unlimited custom label-value pairs to company and client details

### Line Items & Billing

- **Itemized Billing** -- Add line items with name, description, quantity, and unit price
- **Billing Adjustments** -- Support for fixed amounts and percentage-based adjustments
- **Multi-Currency Support** -- Generate invoices in any currency with proper formatting
- **Precision Arithmetic** -- Decimal.js powered calculations for accurate financial math
- **Auto-calculations** -- Automatic subtotal, tax, and total calculations

### Payment & Terms

- **Payment Terms** -- Configurable payment terms per invoice
- **Due Date Tracking** -- Set and track invoice due dates
- **Payment Information** -- Add bank details and payment instructions
- **Notes & Terms** -- Custom notes and terms & conditions per invoice

### Document Features

- **PDF Templates** -- Multiple professionally designed PDF templates (Default, Vercel)
- **Digital Signatures** -- Draw and attach signatures to invoices via canvas
- **Logo Upload** -- Upload and attach company logos via Cloudflare R2 storage
- **Serial Numbering** -- Configurable invoice prefix and serial number system

### Authentication & Security

- **Google OAuth** -- Sign in with Google account
- **Session Management** -- Secure session-based authentication via Better Auth
- **Protected Routes** -- Dashboard routes require authentication
- **Data Privacy** -- User data isolation with `allowedSavingData` consent flag

### Developer Experience

- **Type-Safe Stack** -- End-to-end type safety from database to UI
- **Monorepo Architecture** -- Turborepo-powered monorepo with shared packages
- **Hot Reload** -- Turbopack-powered development with instant updates
- **Code Quality** -- ESLint, Prettier, and Husky pre-commit hooks

### Analytics & Monitoring

- **PostHog Analytics** -- Product analytics and user behavior tracking
- **OpenPanel Analytics** -- Privacy-focused alternative analytics
- **Sentry Error Tracking** -- Real-time error monitoring and alerting
- **Vercel Analytics** -- Web vitals and performance monitoring

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | `15.3.6` | React framework with App Router |
| **React** | `19.1.4` | UI library |
| **TypeScript** | `5.8.2` | Type-safe JavaScript |

### API & Data Layer

| Technology | Version | Purpose |
|------------|---------|---------|
| **tRPC** | `11.1.2` | End-to-end type-safe APIs |
| **TanStack Query** | `5.76.1` | Server state management |
| **Jotai** | `2.12.3` | Atomic client state management |
| **Zod** | `3.25.7` | Runtime schema validation |
| **SuperJSON** | `2.2.2` | Enhanced JSON serialization |

### Database & ORM

| Technology | Version | Purpose |
|------------|---------|---------|
| **Drizzle ORM** | `0.43.1` | Type-safe database ORM |
| **Neon Database** | -- | Serverless PostgreSQL |
| **Drizzle Kit** | `0.31.1` | Schema migration tooling |

### Authentication

| Technology | Version | Purpose |
|------------|---------|---------|
| **Better Auth** | `1.2.8` | Modern authentication library |
| **Google OAuth** | -- | Social authentication provider |

### UI & Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | `4` | Utility-first CSS framework |
| **Radix UI** | -- | Headless UI component primitives |
| **Shadcn/ui** | -- | Re-usable component library |
| **Lucide React** | `0.506.0` | Icon library |
| **Motion** | `12.10.5` | Animation library |
| **Next Themes** | `0.4.6` | Theme management (dark/light mode) |
| **Class Variance Authority** | `0.7.1` | Component variant management |
| **cmdk** | `1.1.1` | Command palette component |

### File Storage & PDF

| Technology | Version | Purpose |
|------------|---------|---------|
| **Cloudflare R2** | -- | S3-compatible object storage |
| **@react-pdf/renderer** | `4.3.0` | Server-side PDF generation |
| **react-pdf-tailwind** | `2.3.0` | Tailwind styling for PDF documents |
| **AWS SDK** | `3.842.0` | S3 client for R2 operations |

### Forms & Validation

| Technology | Version | Purpose |
|------------|---------|---------|
| **React Hook Form** | `7.56.1` | Form state management |
| **@hookform/resolvers** | `5.0.1` | Zod resolver for form validation |
| **Decimal.js** | `10.5.0` | Arbitrary precision arithmetic |

### Monitoring & Analytics

| Technology | Version | Purpose |
|------------|---------|---------|
| **Sentry** | `9.41.0` | Error tracking and performance monitoring |
| **PostHog** | `1.239.1` | Product analytics |
| **OpenPanel** | `1.0.8` | Privacy-focused analytics |
| **Vercel Analytics** | `1.5.0` | Web vitals and performance |

### Build & Dev Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| **Turborepo** | `2.5.3` | Monorepo build system |
| **Turbopack** | -- | Next.js bundler (Rust-based) |
| **ESLint** | `9` | Code linting |
| **Prettier** | `3.5.3` | Code formatting |
| **Husky** | `9.1.7` | Git hooks |
| **patch-package** | `8.0.0` | Package patching |
| **dotenv-cli** | `8.0.0` | Environment variable loading |

### Content & Blog

| Technology | Version | Purpose |
|------------|---------|---------|
| **Content Collections** | `0.8.2` | MDX content management |
| **Fumadocs UI** | `15.2.15` | Documentation/blog UI components |
| **Rehype Slug** | `6.0.0` | Heading anchor links |
| **Rehype Autolink Headings** | `7.1.0` | Automatic heading links |

### Utilities

| Technology | Version | Purpose |
|------------|---------|-------|
| **date-fns** | `4.1.0` | Date manipulation |
| **Lodash** | `4.17.21` | General utility functions |
| **UUID** | `11.1.0` | Unique identifier generation |
| **neverthrow** | `8.2.0` | Result type for error handling |
| **devalue** | `5.1.1` | Safe serialization |
| **currency-symbol-map** | `5.1.0` | Currency symbol lookup |
| **number-to-words** | `1.2.4` | Number word conversion |
| **sonner** | `2.0.3` | Toast notifications |

---

## System Architecture

### High-Level Architecture

```mermaid
flowchart TB
    subgraph Client["Client Layer"]
        Browser["Browser"]
        IndexedDB["IndexedDB\n(Local Storage)"]
    end

    subgraph NextJS["Next.js Application"]
        subgraph AppRouter["App Router"]
            Marketing["Marketing Pages\n/ (landing)"]
            Blog["Blog Pages\n/blogs, /blog/[slug]"]
            Dashboard["Dashboard\n(invoice management)"]
            Auth["Auth Routes\n/api/auth/*"]
            TRPCRoute["tRPC API\n/api/trpc/*"]
        end

        subgraph Components["Component Layer"]
            UI["UI Components\n(Radix + Shadcn)"]
            PDF["PDF Components\n(@react-pdf)"]
            Forms["Form Components\n(React Hook Form)"]
            DataTable["Data Table\n(TanStack Table)"]
        end

        subgraph StateMgmt["State Management"]
            TanStackQuery["TanStack Query\n(Server State)"]
            JotaiState["Jotai\n(Client State)"]
        end
    end

    subgraph Server["Server Layer"]
        subgraph tRPC["tRPC Server"]
            Middleware["Middleware\nAuth + S3"]
            Procedures["Procedures\n(Authorized)"]
            subgraph Services["Services"]
                InvoiceSvc["Invoice Service\nCRUD + Status"]
                CloudflareSvc["Cloudflare Service\nImage Ops"]
            end
        end
    end

    subgraph Database["Database Layer"]
        NeonDB[("Neon PostgreSQL\n(Serverless)")]
        Drizzle["Drizzle ORM\n(Schema + Migrations)"]
    end

    subgraph AuthLayer["Authentication"]
        BetterAuth["Better Auth"]
        GoogleOAuth["Google OAuth"]
        Sessions[("Sessions Table")]
    end

    subgraph Storage["Storage Layer"]
        R2["Cloudflare R2\n(Object Storage)"]
    end

    subgraph External["External Services"]
        Sentry["Sentry\n(Error Tracking)"]
        PostHog["PostHog\n(Analytics)"]
        OpenPanel["OpenPanel\n(Analytics)"]
        Vercel["Vercel\n(Hosting + Analytics)"]
    end

    Browser --> NextJS
    Browser <--> IndexedDB
    NextJS --> Auth
    NextJS --> TRPCRoute
    Dashboard --> Components
    Components --> StateMgmt
    TanStackQuery --> tRPC
    tRPC --> Middleware
    Middleware --> Procedures
    Procedures --> Services
    InvoiceSvc --> Drizzle
    Drizzle --> NeonDB
    BetterAuth --> GoogleOAuth
    BetterAuth --> Sessions
    Sessions --> NeonDB
    CloudflareSvc --> R2
    PDF --> R2
    NextJS --> External
```

### Data Flow

```mermaid
flowchart LR
    subgraph Create["Invoice Creation"]
        Form["Invoice Form"] --> Validation["Zod Validation"]
        Validation --> tRPCReq["tRPC Request"]
        tRPCReq --> AuthMW["Auth Middleware"]
        AuthMW --> DBInsert["DB Insert"]
        DBInsert --> PostgreSQL[("PostgreSQL")]
    end

    subgraph Render["Invoice Rendering"]
        Query["TanStack Query"] --> Fetch["tRPC Fetch"]
        Fetch --> Transform["Data Transform"]
        Transform --> Preview["Live Preview"]
        Transform --> PDFGen["PDF Generation"]
        PDFGen --> Download["Download/Upload"]
    end

    subgraph Storage["File Storage"]
        Upload["Image Upload"] --> S3Client["AWS S3 Client"]
        S3Client --> R2["Cloudflare R2"]
        R2 --> PublicURL["Public URL"]
        PublicURL --> Display["Display in UI/PDF"]
    end
```

### Database Schema

```mermaid
erDiagram
    users ||--o{ sessions : has
    users ||--o{ accounts : has
    users ||--o{ invoices : creates

    invoices ||--|| invoiceFields : has

    invoiceFields ||--|| invoiceCompanyDetails : contains
    invoiceFields ||--|| invoiceClientDetails : contains
    invoiceFields ||--|| invoiceDetails : contains
    invoiceFields ||--|| invoiceMetadata : contains
    invoiceFields ||--o{ invoiceItems : contains

    invoiceCompanyDetails ||--o{ invoiceCompanyDetailsMetadata : has
    invoiceClientDetails ||--o{ invoiceClientDetailsMetadata : has
    invoiceDetails ||--o{ invoiceDetailsBillingDetails : has
    invoiceMetadata ||--o{ invoiceMetadataPaymentInformation : has

    users {
        uuid id PK
        text name
        text email UK
        boolean emailVerified
        text image
        timestamp createdAt
        timestamp updatedAt
        boolean allowedSavingData
    }

    sessions {
        uuid id PK
        timestamp expiresAt
        text token UK
        uuid userId FK
        text ipAddress
        text userAgent
    }

    accounts {
        uuid id PK
        text accountId
        text providerId
        uuid userId FK
        text accessToken
        text refreshToken
    }

    invoices {
        uuid id PK
        invoice_type type
        invoice_status status
        uuid userId FK
        timestamp paidAt
    }

    invoiceFields {
        uuid id PK
        uuid invoiceId FK
    }

    invoiceCompanyDetails {
        uuid id PK
        text name
        text address
        text logo
        text signature
        uuid invoiceFieldId FK
    }

    invoiceClientDetails {
        uuid id PK
        text name
        text address
        uuid invoiceFieldId FK
    }

    invoiceDetails {
        uuid id PK
        jsonb theme
        text currency
        text prefix
        text serialNumber
        timestamp date
        timestamp dueDate
        text paymentTerms
        uuid invoiceFieldId FK
    }

    invoiceItems {
        uuid id PK
        text name
        text description
        integer quantity
        decimal unitPrice
        uuid invoiceFieldId FK
    }

    invoiceMetadata {
        uuid id PK
        text notes
        text terms
        uuid invoiceFieldId FK
    }
```

---

## Project Structure

```
invoicely/
├── apps/
│   └── web/                          # Next.js 15 web application
│       ├── src/
│       │   ├── app/                  # App Router pages & API routes
│       │   │   ├── (dashboard)/      # Protected dashboard routes
│       │   │   │   ├── assets/       # Asset management (logos, signatures)
│       │   │   │   ├── create/       # Invoice creation
│       │   │   │   │   └── invoice/  # Invoice builder with templates
│       │   │   │   ├── edit/         # Invoice editing
│       │   │   │   └── invoices/     # Invoice listing
│       │   │   ├── (marketing)/      # Public marketing pages
│       │   │   │   ├── blog/         # Dynamic blog pages
│       │   │   │   └── blogs/        # Blog listing
│       │   │   └── api/              # API routes
│       │   │       ├── auth/         # Better Auth endpoints
│       │   │       └── trpc/         # tRPC handler
│       │   ├── components/           # Reusable UI components
│       │   │   ├── layout/           # Layout components (sidebar, landing)
│       │   │   ├── pdf/              # PDF template components
│       │   │   ├── table-columns/    # Table column definitions
│       │   │   └── ui/               # Shadcn/ui components
│       │   ├── hooks/                # Custom React hooks
│       │   ├── lib/                  # Utility libraries
│       │   ├── providers/            # Context providers
│       │   ├── trpc/                 # tRPC client configuration
│       │   ├── types/                # TypeScript type definitions
│       │   └── zod-schemas/          # Zod validation schemas
│       ├── public/                   # Static assets
│       └── next.config.ts            # Next.js + Sentry + Content Collections config
│
├── packages/
│   ├── db/                           # Database package
│   │   ├── src/
│   │   │   ├── schema/              # Drizzle ORM schemas
│   │   │   │   ├── invoice.ts       # Invoice tables & relations
│   │   │   │   └── user.ts          # Auth tables (users, sessions, accounts)
│   │   │   └── index.ts             # Database exports
│   │   └── migrations/              # Generated migration files
│   │
│   ├── utilities/                   # Shared utility functions
│   │   └── src/
│   │       └── env/                 # Environment variable validation
│   │
│   ├── eslint-config/               # Shared ESLint configuration
│   └── typescript-config/           # Shared TypeScript configuration
│
├── turbo.json                       # Turborepo pipeline configuration
├── env-links.sh                     # Environment symlink script
├── package.json                     # Root workspace configuration
├── .husky/                          # Git hooks
└── yarn.lock                        # Dependency lock file
```

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# ──────────────────────────────────────────────
# Database
# ──────────────────────────────────────────────
DATABASE_URL="postgresql://username:password@localhost:5432/invoicely"

# ──────────────────────────────────────────────
# Authentication (Better Auth + Google OAuth)
# ──────────────────────────────────────────────
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# ──────────────────────────────────────────────
# Cloudflare R2 Storage
# ──────────────────────────────────────────────
CF_R2_ENDPOINT="your-r2-endpoint"
CF_R2_ACCESS_KEY_ID="your-access-key"
CF_R2_SECRET_ACCESS_KEY="your-secret-key"
CF_R2_BUCKET_NAME="your-bucket-name"
CF_R2_PUBLIC_DOMAIN="your-public-domain"

# ──────────────────────────────────────────────
# Analytics
# ──────────────────────────────────────────────
NEXT_PUBLIC_POSTHOG_HOST="your-posthog-host"
NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"

# ──────────────────────────────────────────────
# Public URLs
# ──────────────────────────────────────────────
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_TRPC_BASE_URL="http://localhost:3000/api/trpc"
```

### Environment Management

> The project uses a **symlink-based approach** for environment management:
>
> - Run `yarn sys-link` to create symlinks from the root `.env` file to all apps
> - This ensures consistent environment variables across the monorepo
> - Environment variables are validated at runtime using `@t3-oss/env-nextjs` and Zod

---

## Available Scripts

### Root Level Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Dev** | `yarn dev` | Start development servers for all apps |
| **Build** | `yarn build` | Build all apps for production |
| **Start** | `yarn start` | Start production servers |
| **Production** | `yarn production` | Build + Start in sequence |
| **Lint** | `yarn lint` | Lint all packages |
| **Lint Fix** | `yarn lint:fix` | Auto-fix linting issues |
| **Format** | `yarn format` | Format code with Prettier |
| **Type Check** | `yarn check-types` | Type check all packages |
| **Dev + Scan** | `yarn dev:scan` | Dev server + React Scan profiler |

### Database Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Generate** | `yarn db:generate` | Generate Drizzle migration files |
| **Migrate** | `yarn db:migrate` | Run pending migrations |
| **Push** | `yarn db:push` | Push schema changes directly (skip migration) |
| **Studio** | `yarn db:studio` | Open Drizzle Studio (visual DB editor) |

### Utility Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Sys Link** | `yarn sys-link` | Create environment symlinks across apps |
| **Reset** | `yarn reset-repo` | Clean all build artifacts and dependencies |

---

## Configuration

### Turborepo

The monorepo is powered by **Turborepo** with the following task pipeline:

- **`build`** -- Depends on upstream builds; caches `.next/**` output; reads env vars for DB, Auth, R2, and Sentry
- **`dev`** -- No caching; persistent process
- **`start`** -- Depends on build; no caching
- **`lint`** / **`check-types`** -- Depends on upstream tasks
- **`db:*`** -- All database tasks require `DATABASE_URL` and are never cached

### Next.js

- **Turbopack** enabled for development (`next dev --turbopack`)
- **Sentry** integration for error tracking and source maps
- **Content Collections** for blog/MDX content
- **PostHog** rewrite rules for analytics proxying
- **Strict mode** enabled
- **Production source maps** enabled for debugging

### Code Style

- **Prettier** with Tailwind CSS and import sorting plugins
- **ESLint** with Next.js configuration
- **Husky** pre-commit hooks for automated checks

---

## Naming Conventions

### Files and Directories

- **Directories**: `lowercase-with-dashes` (e.g., `components/auth-wizard`)
- **Components**: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- **Client Components**: `*.client.tsx` suffix for components using `"use client"`
- **Utilities**: `camelCase.ts` (e.g., `formatCurrency.ts`)

### Variables and Functions

- **Variables**: `camelCase` (e.g., `userName`, `isLoading`, `hasError`)
- **Constants**: `SCREAMING_SNAKE_CASE` (e.g., `R2_PUBLIC_URL`, `TOAST_OPTIONS`)
- **Functions**: `camelCase` with descriptive verbs (e.g., `createInvoice`, `validateEmail`)
- **Booleans**: Prefix with `is` / `has` / `can` (e.g., `isLoading`, `hasPermission`, `canEdit`)

### TypeScript

- **Interfaces**: `PascalCase` (e.g., `UserProfile`, `InvoiceData`)
- **Zod Schemas**: Prefix with `Zod` (e.g., `ZodInvoiceSchema`, `ZodUserSchema`)
- **Exports**: Named exports preferred over default exports

### Code Patterns

- Use the `function` keyword for pure functions
- Prefer functional and declarative programming patterns
- Structure files: exported component, subcomponents, helpers, static content, types

---

## Contributing

We welcome contributions to Invoicely!

### Branch Naming Convention

- Format: `profilename/featurename`
- Examples: `john/add-dark-mode`, `sarah/fix-invoice-validation`

### Pull Request Guidelines

- **PR Title Format**: `type: description`
  - `feature: add invoice templates`
  - `fix: resolve authentication redirect issue`
  - `chore: update dependencies`

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch following the naming convention
3. **Make** your changes following the code style guidelines
4. **Test** your changes thoroughly
5. **Submit** a pull request with a descriptive title and description

### Important Notes

> **[!IMPORTANT]**
> - **Do NOT push database migrations** -- Migrations are reviewed and managed by maintainers
> - Ensure all checks pass before submitting
> - Follow the existing code style and conventions
> - Update documentation for any new features

### Code Review Process

- All PRs require review from at least one maintainer
- Ensure your code follows TypeScript best practices
- Write meaningful commit messages
- Keep PRs focused and atomic

---

## Documentation

### Core

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### API & Data

- [tRPC Docs](https://trpc.io/docs)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Jotai Docs](https://jotai.org)
- [Zod Docs](https://zod.dev)

### Database & Auth

- [Drizzle ORM Docs](https://orm.drizzle.team)
- [Better Auth Docs](https://www.better-auth.com)
- [Neon Docs](https://neon.tech/docs)

### UI & Styling

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com)
- [Shadcn/ui Docs](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

### Dev Tools

- [Turborepo Docs](https://turbo.build/repo/docs)
- [ESLint Docs](https://eslint.org/docs)
- [Prettier Docs](https://prettier.io/docs)

---

## License

This project is licensed under the **MIT License** -- see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built by the community, for the community.**

<a href="https://www.star-history.com/#legions-developer/invoicely&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=legions-developer/invoicely&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=legions-developer/invoicely&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=legions-developer/invoicely&type=Date" />
  </picture>
</a>

</div>
