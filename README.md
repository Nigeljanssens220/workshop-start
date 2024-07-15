This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Code challenge

1. Create a new page called `src/app/forms.tsx`
2. Create a new layout called `src/app/(main)layout.tsx`. This will be the main layout for the entire app. What happens if you navigate to the `/forms` page?
3. Think about what you would want in an app wide layout. A navbar? A sidebar? A footer? What would you put in each of these areas?
4. Create a new form where the user can enter their name and email on the `/forms` page. When the form is submitted, the user should be redirected to the `/forms/success` page. (Hint: you can use the useRouter hook to redirect the user after the form is submitted).
5. Bonus: Add partial functionality or UI based on features from your own projects!

