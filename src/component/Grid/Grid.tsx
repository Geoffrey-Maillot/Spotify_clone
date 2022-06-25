interface Props {
  children: Array<any>;
}

const Grid = ({ children }: Props) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))]  gap-6 py-4">
      {children}
    </section>
  );
};

export default Grid;
