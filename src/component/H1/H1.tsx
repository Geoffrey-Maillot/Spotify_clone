interface Props {
  children?: string;
  label?: string;
}

const H1 = ({ children, label }: Props) => (
  <p className={`font-circularBlack  text-white text-8xl tracking-tight`}>
    {label ? label : children}
  </p>
);

export default H1;
