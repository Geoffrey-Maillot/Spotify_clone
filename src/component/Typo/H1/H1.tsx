interface Props {
  children?: any;
  label?: string;
  size?: 'xl8' | 'xl7';
}

// == Component =>
const H1 = ({ children, label, size = 'xl8' }: Props) => {
  const sizes: { [x: string]: string } = {
    xl8: 'xl:text-8xl',
    xl7: 'xl:text-7xl',
  };

  return (
    <h1
      className={`font-circularBlack  text-white ${sizes[size]} text-6xl tracking-tight`}
    >
      {label ? label : children}
    </h1>
  );
};

export default H1;
