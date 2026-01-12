export const onRequest = async (context: any) => {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Old Shopify routes — permanently gone
  if (
    path === "/products" ||
    path.startsWith("/products/") ||
    path === "/password"
  ) {
    // Fetch the branded 410 page
    const response = await context.env.ASSETS.fetch(
      new Request(new URL("/410/", url.origin))
    );

    // Return it with a real 410 status
    return new Response(response.body, {
      status: 410,
      headers: response.headers,
    });
  }

  // Everything else → normal site
  return context.next();
};
