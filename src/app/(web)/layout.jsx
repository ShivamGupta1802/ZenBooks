
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import ThemeProvider from "@/Components/ThemeProvider/ThemeProvider";
import AuthProvider from "@/Components/AuthProvider/AuthProvider";
import Toast from "@/Components/Toast/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Zen Books",
  description: "Discover the Best Hotel rooms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={poppins.className}>
        <AuthProvider>
          <ThemeProvider>
            <Toast/>

            <main className="font-normal container mx-auto px-8">
              <Header />
              {children}
              <Footer />
            </main>

           
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
