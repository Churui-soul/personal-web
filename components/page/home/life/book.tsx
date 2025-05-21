import { CSSProperties } from "react";
import "./style.css";
import Image from "next/image";

export default function BookGroup() {
  const bookStyle = { "--book-height": "16px" } as CSSProperties;
  const readingList = [
    {
      title: "You Don't Know Js",
      author: "Kyle Simpson",
      image:
        "/book-You Don't Know Js.jpg",
      link: "https://literal.club/book/kyle-simpson-you-dont-know-js-xkgpq",
    },
    {
      title: "CSS Secrets",
      author: "Lea Verou",
      image:
        "/book-CSS Secrets.jpg",
      link: "https://literal.club/book/css-secrets-60uc3",
    },
    {
      title: "JavaScript: the Definitive Guide",
      author: "David Flanagan",
      image:
        "/book-JavaScript the Definitive Guide.jpg",
      link: "https://literal.club/book/david-flanagan-javascript-the-definitive-guide-z4fiy",
    },
    {
      title: "Professional JavaScript for Web Developers",
      author: "Nicholas C. Zakas",
      image:
        "/book-Professional JavaScript for Web Developers.jpg",
      link: "https://literal.club/book/professional-javascript-for-web-developers-542ol",
    },
    {
      title: "High Performance JavaScript",
      author: "Nicholas Zakas",
      image:
        "/book-High Performance JavaScript.jpg",
      link: "https://literal.club/book/high-performance-javascript-yikd6",
    },
    {
      title: "Secrets of the JavaScript Ninja",
      author: "John Resig,Bear Bibeault",
      image:
        "/book-Secrets of the JavaScript Ninja.jpg",
      link: "https://literal.club/book/secrets-of-the-javascript-ninja-yahce",
    },
    {
      title: "Head First HTML with CSS & XHTML",
      author: "Eric Freeman,Elisabeth Freeman",
      image:
        "/book-Head First HTML with CSS & XHTML.jpg",
      link: "https://literal.club/book/elisabeth-freeman-eric-freeman-head-first-html-with-css-and-xhtml-5whh8",
    },
    {
      title: "JavaScript设计模式与开发实践",
      author: "曾探",
      image: "/book-JavaScript-Design.png",
      link: "https://book.qq.com/book-chapter/27337473",
    },
  ];

  return (
    <div
      id="book"
      className="px-4 lg:px-16 xl:px-32 2xl:px-44 flex gap-4 flex-col my-24 lg:my-32 relative z-1"
    >
      <div className="w-full mt-2 lg:mt-[0px] max-w-md text-gray-50 accentDarkBg rounded-3xl p-6">
        <div className="whitespace-nowrap text-orange-400 text-4xl mb-2 font-bold">
          Reading List
        </div>
        在过去的五年里，我读了50多本书。
        <br />
        这些是我力荐的书！
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        {readingList.map((item) => (
          <a
            className="cursor-pointer rounded-xl bg-slate-50 p-8 lg:p-16 group hover:bg-slate-700 transition-background duration-[0.5s] shadow-md"
            href={item.link}
            target="_blank"
          >
            <div className="relative flex h-full gap-8 items-center lg:justify-center lg:items-center lg:gap-[0] book-perspective">
              <div className="text-left z-10 lg:absolute lg:top-[-25px] lg:left-[-24px] lg:right-[-24px] lg:opacity-0 lg:-translate-y-4 transition-all duration-500 ease-in-out lg:group-hover:opacity-100 lg:group-hover:translate-y-[0]">
                <h3 className="my-0 text-lg font-bold leading-[1.2] text-slate-700 group-hover:text-gray-50 lg:text-gray-50">
                  {item.title}
                </h3>
                <p className="text-base mt-1 text-orange-400 lg:text-orange-400 lg:text-base">
                  {item.author}
                </p>
              </div>
              <div
                className='relative transition-transform duration-[0.5s] ease-in-out transform-three-d order-[-1] w-12 shrink-0 lg:group-hover:book-rotate lg:w-1/2 lg:order-1 xl:w-full after:hidden lg:after:block after:content-[""] after:book-stripes after:bg-grey-100 after:w-[calc(100%+0.5px)] after:absolute after:left-0 after:rounded-l-md after:border-y-[3px] after:border-l-[4px] after:border-slate-200 after:book-bottom before:hidden lg:before:block before:content-[""] before:book-stripes-right before:bg-white before:h-[calc(100%+0.5px)] before:absolute before:-right-[0] before-top-0 before:border-x-[3px] before:border-x-slate-200 before:border-t-[3px] before:border-t-grey-200 before:book-right'
                style={bookStyle}
              >
                <Image
                  className="rounded-[3px] lg:group-hover:rounded-l-lg lg:group-hover:rounded-r-none transition-radius duration-300 ease-in-out w-full"
                  aria-hidden
                  alt={item.title}
                  src={item.image}
                  priority={true}
                  width={525}
                  height={517}
                />
              </div>
              <div className="hidden absolute font-bold text-gray-300 text-sm bottom-[-24px] left-[-24px] right-[-24px] opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-[0] lg:block">
                <span className="inline-flex items-center mr-1 inline-flex items-center cursor-pointer relative underline decoration-dotted decoration-blue underline-offset-[6px] decoration-2 hover:text-gray-50">
                  去看看
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
