// State
import { observer } from 'mobx-react-lite';
import auth from '../../state/auth';

// hook form
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Import Router
import { Navigate } from 'react-router-dom';

// Import Component =>
import Input from './Input';
import { InputType, InputName } from './Input';

interface Inputs {
  [InputName.Pseudo]: string;
  [InputName.Password]: string;
}

const schema = yup.object({
  pseudo: yup.string().required('Remplir le champs'),
  password: yup.string().required('Remplir le champs'),
});

const Form = observer(() => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = () => {
    auth.connection();
  };

  return (
    <>
      {auth.isAuth && <Navigate to="/" replace />}

      <form
        className=" w-full flex  justify-center items-center px-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="w-full ">
            <label className="block  font-circularBold text-lg mb-2">
              Adresse email ou nom d'utilisateur
            </label>
            <Input
              type={InputType.Text}
              placeholder=" Adresse email ou nom d'utilisateur"
              inputName={InputName.Pseudo}
              errors={errors}
              {...register(InputName.Pseudo)}
            />
          </div>
          <div className="w-full ">
            <label className="block  font-circularBold text-lg mb-2">
              Mot de passe
            </label>
            <Input
              type={InputType.Password}
              placeholder=" Mot de passe"
              inputName={InputName.Password}
              errors={errors}
              {...register(InputName.Password)}
            />
          </div>
          <button
            disabled={isSubmitting}
            className="w-[18.75rem] sm:w-[28.125rem] h-[3.25rem] uppercase py-3 rounded-full bg-green-200 active:bg-green-300 hover:scale-105"
          >
            Se connecter
          </button>
        </div>
      </form>
    </>
  );
});

export default Form;
