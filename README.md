This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started / How to run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses MongoDB as database so Make sure to have MongoDB server running at [mongodb://localhost:27017](mongodb://localhost:27017).

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes

API routes can be accessed on [http://localhost:3000/api/blog](http://localhost:3000/api/blog) & [http://localhost:3000/api/users](http://localhost:3000/api/users).

Here is the Postman collection of all the API route

## Key Features

Here are some key features of this API:

- Login status of the user will be varified using JWT token with expiry time
- All passwords are salted and hashed with bcrypt 
- User can't create multiple accounts using the same email address
- User must have to provide 8 digit passwords.
- Simple GUI is also created to demonstrate above points
----------------------

- Blog API stricly follows the REST Architecture
- CRUD operation can be performed


