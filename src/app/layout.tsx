import type { Metadata } from "next";
import "./globals.css";
import { InitTelegeramMiniAppEnv } from "@/components/InitTelegeramMiniAppEnv";

export const metadata: Metadata = {
  title: "Telegram-mini-app",
  description: "be be be",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <InitTelegeramMiniAppEnv/>
      <body>
        {children}
      </body>
      {/*<script src={"https://telegram.org/js/telegram-web-app.js?56"}></script>*/}
    </html>
  );
}
