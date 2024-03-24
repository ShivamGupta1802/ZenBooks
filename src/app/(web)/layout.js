import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import ThemeProvider from "@/Components/ThemeProvider/ThemeProvider";
import AuthProvider from "@/Components/AuthProvider/AuthProvider";

const poppins = Poppins({ subsets: ["latin"] ,
weight:['400','500','700','900'],
style:['italic','normal'],
variable:'--font-poppins',
});

export const metadata = {
  title: "Zen Books",
  description: "Discover the Best Hotel rooms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>

        <ThemeProvider>
      <main className="font-normal">
        <Header/>
        {children}
       <Footer/>
        </main>

        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
