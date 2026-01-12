export const onRequest = async (context : any) => {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Old Shopify routes — permanently gone
  if (
    path === "/products" ||
    path.startsWith("/products/") ||
    path === "/password"
  ) {
    return new Response("Gone", { status: 410 });
  }

  // Everything else → normal site
  return context.next();
};
