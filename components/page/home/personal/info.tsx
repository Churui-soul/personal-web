// components
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import RoleName from "./role";
import Symbol from "@/components/icon/symbol";

export default function PersonalInfo() {
  // 基础数据
  const jobNameList: Array<string> = [
    "Web Developer",
    "Hybrid App Developer",
    "Excavator Engineer",
    "Big Screen App Developer",
    "Cook",
    "Trader",
  ];
  // 大小设置
  const iconSize: number = 56;
  const avatarSize: number = 188;
  // 类名
  const jobClassName: string = 'text-gray-400 hover:text-gray-700 text-xl'
  const titleClassName: string = 'pb-2 font-semibold font-bold text-xl'
  

  return (
    <div id="home" className="info-container">
      <div className="relative flex py-44 w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={avatarSize} radius={280} duration={20}>
          <Symbol
            name="chrome"
            size={iconSize}
          />
          <Symbol
            name="sun"
            size={iconSize}
          />
        </OrbitingCircles>
        <OrbitingCircles iconSize={avatarSize} radius={340} duration={10}>
          <Symbol
            name="edge"
            size={iconSize}
          />
          <Image
            className="rounded-full"
            aria-hidden
            alt="avatar"
            src="/avatar.jpg"
            priority={true}
            width={avatarSize}
            height={avatarSize}
          />
        </OrbitingCircles>
        <CardContainer className="info-card inter-var">
          <CardBody className="p-8 relative accentLightBg rounded-3xl h-[auto] w-[auto]">
            <CardItem
              translateZ="30"
            >
              <div className={titleClassName}>My name is:</div>
            </CardItem>
            <CardItem
              translateZ="70"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <RoleName/>
            </CardItem>
            <CardItem translateZ="30" className="w-full mt-4">
              <div className="bg-[rgb(var(--theme-color-3))] width-full h-[2px] my-4 mx-[-10px]"></div>
            </CardItem> 
            <CardItem
              translateZ="30"
              as="div"
              className="w-full"
            >
              <div className={`${titleClassName} pt-4`}>I&apos;m a:</div>
            </CardItem>
            <CardItem
              translateZ="20"
              as="div"
              className="w-full"
            >
              <div className="text-right">
                {jobNameList.map( (jobName, index) => <div className={jobClassName} key={index}>{jobName}</div>)}
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
