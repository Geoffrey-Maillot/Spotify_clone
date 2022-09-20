interface Props {
  children?: React.ReactNode;
  label?: string;
  size?: 'xl8' | 'xl7';
}

// == Component =>
const H1 = ({ children, label }: Props) => {
  return (
    <h1
      className={`font-circularBlack  text-white  text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-tight`}
    >
      {label ? label : children}
    </h1>
  );
};

export default H1;
