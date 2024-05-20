import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata: Metadata = {
  title: "Answer key score calculator",
  description: "Calculate your Score Calculator Score automatically and Check your Rank in your category.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="keywords" content="RankIQ Score Calculator Score Calculator, Rank iQ Score Calculator calculate marks, RankIQ Score Calculator marks calculator, Score Calculator Rank Checker,RankiQ Score Calculator, Score Calculator Score card,ssc,sslc,cbse,icse,result,score" />

</head>
      <body className={inter.className}>
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
        {children}
        </body>
    </html>
  );
}
