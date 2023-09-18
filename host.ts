export const HOST =
  process.env.NODE_ENV == "production"
    ? "https://enocprogrammer.vercel.app:3000"
    : "http://localhost:3000";
