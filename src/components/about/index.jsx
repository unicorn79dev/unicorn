import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import cert from '../../../public/certificate.jpg';
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Blockchain Developer | DEX | Crypto Bots | Casino
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Thanks for taking out time to reach out.<br />
          I'm a dedicated Blockchain Developer with a mission to drive digital transformation through secure and efficient blockchain solutions.<br />
          As a talented freelancer, I bring 4+ years of expertise in blockchain development, specializing in DEXs, bot creation and building casino sites.<br /><br />

          
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-6 !p-0"}
        >
          <p className="font-light  text-xs sm:text-sm md:text-base m-5">
          <p className="text-xl md:text-2xl text-left w-full capitalize text-center">💡 Why Work With Me?</p><br />
          ✅ Expert in Blockchain Technologies: Proficient in Ethereum, Solana and Ton, I bring a deep understanding of blockchain protocols, consensus mechanisms, and cryptographic principles. I develop scalable, secure, and transparent solutions tailored to your specific requirements.<br />
          ✅ Smart Contract Development: Crafting robust andgood error-free smart contracts is my forte. Whether you're launching an ICO, implementing a token system, or building a decentralized finance (DeFi) platform, I have the experience to deliver high-quality smart contracts.<br />
          ✅ Security First Approach: Understanding the critical importance of security in blockchain development, I employ best practices to safeguard your applications against vulnerabilities and threats.<br /><br />
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-6 !p-0"}>
          <p className="font-light  text-xs sm:text-sm md:text-base m-5">
            <p className="text-xl md:text-2xl text-left w-full capitalize text-center">🏆 Services I offer:</p><br />
              ✔ ICO, IDO, STO, Presale<br />
              ✔ Decentralized / Centralized Exchange<br />
              ✔ Automated Trading Bots / Arbitrage Bots / Sniper Bots<br />
              ✔ Yield Farming Protocols & Liquidity Mining Protocols<br />
              ✔ P2P/Pool Lending and Borrowing<br />
              ✔ Crypto Collectible Platforms and Non-Fungible Tokens<br />
              ✔ Casino Sites<br /><br />

              👥 Let's Revolutionize Your Project:<br />
              If you're seeking a seasoned blockchain developer to bring your vision to life, let's collaborate! I am committed to delivering blockchain solutions that elevate your project to new heights.
            </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <p className="font-light  text-xs sm:text-sm md:text-base m-5">
            <p className="text-xl md:text-2xl text-left w-full capitalize text-center">👩‍💻 Education:</p><br />
            Bachelor of Science in Computer Science <br />
            WASEDA UNIVERSITY | Sep 2016 – May 2019 <br />
            •	Gained a strong foundation in computer science principles and software development.<br />
            •	Participated in the university's tech club, contributing to several open-source projects.<br />
            •	Relevant coursework: Data Structures, Operating Systems, Software Engineering, Computer Networks.<br />

            </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/dynaput247/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <Image
              src={cert}
              priority
              sizes="100vw"
              alt="Next.js Portfolio website's about page background image"
              className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-80"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
