"use client"; // 标记为客户端组件，避免服务器端渲染错误

import { motion, useInView, useAnimation } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

// 动画配置
const animationConfig = {
  duration: 0.8, // 动画持续时间（秒）
  ease: [0.43, 0.13, 0.23, 0.96], // 缓动曲线参数
  delay: 0.1, // 延迟时间
};

// 自定义动画组件
export default function AnimatedOnScroll({
  children,
  offset = 0.2,
}: {
  children: ReactNode;
  offset?: number;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // 只触发一次动画
    amount: offset, // 元素进入视图的比例触发动画
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: animationConfig.duration,
          ease: animationConfig.ease,
          delay: animationConfig.delay,
        },
      });
    } else {
      // 关键修改：元素离开视图时重置动画
      controls.start({
        opacity: 0.1,
        scale: 0.95,
        y: 50,
        transition: { duration: 0.2 }, // 快速重置
      });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.1, scale: 0.95, y: 50 }} // 初始状态：透明、缩小、下移
      animate={controls}
      style={{ overflow: "hidden" }} // 防止动画过程中内容溢出
    >
      {children}
    </motion.div>
  );
}
