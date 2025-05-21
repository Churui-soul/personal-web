import IconFont from "@/components/icon/font";

const skillList = [
  [{
    name: "HTML/CSS",
    level: 9,
  },
  {
    name: "JavaScript/TypeScript",
    level: 9,
  },
  {
    name: "Node.js/Python",
    level: 5,
  },
  {
    name: "React",
    level: 4,
  }],
  [{
    name: "Vue",
    level: 9,
  },
  {
    name: "Openlayers",
    level: 9,
  },
  {
    name: "Cesium",
    level: 6,
  },
  {
    name: "Webpack",
    level: 6,
  }],
  [{
    name: "Echarts/F2",
    level: 6,
  },
  {
    name: "Skills",
  },
  {
    name: "C#/Unity",
    level: 2,
  }]
]
export default function Skill() {
  return (
    <div className="px-4 lg:px-16 xl:px-32 2xl:px-44 flex gap-4 flex-col">
      {skillList.map((skillRow, rowIndex) => (
        <div className="flex gap-4 flex-wrap lg:flex-nowrap" key={rowIndex}>
          {skillRow.map((skill, index) => (
            <div key={index} className={ skill.level !== undefined ? 'flex-1 font-sans accentWhiteBg rounded-xl relative overflow-hidden min-w-[200px]' : 'text-orange-400 text-8xl accentDarkBg h-fit m-auto font-semibold p-12 rounded-3xl hidden lg:block' }>
              {skill.level !==undefined ? (
                <div className="h-full min-h-[130px] px-4 py-8">
                  <div className="flex items-start mb-3 justify-between">
                    <div className="font-fantasy text-lg">{skill.name}</div>
                  </div>
                  <div className="text-sm text-gray-400">{'█'.repeat(skill.level) + '░'.repeat(10-skill.level)}</div>
                </div>
              ) : (<div className="relative">
                <IconFont
                  name="hat-wizard"
                  size={48}
                  className="absolute top-[-32px] left-[-6px] rotate-[-15deg]"
                />
                <span>{skill.name}</span>
              </div>)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}