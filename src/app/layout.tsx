import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Room Sathi",
  description:
    "RoomSathi is a room-finding and rental platform for Nepal. Find rooms, apartments, and homes for short-term stays or long-term rentals across Nepal.",
  icons: "/brand/RoomSathi.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col items-center" suppressHydrationWarning>
        <div className="w-full max-w-[100rem] mx-auto min-h-screen">{children}</div>
      </body>
    </html>
  );
}
