export const metadata = {
  title: "AI Solutions",
  description: "AI Tools Directory"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        style={{
          background:"#0f172a",
          color:"white",
          margin:0
        }}
      >
        {children}
      </body>
    </html>
  );
}
