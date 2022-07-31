// State
import { observer } from 'mobx-react';
import auth from '../../mobx/auth';

// hook form
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Import Router
import { Navigate } from 'react-router-dom';

// Import Component =>
import Input from './Input';

interface Inputs {
  pseudo: string;
  password: string;
};

const schema = yup.object({
  pseudo: yup.string().required('Remplir le champs'),
  password: yup.string().required('Remplir le champs'),
});

const Form = observer(() => {
  const methods = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = () => {
    auth.connection();
  };

  return (
    <>
      {auth.isAuth && <Navigate to="/" replace />}
      <FormProvider {...methods}>
        <form
          className=" w-full flex flex-col justify-start items-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block  font-circularBold text-lg mb-2">
              Adresse email ou nom d'utilisateur
            </label>
            <Input
              type="text"
              placeholder=" Adresse email ou nom d'utilisateur"
              name="pseudo"
            />
          </div>
          <div>
            <label className="block  font-circularBold text-lg mb-2">
              Mot de passe
            </label>
            <Input
              type="password"
              placeholder=" Mot de passe"
              name="password"
            />
          </div>
          <button
            disabled={isSubmitting}
            className="w-[18.75rem] sm:w-[28.125rem] h-[3.25rem] uppercase py-3 rounded-full bg-green-200 active:bg-green-300 hover:scale-105"
          >
            Se connecter
          </button>
        </form>
      </FormProvider>
    </>
  );
});

export default Form;
