module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
    greeting: process.env.NEXT_PUBLIC_TEMPLATE_GREETING
  }
};
