import InvoicesPage from "./invoices";
import { generateWebsiteMetadata } from "@/constants/meta-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateWebsiteMetadata({
  title: "Invoices",
  noindex: true,
});

const Page = () => {
  return <InvoicesPage />;
};

export default Page;
