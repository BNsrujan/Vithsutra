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