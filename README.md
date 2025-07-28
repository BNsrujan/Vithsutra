## what i learnt 

 If you use the variable option when importing a font in your layout, then you must reference the font via var(--your-font-variable) in your global CSS or Tailwind config — otherwise, the font will never actually be applied.

 ```

 const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

```

Now you must use that variable somewhere, typically like this:

```
html {
  font-family: var(--font-geist-sans), system-ui, sans-serif;
}

```

✅ This tells the browser: “use the --font-geist-sans font if it exists, otherwise fall back to system-ui or sans-serif.”



Without referencing var(--font-geist-sans) in your CSS:

The font is loaded ✅

The font is never used ❌

If you're not referencing it in globals.css or tailwind.config.js, don't use .variable. Use .className instead:

```

<body className={`${geistSans.className}`}>

```


## How to add the inter font 


use the google fonts 

```

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

```
applay to the body 

```
<body className={`${inter.variable} font-sans`}>
```

add the var in globals.css


This tells the browser: “use the --font-geist-sans font if it exists, otherwise fall back to system-ui or sans-serif. 

```
html {
  font-family: var(--font-inter), sans-serif;
}
```



###What is subsets?

subsets is an array that defines the language/region-specific character sets that should be included. It helps reduce font file size by including only the characters you need.



| Subset       | Description                                               |
| ------------ | --------------------------------------------------------- |
| `latin`      | Basic Latin alphabet (English and most Western languages) |
| `latin-ext`  | Extended Latin characters (for Central/Eastern European)  |
| `cyrillic`   | Cyrillic alphabet (for Russian, Bulgarian, etc.)          |
| `greek`      | Greek alphabet                                            |
| `vietnamese` | Vietnamese characters                                     |
| `devanagari` | For Hindi and other Indian languages                      |


```
const inter = Inter({
  subsets: ['latin'], // only load the basic English alphabet characters
  variable: '--font-inter'
});

```

# Clear Architecture

| Layer            | Responsibility                         |
| ---------------- | -------------------------------------- |
| `presentation`   | UI & user interaction                  |
| `application`    | Orchestrating use cases                |
| `domain`         | Pure business logic                    |
| `infrastructure` | External system access (DB, API, etc.) |


## application layer

### Characteristics of application layer

Knows what to do, but not how it's done.

Orchestrates interactions between the presentation layer and the domain layer.

Does not import from infrastructure — depends only on domain interfaces.

Holds the logic that would answer: "When the user does X, what should the app do?"

```
src/
└── application/
    ├── use-cases/
    │   ├── createUser.ts
    │   ├── getUserById.ts
    │   └── updateUser.ts
    ├── services/
    │   └── notificationService.ts
    ├── interfaces/
    │   └── userRepository.ts   ← Interface for repository (to be implemented by infra)
    ├── dtos/
    │   ├── createUserDto.ts
    │   └── userDto.ts
    └── errors/
        └── ApplicationError.ts
```

| Folder        | Purpose                                                                      |
| ------------- | ---------------------------------------------------------------------------- |
| `use-cases/`  | Holds business logic or operations (e.g., RegisterUser, UpdateProfile).      |
| `services/`   | Application-level services used across use-cases (e.g., EmailService).       |
| `interfaces/` | Contracts (interfaces) the app depends on, like Repositories or Ports.       |
| `dtos/`       | Data Transfer Objects for validating and structuring incoming/outgoing data. |
| `errors/`     | Application-specific error types (for domain-agnostic issues).               |


## Domain layer

### Characteristics of domain layer:

Pure business logic

No external dependencies

Stable and reusable

### Typical Domain Layer Folder Structure

```

src/
└── core/                      # or "domain/"
    ├── entities/
    │   ├── User.ts
    │   └── Product.ts
    ├── value-objects/
    │   ├── Email.ts
    │   └── UserId.ts
    ├── repositories/
    │   └── UserRepository.ts  # Interface only
    ├── enums/
    │   └── UserRole.ts
    ├── services/
    │   └── DomainService.ts
    └── errors/
        └── DomainError.ts
```

### Folder Descriptions

| Folder           | Description                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| `entities/`      | Core business models (e.g., `User`, `Order`) that encapsulate domain rules.       |
| `value-objects/` | Immutable objects like `Email`, `Money`, `Address` that have no identity.         |
| `repositories/`  | Interfaces that describe how domain entities are fetched/persisted.               |
| `enums/`         | Enumerations related to domain, like `UserRole`, `OrderStatus`.                   |
| `services/`      | Domain services that hold business logic that doesn’t naturally fit in an entity. |
| `errors/`        | Custom exceptions or domain-related errors.                                       |


### Notes

The domain layer should never depend on the application or infrastructure layers.

It defines what the app does, not how it does it.

Clean and testable code starts here.



## Presentation

### Characteristics of presentation layer:

No business logic. It should not directly call APIs or handle data transformations.

It receives data via props from a container or higher layer.

It’s mostly stateless or handles minimal local UI state (e.g., modal open/close).

It’s focused on layout, style, and user interaction.

```
src/
├── presentation/
│   ├── components/
│   │   └── Button.tsx
│   ├── layouts/
│   │   └── DefaultLayout.tsx
│   ├── pages/
│   │   └── HomePage.tsx
│   └── styles/
│       └── globals.css


```


## Infrastructure 

The Infrastructure Layer is responsible for the technical details: connecting to databases, sending emails, accessing files, external APIs, etc. It implements interfaces defined in the Domain or Application layer.

### Characteristics of infrastructure layer:

Database access (ORM like Prisma/TypeORM, or raw SQL)

File system access

Network APIs (e.g., external services)

Email providers

Message brokers (e.g., Kafka, RabbitMQ)

Caching (Redis)

Logging

### Typical Folder Structure

src/
└── infrastructure/
    ├── database/
    │   ├── prisma/
    │   │   ├── client.ts
    │   │   └── schema.prisma
    │   └── repositories/
    │       └── UserRepositoryImpl.ts
    ├── services/
    │   ├── EmailServiceImpl.ts
    │   └── PDFGeneratorImpl.ts
    ├── auth/
    │   └── JWTService.ts
    ├── logger/
    │   └── WinstonLogger.ts
    └── config/
        └── env.ts

### Folder Descriptions

| Folder          | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `database/`     | DB setup (Prisma/TypeORM) + concrete repository implementations. |
| `repositories/` | Classes that **implement** domain repository interfaces.         |
| `services/`     | Implements infrastructure services like email, PDF generation.   |
| `auth/`         | Infrastructure-related auth helpers like JWT, OAuth, etc.        |
| `logger/`       | Logging tools (e.g., Winston, Bunyan).                           |
| `config/`       | Environment variables, constants, configuration files.           |













### Meta data decleration 

```
export const metadata: Metadata = {
  title: "Vithsutra",
  description: "Vithsutra - Your Technology Partner",
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

```