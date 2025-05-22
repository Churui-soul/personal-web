import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-16 xl:px-32 2xl:px-44 fixed z-21 w-full backdrop-blur-[2px] bg-gradient-to-gray-50 bg-gradient-to-b from-gray-100 to-gray-100/0 z-20 py-4 border-b-gray-300/10 border-b">
      <div className="flex justify-between ">
        <nav className="flex text-lg text-slate-700 justify-start items-center gap-x-12">
          <Link className="hidden lg:block font-fantasy text-2xl" href="/#home">
            Churui
          </Link>
          <Link className="hidden lg:block" href="/#record">
            Record
          </Link>
          <Link className="hidden lg:block" href="/#code">
            Code
          </Link>
          <Link className="hidden lg:block" href="/#experience">
            Experience
          </Link>
          <Link className="hidden lg:block" href="/#book">
            Book
          </Link>
        </nav>

        {/* 第三方地址 */}
        <div className="flex text-2xl slate-700 justify-start items-center gap-x-4 ">
          {/* <a target="_blank" href="javascript:void(0)"></a> */}
        </div>
      </div>
    </header>
  );
}
