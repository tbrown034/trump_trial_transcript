import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trump Trial Transcript",
  description:
    "View, search and visualize the court-provided transcipts in the historic trial of The People of the State of New York v. Donald J. Trump.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
