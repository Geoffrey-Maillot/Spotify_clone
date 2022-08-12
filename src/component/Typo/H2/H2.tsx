interface Props {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl2' | 'xl3' | 'xl5';
  color?: 'white' | 'gray' | 'lightGray' | 'veryLightGray' | 'blue';
  truncate?: boolean;
  clamp?: boolean;
  nbrLineClamp?: number;
}
// == Component =>
const H2 = ({
  children,
  className: additionalClass,
  label,
  size = 'sm',
  color = 'white',
  clamp,
  nbrLineClamp = 1,
}: Props) => {
  const fontSize: { [x: string]: string } = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl2: 'text-2xl',
    xl3: 'text-3xl',
    xl5: 'text-5xl',
  };

  const colors: { [x: string]: string } = {
    white: 'text-white',
    gray: 'text-gray-300',
    lightGray: 'text-gray-200',
    veryLightGray: 'text-gray-100',
    blue: 'text-blue-100',
  };
  return (
    <h2
      className={` ${additionalClass} font-circularBold tracking-tighter  max-w-[21.5625rem]  ${
        colors[color]
      } ${fontSize[size]}  ${clamp && 'line-clamp'}`}
      style={{ WebkitLineClamp: nbrLineClamp }}
    >
      {label ? label : children}
    </h2>
  );
};

export default H2;
