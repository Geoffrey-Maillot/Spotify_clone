// Import form:
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Import Component
import RenderIf from '../UtilsComponents/RenderIf';

// Import Icons
import { RiSearchLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { searchHeader } from '../HeaderNav/HeaderNavSearch.stories';

type Input = {
  searchValue: string;
};

const schema = yup.object({
  searhValue: yup.string().required(),
});

// Import == Component =>
const Search = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = (data: Input) => {
    console.log('submit');
    console.log(data);
  };

  console.log(watch('searchValue'));
  console.log(errors);

  return (
    <form className="w-full flex justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-[364px]  w-full h-10 bg-white flex justify-center items-center gap-4 px-4 rounded-full  ">
        <RiSearchLine size="1.5rem" color="#000" />
        <input
          className="h-10 focus:outline-none grow"
          type="text"
          placeholder="Artistes, titres ou podcasts"
          {...register('searchValue')}
        />
        {/*<RenderIf bool={search.length > 0}>
          <button className="ml-auto">
            <GrClose size="1.5rem" color="#000" onClick={resetSearch} />
          </button>
        </RenderIf>*/}
      </div>
    </form>
  );
};

export default Search;
