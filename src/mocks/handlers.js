import { rest } from "msw";

let users = [
  { id: 1, name: "foo", username: "foo-username", email: "foo@gmail.com" },
  { id: 2, name: "zoo", username: "zoo-username", email: "zoo@gmail.com" },
];

export const handlers = [
  rest.get("http://localhost:3000/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: users }));
  }),
];
