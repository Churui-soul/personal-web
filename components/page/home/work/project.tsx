import './style.css'

// components
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";

const reviews = [
  {
    name: "GSSD/PC端",
    username: "Web前端工程师",
    skill: "Vue，Echarts，Webpack，百度地图，Less，ElementUI",
    body: "负责GSSD项目页面开发，功能交互，第三方数据对接",
    className: "bg-[#a71545]",
  },
  {
    name: "DLBZYD/移动端",
    skill: "JQuery，Echarts，CSS3，MUI",
    username: "前端组长",
    body: "负责项目工作安排，项目进度管理，项目成员管理，通用组件封装",
    className: "bg-[#406e12]",
  },
  {
    name: "HNSD/PC端",
    username: "前端组长",
    skill: "Vue，Openlayers，Echarts，Webpack，Less，Ant Design",
    body: "负责HNSD地图功能开发，数据对接，性能优化，问题解决",
    className: "bg-[#153fa7]",
  },
  {
    name: "HBSD/PC端",
    skill: "Vue，Echarts，Webpack，百度地图，Less",
    username: "Web前端工程师",
    body: "负责HBSD任务模块功能开发，通用组件封装",
    className: "bg-[#1a8053]",
  },
  {
    name: "BZYDZY/移动端",
    username: "前端组长",
    skill: "Vue，F2，Webpack，Less，MUI",
    body: "可视化数据展示，项目进度管理，会议组织，任务汇总，项目Vue改造",
    className: "bg-[#67347b]",
  },
  {
    name: "HNSDQJPT/PC端&大屏端",
    username: "前端负责人",
    skill: "Vue，Openlayers，Echarts，Webpack，Less，Ant Design，Openlaers，Cesium",
    body: "负责HNSDQJ平台项目搭建，可视化数据开发，大屏数据展示，地图对接，视频流对接等",
    className: "bg-[#a71520]",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  className,
  name,
  skill,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
  skill: string;
  className: string;
}) => {
  return (
    <figure
      className={
        className +
        " relative h-full w-102 cursor-pointer overflow-hidden rounded-xl border px-8 py-4 text-gray-100"
      }
    >
      <div className="flex flex-row items-center gap-2 w-full">
        <div className="flex flex-col w-full">
          <figcaption className="flex justify-between">
            <span className="font-bold text-lg">{name}</span>
            <span className="text-base">{username}</span>
          </figcaption>
          <p className="text-base dark:text-white/40 font-bold">
            <span>{skill}</span>
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function ProjectCard() {
  return (
    <div id='record' className="px-4 pt-34 lg:px-16 xl:px-32 2xl:px-44">
        <div className="text-2xl leading-[1.7]">
            <div>工作和业余中开发了很多项目，并将掌握的技术应用到项目中进行实践，完善技术壁垒，扩充知识范围。</div>
            <div>从业<NumberTicker value={8*365} className="text-orange-400 font-bold text-3xl"/>天里掌握了多种不同角度的编码思路，逐渐提高了代码的扩展性和维护性，积极与项目小组成员分享技术方案并编写文档，从而提高团队开发项目质量。</div>
            <span className="relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-orange-300 to-orange-300 animate-bg-size text-black dark:text-white pr-8">以下是我所开发项目的一部分，虽然因为很多原因导致项目不能透露，但有些还是能写出一些基本信息</span>
        </div>

        <div className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <Marquee pauseOnHover className="[--duration:30s] w-full">
                {firstRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s] w-full">
                {secondRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
        </div>
    </div>
  );
}
