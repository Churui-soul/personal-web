import './style.css'
// components
import TimeArea from "./time";
import Image from "next/image";

export default function LifeInfo() {
  const timeAreaData = [
    [0, 1, 2, 1.2, 1, 0.7], // 学习
    [2, 1.5, 1, 0.8, 0.3, 0.2], // 家
    [0, 0, 2, 1, 0.4, 0.2], // 游戏
    [0, 0, 1, 2, 3, 2], // 代码
    [0, 0, 0.5, 1, 0, 0], // 服务行业
    [0, 0.5, 2, 0, 0, 0], // 工程机械行业
    [0, 0, 0.2, 1, 0.1, 0], // 健身
  ];

  return (
    <div id='experience' className="px-4 lg:px-16 xl:px-32 2xl:px-44 flex gap-4 flex-col my-24 lg:my-32 relative z-1">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="basis-2/3 rounded-3xl accentWhiteBg p-6">
          <div className="font-fantasy text-4xl mb-2">时间</div>
          <div className="mb-4">
            这就是我度过时光的方式。我最大的爱好是学习，因为我对几乎所有事物都充满好奇。
          </div>
          <TimeArea
            className="shadow-md rounded-2xl border-[1px] border-white/20 overflow-hidden"
            data={timeAreaData}
            labels={[
              "学习",
              "家庭",
              "游戏",
              "代码",
              "服务行业",
              "工程机械行业",
              "健身",
            ]}
            colors={[
              "#7bdff2bf", // Social or Family（暖橙色，传递温馨氛围）
              "#b2f7efbf", // Study（天蓝色，象征知识与冷静）
              "#87bfffbf", // Game（亮红色，激发活力与激情）
              "#96e072bf", // Coding（深灰蓝，体现专业与科技感）
              "#ffbf69bf", // Coding（深灰蓝，体现专业与科技感）
              "#cbf3f0bf", // Coding（深灰蓝，体现专业与科技感）
              "#bfd7ffbf", // Music（浅蓝紫，营造艺术与舒缓感）
            ]}
          />
        </div>

        <div className="basis-1/3 flex flex-col gap-4">
          <div className="rounded-3xl accentWhiteBg p-6 h-fit">
            <div className="font-fantasy text-4xl pb-4">轨迹</div>
            <div className="mb-4">这是我的旅行足迹。我现在住在中国成都。</div>
            <div className="relative w-fit">
              <Image
                className="border-[6px] border-slate-50 absolute w-[20%] left-[10%] top-[54%] rounded-full animation_circle"
                aria-hidden
                alt="circle"
                src="/avatar.jpg"
                priority={true}
                width={1140}
                height={1142}
              />
              <Image
                className="border-[6px] border-slate-50 absolute w-[20%] left-[10%] top-[54%] rounded-full shadow-lg"
                aria-hidden
                alt="avatar"
                src="/avatar.jpg"
                priority={true}
                width={1140}
                height={1142}
              />
              <Image
                className="rounded-3xl shadow-lg border-[1px] border-white/20"
                aria-hidden
                alt="map"
                src="/map.png"
                priority={true}
                width={1140}
                height={1142}
              />
              <span className="bg-slate-100 shadow-md text-slate-700 rounded-full py-2 px-6 slate-900 text-lg font-semibold absolute bottom-4 left-4">
                Chengdu, China
              </span>
            </div>
          </div>
          <div className="grow rounded-3xl p-6 accentDarkBg text-orange-400 link_decoration flex items-center justify-center">
            <div className="text-4xl font-bold">Statistics</div>
          </div>
        </div>
      </div>
    </div>
  );
}
