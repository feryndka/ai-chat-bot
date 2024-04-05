import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import HomeLayout from "@/components/HomeLayout";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HomeLayout>
            {children}
          </HomeLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
