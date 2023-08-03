import Header from "@/Components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/Components/Footer";
import ReduxProvider from "@/Components/redux-provider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "900", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ali Shakir Portfolio",
  description: "Portfolio of Ali Shakir  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="dark:bg-gray-900 min-h-full ">
          <Header />
          <ReduxProvider>{children}</ReduxProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
