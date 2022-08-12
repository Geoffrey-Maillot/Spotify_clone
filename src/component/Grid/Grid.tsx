interface Props {
  children: React.ReactNode;
}

const Grid = ({ children }: Props) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(12.5rem,_1fr))] place-items-center gap-6 py-4">
      {children}
    </section>
  );
};

export default Grid;
