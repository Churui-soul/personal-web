"use client";
import "./style.css";
// utils
import { useState, useEffect } from "react";
// components
import { TextAnimate } from "@/components/magicui/text-animate";

type RoleComponentProps = {
  delay?: number; // 可选：定时器间隔（毫秒）
};
export default function Role({ delay = 2000 }: RoleComponentProps) {
  // 基础数据
  const [roleNameIndex, setRoleNameIndex] = useState(0);
  const roleNameList: Array<string> = [
    "前 端 工 程 师",
    "全 栈 工 程 师",
    "特 种 车 司 机",
    "股 票 交 易 员",
    "平 面 设 计 师",
  ];
  // 绑定数据
  const [animationName, setanimationName] = useState<"slideUp" | "slideLeft">(
    "slideUp"
  );
  const [roleName, setRoleName] = useState(roleNameList[0]);

  useEffect(() => {
    // 更新角色名称
    setRoleName(roleNameList[roleNameIndex]);
  }, [roleNameIndex, roleNameList]);
  
  useEffect(() => {
    // 第一次渲染后切换为缩放
    setTimeout(() => {
      setanimationName("slideLeft");
    }, delay);
    // 设置定时器
    const timerId = setInterval(() => {
      // 使用函数式更新确保获取最新值
      setRoleNameIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= roleNameList.length ? 0 : nextIndex;
      });
    }, delay);

    // 组件卸载时清除定时器
    return () => {
      clearInterval(timerId);
    };
  }, [delay, roleNameList.length]);

  return (
    <h2 className="info-role relative dark:text-neutral-100 px-2 text-orange-400 font-bold text-5xl md:text-6xl w-[5.8em] font-fantasy whitespace-nowrap text-center">
      <TextAnimate animation={animationName} by="word" className="whitespace-nowrap">
        {roleName}
      </TextAnimate>
    </h2>
  );
}
