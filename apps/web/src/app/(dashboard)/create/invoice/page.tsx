import InvoicePage from "./invoice";
import { generateWebsiteMetadata } from "@/constants/meta-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateWebsiteMetadata({
  title: "Create Invoice",
  noindex: true,
});

const Page = () => {
  return <InvoicePage />;
};

export default Page;
