export const metadata = {
  title: 'Next.js 15.1.6 on GKE',
  description: 'Simple Next.js app running on Google Kubernetes Engine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
