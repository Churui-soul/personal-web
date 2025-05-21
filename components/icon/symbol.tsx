import './style.css'

type Props = {
    name: string;
    size: number;
};

export default function Symbol({ name, size }: Props) {
  return (
    <svg className="icon" aria-hidden="true" width={size} height={size}>
      <use xlinkHref={'#icon-' + name}></use>
    </svg>
  );
}
