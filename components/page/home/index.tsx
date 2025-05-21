import './style.css'

import Header from "@/components/page/home/header/index";
import PersonalInfo from "@/components/page/home/personal/info";
import ProjectInfo from "@/components/page/home/work/project";
import WorkInfo from "@/components/page/home/work/info";
import SkillInfo from "@/components/page/home/work/skill";
import LifeInfo from "@/components/page/home/life/info";

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <PersonalInfo />
      <ProjectInfo/>
      <WorkInfo/>
      <SkillInfo/>
      <LifeInfo/>

      <div className="px-4 lg:px-16 xl:px-32 2xl:px-44 flex gap-4 flex-col my-12 lg:my-16 text-center text-xl text-gray-400 select-none">------ 这里是一条底线 ------</div>
    </div>
  );
}
