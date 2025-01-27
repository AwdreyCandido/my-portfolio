import React from "react";
import PageLayout from "../../layout/PageLayout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const GestorPoliticoMangrover = () => {
  return (
    <PageLayout>
      <section className=" flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-gray-border border-dashed px-12 md:px-[10rem]">
        <section className="grid place-content-center lg:grid-cols-2 gap-x-[5rem] w-full">
          <figure className="flex flex-col gap-8 text-base w-full">
            <h2 className="text-primary-h mb-8">Gestor Político Mangrover</h2>
            <p>
              Gestor Politico Mangrover is a CRM (Customer Relationship
              Management) designed to simplify the lives of politicians. It was
              created as a product of Mangrover and offers a range of features
              to streamline political operations.
            </p>
            <p>
              Gestor Politico Mangrover provides functionalities for team and
              member management, making it easy to organize and keep track of
              registered individuals. It also includes marketing features such
              as email and SMS campaign management, allowing politicians to
              effectively reach out to their audience.
            </p>
            <p>
              In addition, the CRM offers informative graphs and charts,
              enabling politicians to analyze data and gain insights into their
              campaign performance. This data-driven approach helps them make
              informed decisions and optimize their strategies.
            </p>
            <p>
              Another notable feature of GPM is the inclusion of sponsorship
              links. These links facilitate the process of connecting with
              potential voters by allowing politicians to share personalized
              URLs that can be easily distributed through various channels. This
              feature aims to expand their voter base and increase their
              outreach.
            </p>
          </figure>
          <figure className="w-full mt-[5rem] lg:mt-0">
            <Link to="https://gpm.mangrover.com.br/" target="_blank">
              <div className="relative h-[50rem] border-2 border-dashed overflow-hidden border-slate-200 dark:border-gray-border w-full rounded-3xl">
                <StaticImage
                  src="./../../images/gpm.png"
                  alt="gpm crm page"
                  className="w-full h-full object-cover duration-300 hover:scale-105"
                />
              </div>
            </Link>
          </figure>
        </section>
      </section>
    </PageLayout>
  );
};

export default GestorPoliticoMangrover;
