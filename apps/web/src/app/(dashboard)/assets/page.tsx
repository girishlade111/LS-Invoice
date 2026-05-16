import AssetsPage from "./assets";
import { generateWebsiteMetadata } from "@/constants/meta-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateWebsiteMetadata({
  title: "Assets",
  noindex: true,
});

const Page = () => {
  return <AssetsPage />;
};

export default Page;
