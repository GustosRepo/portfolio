import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedTexts from "@/components/AnimatedTexts";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover: w-full, transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const articleTwo = () => {
  return (
    <>
      <Head>
        <title>AH || Front-end, Back-end, and Databases Explained</title>
        <meta
          name="Article Two"
          content="Front-end, Back-end, and Databases Explained"
        />
      </Head>
      <main>
        <Layout>
          <AnimatedTexts
            text="Front-end, Back-end, and Databases Explained"
            className="mb-16"
          />
          <article className="dark:text-light/75">
            <h1 className="text-3xl font-bold">
              Navigating the World of Web Development Specializations
            </h1>
            <h3 className="text-xl">
              In the dynamic realm of web development, there are three
              fundamental components that work in tandem to bring websites and
              applications to life: front-end, back-end, and databases. As a
              beginner looking to explore and specialize in the world of web
              development, understanding these components is crucial. This
              article serves as your guide to comprehending the roles,
              technologies, and skills associated with front-end, back-end, and
              databases, helping you make an informed decision about your
              specialization path.
            </h3>
            <br></br>
            <h2 className="text-3xl font-bold">1. Front-End Development</h2>
            <p className="text-xl">
              <span className="font-bold">Definition:</span> Front-end
              development, also known as client-side development, is the process
              of creating the visual and interactive aspects of a website or
              application that users directly interact with.
            </p>
            <div>
              <li>
                <span className="font-bold">
                  HTML (Hypertext Markup Language):{" "}
                </span>
                The building block of web content, HTML structures the elements
                on a webpage.
              </li>
              <li>
                <span className="font-bold">CSS (Cascading Style Sheets):</span>{" "}
                CSS is responsible for styling the HTML elements, making them
                visually appealing and responsive.
              </li>
              <li>
                <span className="font-bold">JavaScript:</span> This programming
                language brings interactivity to websites, allowing developers
                to create dynamic features and handle user actions.
              </li>
              <p>
                <span className="font-bold">Skills and Tools:</span> Front-end
                developers need a strong grasp of HTML, CSS, and JavaScript.
                Familiarity with frameworks like React, Vue.js, or Angular can
                be beneficial for building complex user interfaces.
              </p>
            </div>
            <br></br>
            <h2 className="text-3xl font-bold">2. Back-End Development</h2>
            <p className="text-xl">
              <span className="font-bold">Definition:</span> Back-end
              development, or server-side development, involves creating the
              logic and functionalities that power the front-end of a website or
              application. It deals with data processing, server management, and
              ensuring the application's smooth operation.
            </p>
            <div>
              <span className="font-bold">Key Components:</span>
              <li>
                <span className="font-bold">Server:</span>
                The computer or system that hosts the website or application and
                manages requests from users.
              </li>
              <li>
                <span className="font-bold">Database: </span> Stores and manages
                the data required by the application.
              </li>
              <li>
                <span className="font-bold">Programming Languages: </span>{" "}
                Back-end development employs languages like Python, Ruby, Java,
                PHP, and Node.js to handle data manipulation, authentication,
                and communication with databases.
              </li>
              <p>
                <span className="font-bold">Skills and Tools:</span> Back-end
                developers need to be proficient in at least one programming
                language, and knowledge of databases (SQL or NoSQL) is crucial.
                Frameworks like Django (Python), Ruby on Rails, and Express
                (Node.js) can streamline development.
              </p>
            </div>
            <br></br>
            <h2 className="text-3xl font-bold">3. Database Management</h2>
            <p className="text-xl">
              <span className="font-bold">Definition: </span>Databases are where
              an application's data is stored, organized, and retrieved.
              Efficient database management ensures data integrity, security,
              and availability.
            </p>
            <div>
              <span className="font-bold">Types of Databases:</span>
              <li>
                <span className="font-bold">
                  SQL (Structured Query Language) Databases:
                </span>
                These use a structured approach to store and manage data in
                tables. Examples include MySQL, PostgreSQL, and Microsoft SQL
                Server.{" "}
              </li>
              <li>
                <span className="font-bold">NoSQL Databases:</span> These
                databases store data in a more flexible and unstructured manner,
                suitable for handling large amounts of diverse data. Examples
                include MongoDB and Cassandra.{" "}
              </li>
              <span className="font-bold">Key Concepts:</span>

              <li>
                <span className="font-bold">Data Modeling: </span> Designing how
                data will be structured and related within the database.
              </li>
              <li>
                <span className="font-bold">Querying: </span> Extracting
                specific data from the database using queries written in SQL or
                other database-specific languages.
              </li>
              <li>
                <span className="font-bold">Normalization: </span> Organizing
                data to minimize redundancy and maintain consistency.
              </li>
              <p>
                <span className="font-bold">Skills and Tools:</span> Database
                specialists should be skilled in database design, SQL, and
                potentially NoSQL query languages. Familiarity with database
                management systems (DBMS) like MySQL Workbench or MongoDB
                Compass is essential.
              </p>
            </div>
            <br></br>
            <h2 className="text-3xl font-bold">Conclusion</h2>
            <p className="text-xl">
              Front-end, back-end, and database development are the essential
              pillars of modern web development. As a beginner, exploring these
              components will help you discover where your interests and
              strengths lie. Whether you're drawn to crafting visually engaging
              user interfaces, building robust server logic, or managing the
              intricate world of data, the path you choose will be a foundation
              for your web development journey. Embrace the learning process,
              experiment with different technologies, and remember that each
              specialization plays a crucial role in creating the digital
              experiences we enjoy every day.
            </p>
          </article>
          <br></br>
          <CustomLink
            href="/articles"
            title="Back to Articles"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-solid dark:border-light dark:border-2"
          />
        </Layout>
      </main>
    </>
  );
};

export default articleTwo;
