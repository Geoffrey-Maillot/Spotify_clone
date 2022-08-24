interface Props {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl2' | 'xl3';
  clamp?: boolean;
  nbrLineClamp?: number;
  color?:
    | 'white'
    | 'gray'
    | 'mediumGray'
    | 'lightGray'
    | 'veryLightGray'
    | 'blue'
    | 'lightWhite'
    | 'dark';
}

// == Component =>
const Paragraph = ({
  children,
  className: additionalClass,
  label,
  size = 'sm',
  color = 'lightGray',
  clamp,
  nbrLineClamp = 2,
}: Props) => {
  const fontSize: Record<string, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl2: 'text-2xl',
    xl3: 'text-3xl',
  };

  const colors: Record<string, string> = {
    white: 'text-white',
    lightWhite: 'text-white/70',
    gray: 'text-gray-300',
    mediumGray: 'text-gray-150',
    lightGray: 'text-gray-200',
    veryLightGray: 'text-gray-100',
    blue: 'text-blue-100',
    dark: 'text-dark-400',
  };
  return (
    <p
      className={` ${additionalClass} font-circularBook ${
        clamp && 'line-clamp'
      } ${colors[color]} ${fontSize[size]}`}
      style={{ WebkitLineClamp: nbrLineClamp }}
    >
      {label ? label : children}
    </p>
  );
};

export default Paragraph;
