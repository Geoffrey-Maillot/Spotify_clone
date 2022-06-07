interface Props {
  children?: any;
  label?: string;
}

const H1 = ({ children, label }: Props) => (
  <h1 className={`font-circularBlack  text-white text-8xl tracking-tight`}>
    {label ? label : children}
  </h1>
);

export default H1;
