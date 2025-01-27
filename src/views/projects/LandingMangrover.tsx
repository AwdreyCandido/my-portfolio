import React from "react";
import PageLayout from "../../layout/PageLayout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const LandingMangrover = () => {
  return (
    <PageLayout>
      <section className=" flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-gray-border border-dashed px-12 md:px-[10rem]">
        <section className="grid place-content-center lg:grid-cols-2 gap-x-[5rem] w-full bg-red-400">
          <figure className="flex flex-col gap-8 text-base w-full">
            <h2 className="text-primary-h mb-8">Site Mangrover</h2>

            <p>
              Mangrover is an exciting technology services startup based in
              Pernambuco, Brazil. It was founded by me and four other friends
              who share a passion for technology. Our diverse team consists of
              developers, designers, and entrepreneurs who are enthusiastic
              about creating innovative solutions.
            </p>
            <p>
              As a front-end developer at Mangrover, I have the opportunity to
              turn ideas into reality by creating intuitive and visually
              appealing interfaces for the products and services we offer. We
              work closely with clients to understand their needs and provide an
              exceptional user experience.
            </p>
            <p>
              Our startup is focused on delivering customized technological
              solutions for businesses across different industries. This
              includes web and mobile app development, responsive website
              design, SEO optimization, and more. We stay abreast of the latest
              industry trends and best practices to ensure that we offer our
              clients modern and efficient solutions.
            </p>
            <p>
              At Mangrover, we believe in the power of innovation and the
              importance of building strong partnerships with our clients. We
              work with an agile approach, allowing us to respond quickly to
              changes and ensure the delivery of high-quality projects within
              deadlines.
            </p>
          </figure>
          <figure className="w-full order-1 mt-[5rem] lg:mt-0">
            <Link to="https://mangrover.com.br/" target="_blank">
              <div className="relative h-[60rem] border-2 border-dashed overflow-hidden border-slate-200 dark:border-gray-border rounded-3xl">
                <StaticImage
                  src="./../../images/mangrover-site.png"
                  alt="gpm crm page"
                  className="w-full h-full object-contain duration-300 hover:scale-105"
                />
              </div>
            </Link>
          </figure>
        </section>
      </section>
    </PageLayout>
  );
};

export default LandingMangrover;
