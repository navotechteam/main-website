import type { SiteContent } from "./types";

const P = () => <strong className="brand">Navo Tech</strong>;

export const en: SiteContent = {
  lang: "en",
  nav: { vision: "Vision", mission: "Mission", blog: "Blog", about: "About us", contact: "Contact us" },
  cta: "Get in touch",
  hero: {
    title: "Thailand’s most trusted & secure",
    lead: "Digital asset trading platform",
    sub: "Navo Tech's objective is to submit an application for a Crypto Dealer license in Thailand's digital asset market.",
  },
  vision: {
    title: "A vision for innovation",
    description:
      "To be the leading and most trusted provider of secure and transparent digital asset trading services in Thailand, committed to regulatory compliance and the sustainable growth of the digital asset ecosystem.",
  },
  mission: {
    title: "What drives us",
    description:
      "To be the leading and most trusted provider of secure and transparent digital asset trading services in Thailand, committed to regulatory compliance and the sustainable growth of the digital asset ecosystem.",
    cards: [
      { icon: "crown.webp", title: "Leadership", text: "To be the premier digital asset service provider in Thailand." },
      { icon: "check.webp", title: "Trust", text: "Earn customer trust through transparent and compliant operations." },
      { icon: "rings.webp", title: "Transparency", text: "customer trust through transparent and compliant operations." },
      { icon: "shield.webp", title: "Security", text: "We prioritize the security of customer assets and data above all else." },
      { icon: "infinity.webp", title: "Sustainability", text: "We are committed to the responsible and sustainable growth of the digital asset market." },
      { icon: "sphere.webp", title: "Innovation", text: "We drive innovation to enhance customer experience and lead the evolution of digital asset services" },
    ],
  },
  future: {
    title: "Fuelling the future",
    prev: "Previous",
    next: "Next",
    slides: [
      {
        label: "Platform",
        text: "Deliver high-quality digital asset trading services through a user-friendly, secure, and seamless platform that meets our clients’ needs.",
        image: "slide1.png",
        alt: "Illustration of a trading platform on a computer and devices",
      },
      {
        label: "Knowledge",
        text: "Empower customers with knowledge and insights to make informed decisions while fostering strong, mutually beneficial relationships with clients and business partners.",
        image: "slide2.png",
        alt: "Illustration of a data network linking several devices",
      },
      {
        label: "Compliance",
        text: "Uphold the highest standards of compliance and transparency by operating within legal and regulatory frameworks to build trust and security.",
        image: "slide3.png",
        alt: "Illustration of a protected system",
      },
    ],
  },
  about: {
    title: "About us",
    lines: [
      { text: <><P /> is committed to being a leader in the digital asset trading space. We are</> },
      { text: "dedicated to providing a secure, reliable, and user-friendly platform for both novice" },
      { text: "and experienced investors in the digital asset market." },

      { text: "Our vision is to make digital assets accessible and beneficial for everyone. We", gap: "5vh" },
      { text: "believe that blockchain technology and digital assets have the potential to transform" },
      { text: "the future of finance, and we want to be a part of that change." },

      { text: "As part of our commitment to regulatory compliance and long-term growth, we are in", gap: "5vh" },
      { text: "the process of obtaining a digital asset license to ensure our operations meet the" },
      { text: "highest industry standards and build even greater trust with our users." },

      { text: "Our mission is to provide the highest quality digital asset trading services to our", gap: "10vh" },
      { text: "customers. We prioritize security, transparency, and regulatory compliance. We are" },
      { text: "committed to building trust and strong relationships with our customers." },

      { text: "Our team consists of experts in finance, technology, and law who have the", gap: "5vh" },
      { text: "experience and knowledge to deliver the best products and services to our" },
      { text: "customers. We work hard to continuously improve our platform to keep up with the" },
      { text: "changing needs of the market." },

      { text: <><P /> is in the process of applying for a license to operate a digital asset trading</>, gap: "10vh" },
      { text: "business. We are committed to complying with all applicable laws and regulations to" },
      { text: "ensure that our customers receive quality and safe services." },
      { text: "Thank you for your interest in Navo Tech. We look forward to joining you on the" },
      { text: "journey to the future of finance." },
    ],
  },
  contact: {
    title: "Contact us",
    lines: [
      { text: "We are committed to delivering a seamless and secure digital asset" },
      { text: "trading experience while empowering our customers with the knowledge" },
      { text: "they need to make informed decisions. Whether you have questions" },
      { text: "about our platform, need expert guidance on digital assets, or want to" },
      { text: "explore partnership opportunities, our team is here to help." },
      { text: "We operate with the highest standards of compliance and transparency to ensure", gap: "5vh" },
      { text: "your trust and security." },
      { text: "Reach out to us today and let’s build the future of digital assets together.", gap: "5vh" },
    ],
  },
  footer: {
    terms: "Terms of Use & Privacy Policy",
    copyright: "© 2025 Navo Tech. All rights reserved",
    backToTop: "Back to top",
  },
};
