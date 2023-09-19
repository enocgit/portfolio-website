// export const HOST = "https://enocprogrammer.vercel.app"
// export const HOST = "http://localhost:3000";

export const HOST = process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "https://enocprogrammer.vercel.app"