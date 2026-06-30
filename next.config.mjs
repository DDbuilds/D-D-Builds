/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Portfolio placeholders ship as SVGs so the gallery renders out of the
    // box. Once you replace them with real JPG/PNG photos you can remove
    // these two lines.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
