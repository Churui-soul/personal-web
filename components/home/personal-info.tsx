import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import Image from "next/image";

export default function PersonalInfo() {
  const iconSize: number = 48;
  const avatarSize: number = 96;

  return (
    <div>
      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={avatarSize} radius={240}>
          <Image
            aria-hidden
            alt="chrome"
            src="/chrome.svg"
            width={iconSize}
            height={iconSize}
          />
          <Image
            aria-hidden
            alt="edge"
            src="/edge.svg"
            width={iconSize}
            height={iconSize}
          />
          <Image
            className="rounded-full"
            aria-hidden
            alt="avatar"
            src="/avatar.jpg"
            width={avatarSize}
            height={avatarSize}
          />
        </OrbitingCircles>
        <CardContainer className="inter-var">
          <CardBody className="relative h-auto w-full p-6 bg-linear-to-br from-white to-gray-100 shadow-lg">
            <CardItem
              translateZ="20"
              cla
              sName="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <div className="pb-4 font-semibold">My name is:</div>
            </CardItem>
            <CardItem
              as="p"
              translateZ="80"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <h1 className="text-[var(--theme-color-1)] text-4xl font-semibold px-4">
                <TextAnimate animation="slideUp" by="word">
                  前 端 工 程 师
                </TextAnimate>
              </h1>
            </CardItem>

            <CardItem translateZ="20" className="w-full mt-4">
              <div className="bg-[var(--theme-color-3)] width-full height-[1px] my-4"></div>
            </CardItem>
            <CardItem
              translateZ={10}
              as="div"
              className="w-full"
            >
              <div className="pb-4 font-semibold">I'm a:</div>
              <div className="text-right text-gray-400">
                <div className="hover:text-gray-500">Web Developer</div>
                <div className="hover:text-gray-500">Hybrid App Developer</div>
                <div className="hover:text-gray-500">Excavator Engineer</div>
                <div className="hover:text-gray-500">Big Screen App Developer</div>
                <div className="hover:text-gray-500">Cook</div>
                <div className="hover:text-gray-500">Trader</div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
