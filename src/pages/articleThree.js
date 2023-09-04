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

const articleThree = () => {
  return (
    <>
      <Head>
        <title>AH || HTML, CSS, JavaScript, and React for Beginners</title>
        <meta
          name="Article three"
          content="Guide for becoming a Software Engineer"
        />
      </Head>
      <main>
        <Layout>
          <AnimatedTexts
            text="HTML, CSS, JavaScript, and React for Beginners"
            className="mb-16"
          />
          <article>
            <h1 className="text-3xl font-bold">Demystifying Web Development</h1>
            <h3 className="text-xl">
              In the digital age, the web has become an integral part of our
              lives, and understanding the technologies that power it is
              essential. Web development may seem complex at first, but breaking
              down its key components—HTML, CSS, JavaScript, and React—can make
              it more approachable for beginners.
            </h3>
            <br></br>
            <h2 className="text-3xl font-bold">
              1. HTML (HyperText Markup Language): Building the Structure
            </h2>
            <p className="text-xl">
              At the core of every web page lies HTML, the language that
              structures content on the internet. HTML uses tags to define
              elements like headings, paragraphs, images, links, and more. A tag
              consists of an opening &lt;tag&gt; and a closing &lt;/tag&gt; ,
              encompassing the content it affects.
              <br></br>
              For example, to create a simple paragraph, you'd use:
              <br></br>
              <span className="font-semibold">
                &lt;p&gt; This is a paragraph of text.&lt;/p&gt;
              </span>
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">
              2. CSS (Cascading Style Sheets): Designing the Presentation
            </h2>
            <p className="text-xl">
              While HTML provides structure, CSS brings life to your web pages
              by defining their visual style and layout. It's like giving your
              content a coat of paint. CSS works by selecting HTML elements and
              applying styles to them.
              <br></br>
              To change the color of all paragraphs to blue, you'd use:
              <br></br>
              <span className="font-semibold">
                p &#123;<br></br> color: blue;<br></br> &#125;
              </span>
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">
              3. JavaScript: Adding Interactive Behavior
            </h2>
            <p className="text-xl">
              JavaScript is a versatile scripting language that enables
              interactivity and dynamic behavior on web pages. With JavaScript,
              you can create pop-up alerts, validate forms, build interactive
              games, and update content without needing to refresh the entire
              page.
              <br></br>
              To display an alert when a button is clicked, you'd use:
              <br></br>
            </p>
            <span className="font-semibold bg-gray-500">
              <pre>
                <code>
                  function showAlert() &#123;<br></br>
                  alert("Button clicked!")
                  <br></br>&#125;
                </code>
              </pre>
            </span>
            <h2 className="text-3xl font-bold">
              4. React: Building Modern User Interfaces
            </h2>
            <p className="text-xl">
              React is a JavaScript library for building user interfaces,
              particularly single-page applications (SPAs). It simplifies the
              process of creating interactive and reusable UI components. React
              introduces the concept of a "virtual DOM," which enhances
              performance by minimizing direct updates to the actual DOM.
              <br></br>
              Here's a simple React component that displays a counter:
              <br></br>
            </p>
            <span className="font-semibold bg-gray-500">
              <pre>
                <code>
                  import React, &#123; useState &#125; from "react";
                  <br></br>
                  function Counter() &#123;<br></br>
                  const[count, setCount] = useState(0);
                  <br></br>
                  return ( <br></br>
                  &lt;div&gt; <br></br>
                  &lt;p&gt;Count: &#123;count&#125;&lt;/p&gt;<br></br>
                  &lt;button onClick={() => setCount(count + 1)}
                  &gt;Increment&lt;/button&gt; &lt;/div&gt; );
                  <br></br>&#125;
                </code>
              </pre>
            </span>
            <br></br>
            <h2 className="text-3xl font-bold">Conclusion</h2>
            <p className="text-xl">
              In conclusion, web development is a blend of HTML, CSS,
              JavaScript, and libraries like React. HTML structures content, CSS
              styles it, JavaScript adds interactivity, and React simplifies the
              creation of dynamic user interfaces. As you embark on your web
              development journey, remember that practice and experimentation
              are key. With time, you'll transform from a beginner into a
              proficient web developer, crafting digital experiences that
              captivate users across the globe.
            </p>
          </article>
          <br></br>
          <CustomLink
            href="/articles"
            title="Back to Articles"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light"
          />
        </Layout>
      </main>
    </>
  );
};

export default articleThree;
