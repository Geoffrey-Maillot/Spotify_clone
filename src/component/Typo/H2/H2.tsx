interface Props {
  children?: any;
  label?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl2' | 'xl3' | 'xl5';
  color?: 'white' | 'gray' | 'lightGray' | 'veryLightGray' | 'blue';
  truncate?: boolean;
}

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

const H2 = ({
  children,
  label,
  size = 'sm',
  color = 'white',
  truncate,
}: Props) => (
  <h2
    className={`font-circularBold tracking-tighter truncate max-w-[21.5625rem]  ${
      colors[color]
    } ${fontSize[size]}  ${truncate && 'line-clamp'}`}
  >
    {label ? label : children}
  </h2>
);

export default H2;
