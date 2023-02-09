import { rest } from "msw";

let users = [];

export const handlers = [
  rest.post("http://localhost:3000/users", (req, res, ctx) => {
    const id = users[users.length - 1]?.id + 1 || 1;
    console.log("req", req);
  }),
];
