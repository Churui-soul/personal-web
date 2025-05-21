import "./style.css";

import Image from "next/image";
import Header from "@/components/page/home/header/index";
import PersonalInfo from "@/components/page/home/personal/info";
import ProjectInfo from "@/components/page/home/work/project";
import WorkInfo from "@/components/page/home/work/info";
import SkillInfo from "@/components/page/home/work/skill";
import LifeInfo from "@/components/page/home/life/info";
import ReadBook from "@/components/page/home/life/book";
import AnimatedOnScroll from "./animatedOnScroll";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <PersonalInfo />
      <ProjectInfo />
      <AnimatedOnScroll offset={0.2}>
        <WorkInfo />
      </AnimatedOnScroll>
      <AnimatedOnScroll offset={0.2}>
        <SkillInfo />
      </AnimatedOnScroll>
      <AnimatedOnScroll offset={0.2}>
        <LifeInfo />
      </AnimatedOnScroll>
      <AnimatedOnScroll offset={0.2}>
        <ReadBook />
      </AnimatedOnScroll>

      {/* 后期优化可动 */}
      <div className="absolute top-32 right-32 opacity-60">
        <Image
          aria-hidden
          alt="white-circle"
          src="/white-circle.png"
          priority={true}
          width={525}
          height={517}
        />
      </div>
      <div className="my-22  pt-4 text-center font-fantasy text-2xl text-gray-300 border-2 border-gray-100 border-dashed">
        Churui
      </div>
    </div>
  );
}
