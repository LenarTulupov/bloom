import ContactUs from "@/client-pages/pages/contact-us/contact-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us"
}

export default function ContactUsPage() {
  return <ContactUs />
};
