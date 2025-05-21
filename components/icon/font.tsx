type Props = {
    name: string;
    size: number;
    className: string;
};

export default function FontClass({ name, size, className }: Props) {
    return (
        <span className={`iconfont icon-${name} ` + className} style={{ fontSize: size + 'px'}} ></span>
  );
}