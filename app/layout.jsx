import Footer from "./components/Footer";
import { Navbar } from "./components/nav";
import "./global.css";

export const metadata = {
  metadataBase: new URL("https://shashanknathe.com"),
  title: {
    default: "Shashank Nathe",
    template: "%s | Shashank Nathe",
  },
  description: "Software Developer",
  openGraph: {
    title: "Shashank Nathe",
    description: "Software Developer",
    url: "https://shashanknathe.com",
    siteName: "Shashank Nathe",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Shashank Nathe",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx("text-black bg-white dark:text-white dark:bg-[#111010]")}
    >
      <body className="antialiased max-w-4xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
