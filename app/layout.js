import "./globals.css";

export const metadata = {
  title: "LinkedIn Clone",
  description: "A LinkedIn-like webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
