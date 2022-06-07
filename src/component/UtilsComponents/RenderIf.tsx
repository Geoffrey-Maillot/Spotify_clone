interface Props {
  children: any;
  bool: boolean;
}

const RenderIf = ({ children, bool }: Props) => {
  if (!bool) return null;
  return children;
};

export default RenderIf;
