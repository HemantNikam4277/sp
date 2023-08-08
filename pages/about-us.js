import AboutUs from "@/components/AboutUs";
import { NextSeo } from "next-seo";
import { aboutus_SEO } from "@/constants/seoData";

export default function AboutUsPage() {
  return (<>
    <NextSeo {...aboutus_SEO} />
    <AboutUs />
    </>
  )
}
