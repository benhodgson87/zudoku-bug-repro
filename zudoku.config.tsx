import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  navigation: [
    { type: "link", label: "Users API", to: "/users-api-spec" },
    { type: "link", label: "Orders API", to: "/orders-api-spec" },
    { type: "link", label: "Products API", to: "/products-api-spec" },
  ],
  redirects: [{ from: "/", to: "/users-api-spec" }],
  catalogs: {
    path: "/api-specs",
    label: "API Specs",
    items: ["users-api-spec", "orders-api-spec", "products-api-spec"],
  },
  apis: [
    {
      type: "file",
      input: "./specs/users-api-spec/src/index.yml",
      path: "/users-api-spec",
      categories: [{ label: "General", tags: ["Users"] }],
    },
    {
      type: "file",
      input: "./specs/orders-api-spec/src/index.yml",
      path: "/orders-api-spec",
      categories: [{ label: "General", tags: ["Orders"] }],
    },
    {
      type: "file",
      input: "./specs/products-api-spec/src/index.yml",
      path: "/products-api-spec",
      categories: [{ label: "General", tags: ["Products"] }],
    },
  ],
};

export default config;
