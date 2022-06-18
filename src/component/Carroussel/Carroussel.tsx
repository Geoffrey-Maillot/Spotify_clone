

// TODO: Remplacer any par le composant CardGender
interface Props {
  children: Array<any>
}

const Carroussel = ({children}: Props) => {
  console.log(children)

return (
  <div className="grid grid-flow-col gap-6 overflow-auto w-full grid-cols-[repeat(8,_208px)]   auto-rows-[13.75rem] py-4">
    {children}
  </div>
)};

export default Carroussel;
