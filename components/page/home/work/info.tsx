import "./style.css";

// components
import { MorphingText } from "@/components/magicui/morphing-text";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function WorkInfo() {
  return (
    <div id="code" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-24 lg:py-32">
      <div className="accentLightBg w-full lg:w-2/3 rounded-3xl block lg:flex relative left-0 right-5 py-6 pl-6 xl:pl-12 pr-6 lg:pr-0">
        <div className="w-full lg:w-1/2 flex flex-col lg:mr-6 xl:mr-12 justify-around">
            <h3 className="text-orange-400 text-5xl xl:text-6xl font-semibold whitespace-nowrap pb-6">前端工程师</h3>
          <span>我在前端岗位工作了8年，开发了很多项目。</span>
            <div className="rounded-xl bg-white p-4 mt-8">
                <h3 className="text-xl pb-2 font-bold">两年前端开发</h3>
                <div className="text-gray-400">根据需求开发页面，按设计开发页面效果，维护项目迭代开发</div>
            </div>
        </div>
        <div className="relative w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="h-full w-full lg:w-[220%] xl:w-[200%] accentDarkBg rounded-3xl flex py-6 flex-wrap lg:flex-nowrap">
                <div className="flex-initial w-full lg:w-1/2 flex flex-col px-4 xl:px-6 gap-4 justify-around">
                    <div className="rounded-xl bg-white p-4">
                        <h3 className="text-xl pb-2 font-bold">两年前端组长</h3>
                        <div className="text-gray-400">工作分配，公用组件封装，人员工作安排，项目进度把控，项目汇总进度输出等</div>
                    </div>
                    <div className="rounded-xl bg-white p-4">
                        <SparklesText className="text-xl pb-2 font-bold">四年前端负责人</SparklesText>
                        <div className="text-gray-400">项目搭建，公用库封装，技术攻坚，问题解决，技术分享，定期会议组织，代码审查，探索新技术，技术文档编写等</div>
                    </div>
                </div>
                <div className="flex-initial w-full lg:w-1/2 mr-4 xl:mr-6 ml-4 lg:ml-0 mt-8 lg:mt-0 text-white">
                    <MorphingText className="text-orange-400 lg:text-5xl text-5xl xl:text-5xl  font-semibold whitespace-nowrap" texts={['🖥️PC端开发', '📱移动端开发', '📊大屏端开发', '✨微前端开发']} />
                    我一直对开源和 Web 充满热情，非常享受为此工作。
                    <ul className="list-none pt-6">
                        <li className="pb-2">邮箱：churui_vip@163.com</li>
                        <li className="pb-2">电话：16619801043</li>
                        <li className="pb-2">微信：CRM9416</li>
                        <li className="pb-2">QQ：2254202599</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
