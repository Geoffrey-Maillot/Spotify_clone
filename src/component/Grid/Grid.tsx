interface Props {
  children: Array<any>;
}

const Grid = ({ children }: Props) => {
  console.log(children);
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] place-items-center gap-6 py-4">
      {children}
    </section>
  );
};

export default Grid;
