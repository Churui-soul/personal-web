"use client";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface StreamgraphProps {
  data: number[][];
  width?: number;
  height?: number;
  className?: string;
  labels: string[];
  colors: string[];
}

export default function Streamgraph({
  data = [],
  width = 500,
  height = 300,
  className = "",
  labels = [],
  colors = [],
}: StreamgraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const { innerWidth } = window;
    const effectiveWidth = Math.min(width, innerWidth);
    const minFontSize = 8; // 最小字体大小
    const maxFontSize = 16; // 最大字体大小
    const padding = 8; // 文字与区域边界的间距

    // 比例尺定义
    const x = d3
      .scaleLinear<number, number>()
      .domain([0, data[0].length - 1])
      .range([0, effectiveWidth]);

    const y = d3.scaleLinear<number, number>().range([height, 0]);

    // 面积生成器
    const area = d3
      .area<number[]>()
      .x((_, i) => x(i))
      .y0((d) => y(d[0]))
      .y1((d) => y(d[1]))
      .curve(d3.curveMonotoneX);

    // 堆叠布局
    const stack = d3
      .stack<number[]>()
      // @ts-expect-error 这个怎么改都不会符合要求
      // 这个无论怎么改都没用
      .keys(d3.range(data.length))
      .offset(d3.stackOffsetExpand)
      .order(d3.stackOrderNone);

    // 更新图表
    const layers = stack(d3.transpose(data));
    // @ts-expect-error 应该是types版本对不上，一直不行
    y.domain([
      d3.min(layers, (l) => d3.min(l, (d) => d[0])),
      d3.max(layers, (l) => d3.max(l, (d) => d[1])),
    ]);

    // 绘制流图
    const paths = svg
      .selectAll("path")
      .data(layers)
      .join("path")
      .attr("fill", (_, i) => colors[i])
      .attr("opacity", 0.8)
      .attr("stroke", "#fff")
      .attr("stroke-width", 0)
      .on("mouseenter", (event) => {
        d3.select(event.target)
          .transition()
          .duration(350)
          .attr("stroke-width", 4);
      })
      .on("mouseleave", (event) => {
        d3.select(event.target)
          .transition()
          .duration(800)
          .attr("stroke-width", 0);
      });

    // 应用过渡动画
    // @ts-expect-error 应该是types版本对不上，一直不行
    paths.transition().duration(1500).attr("d", area);

    // 在动画完成后添加标签
    paths
      .transition()
      .end()
      .then(() => {
        if (labels.length > 0) {
          // 创建标签容器
          const labelGroup = svg.append("g").attr("class", "labels");

          layers.forEach((layer, i) => {
            if (i >= labels.length) return;

            const labelText = labels[i];

            // 寻找区域内最大内切圆位置
            let circle = findMaxCircleInArea(layer, x, y);

            // 如果没有找到合适的圆，尝试使用区域最宽处
            if (!circle || circle.radius < padding * 2) {
              circle = findWidestPointInArea(layer, x, y);
            }

            // 如果找到合适的位置
            if (circle && circle.radius > padding) {
              // 创建临时文本元素测量宽度
              const tempText = svg
                .append("text")
                .attr("font-size", maxFontSize)
                .attr("visibility", "hidden")
                .attr("text-anchor", "middle")
                .text(labelText);

              tempText.remove();

              // 计算基于圆半径的最大可能字体大小
              const maxPossibleFontSize = Math.min(
                maxFontSize,
                ((circle.radius - padding) * 2) / (labelText.length * 0.5)
              );

              // 计算基于SVG宽度的最大可能字体大小
              const fontSizeByWidth = Math.min(
                maxFontSize,
                ((effectiveWidth - padding * 2) / labelText.length) * 0.8
              );

              // 最终字体大小
              const fontSize = Math.max(
                minFontSize,
                Math.min(
                  maxPossibleFontSize,
                  fontSizeByWidth,
                  circle.radius * 0.8
                )
              );

              // 只有当字体大小足够且圆面积足够时才添加标签
              if (fontSize >= minFontSize && circle.radius > fontSize * 1.2) {
                labelGroup
                  .append("text")
                  .attr("class", "area-label")
                  .attr("x", circle.x)
                  .attr("y", circle.y)
                  .attr("dy", "0.35em")
                  .attr("text-anchor", "middle")
                  .attr("fill", "#334155")
                  .attr("font-size", fontSize)
                  .attr("pointer-events", "none")
                  .attr("font-weight", "bold")
                  .text(labelText);
              }
            }
          });
        }
      });

    // 寻找区域内最大内切圆
    function findMaxCircleInArea(
      layer: string | any[],
      xScale: d3.ScaleLinear<number, number, never>,
      yScale: d3.ScaleLinear<number, number, never>
    ) {
      let bestCircle = null;
      let maxRadius = 0;

      // 采样点数量
      const sampleCount = Math.min(50, layer.length);

      // 对区域进行采样
      for (let i = 0; i < sampleCount; i++) {
        const index = Math.floor((i * layer.length) / sampleCount);
        const xCoord = xScale(index);
        const y0 = yScale(layer[index][0]);
        const y1 = yScale(layer[index][1]);
        const centerY = (y0 + y1) / 2;

        // 计算当前点到上下边界的最小距离
        const verticalRadius = Math.min(
          Math.abs(centerY - y0),
          Math.abs(y1 - centerY)
        );

        // 检查左右边界
        let leftDist = xCoord; // 默认到左边界的距离
        let rightDist = xScale(layer.length - 1) - xCoord; // 默认到右边界的距离

        // 向左查找
        for (let j = index - 1; j >= 0; j--) {
          const prevY0 = yScale(layer[j][0]);
          const prevY1 = yScale(layer[j][1]);

          // 如果当前y坐标超出了上下边界，停止查找
          if (centerY < prevY0 || centerY > prevY1) break;

          leftDist = xCoord - xScale(j);
        }

        // 向右查找
        for (let j = index + 1; j < layer.length; j++) {
          const nextY0 = yScale(layer[j][0]);
          const nextY1 = yScale(layer[j][1]);

          // 如果当前y坐标超出了上下边界，停止查找
          if (centerY < nextY0 || centerY > nextY1) break;

          rightDist = xScale(j) - xCoord;
        }

        // 左右方向的最小距离
        const horizontalRadius = Math.min(leftDist, rightDist);

        // 当前点的最大可能半径
        const currentRadius = Math.min(verticalRadius, horizontalRadius);

        // 更新最佳圆
        if (currentRadius > maxRadius) {
          maxRadius = currentRadius;
          bestCircle = {
            x: xCoord,
            y: centerY,
            radius: currentRadius,
          };
        }
      }

      return bestCircle;
    }

    // 寻找区域最宽处作为备选方案
    function findWidestPointInArea(
      layer: string | any[],
      xScale: d3.ScaleLinear<number, number, never>,
      yScale: d3.ScaleLinear<number, number, never>
    ) {
      let bestX = 0;
      let bestY = 0;
      let maxHeight = 0;

      // 采样点数量
      const sampleCount = Math.min(50, layer.length);

      // 对区域进行采样
      for (let i = 0; i < sampleCount; i++) {
        const index = Math.floor((i * layer.length) / sampleCount);
        const y0 = yScale(layer[index][0]);
        const y1 = yScale(layer[index][1]);
        const height = Math.abs(y1 - y0);

        if (height > maxHeight) {
          maxHeight = height;
          bestX = xScale(index);
          bestY = (y0 + y1) / 2;
        }
      }

      // 返回一个虚拟的圆，半径为高度的一半
      return {
        x: bestX,
        y: bestY,
        radius: maxHeight / 2,
      };
    }

    // 数轴
    const xAxisTop = d3
      .axisTop(x)
      .ticks(data[0].length - 1)
      // @ts-expect-error 应该是types版本对不上，一直不行
      .tickFormat((d) => ((d + 1) * 5).toString());

    const yAxisRight = d3
      .axisRight(y)
      .ticks(5)
      // @ts-expect-error 应该是types版本对不上，一直不行
      .tickFormat((d) => `${(d * 100).toFixed(0)}%`);

    svg
      .append("g")
      .attr("transform", `translate(${40}, ${height + 1})`)
      .call(xAxisTop);

    svg
      .append("g")
      .attr("transform", `translate(${-1}, ${30})`)
      .call(yAxisRight);

    return () => {
      svg.selectAll("*").remove();
    };
  }, [data, width, height, labels, colors]);

  return (
    <div className={className}>
      <svg ref={svgRef} viewBox="0,0,500,300" className="w-full h-full" />
    </div>
  );
}
