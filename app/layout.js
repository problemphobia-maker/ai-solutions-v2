export const metadata = {
  title: "AI Solutions",
  description: "AI Tools Directory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
