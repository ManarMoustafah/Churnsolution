import { type RouteConfig, index, route } from "@react-router/dev/routes";
//initionalize the initiole route

export default [
  index("routes/Home/Home.tsx"),
  route("BookDemo", "routes/BookDemo.tsx"),
  route("CaseStudies", "routes/CaseStudies.tsx"),
  route("ContactUs", "routes/ContactUs.tsx"),
  route("Pricing", "routes/Pricing.tsx"),
  route("Products", "routes/Products.tsx"),
  route("SignUp", "routes/SignUp.tsx"),
  route("Blog", "routes/Blog.tsx"),
  route("Article/:id", "routes/Article.tsx", { id: "article-by-id" }),
  route("Article/manar", "routes/Article.tsx", { id: "article-manar" }),
  route("AddBlog", "routes/AddBlog.tsx"),
] satisfies RouteConfig;
