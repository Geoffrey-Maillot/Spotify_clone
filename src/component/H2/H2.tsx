interface Props {
  children?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl2' | 'xl3';
  color?: 'white' | 'gray' | 'lightGray';
}

const fontSize: { [x: string]: string } = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl2: 'text-2xl',
  xl3: 'text-3xl',
};

const colors: { [x: string]: string } = {
  white: 'text-white',
  gray: 'text-gray-300',
  lightGray: 'text-gray-200',
};

const H2 = ({ children, label, size = 'sm', color = 'white' }: Props) => (
  <p className={`font-circularBold  ${colors[color]} ${fontSize[size]}`}>
    {label ? label : children}
  </p>
);

export default H2;
