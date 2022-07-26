import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  isAuth: boolean;
  redirectionPath?: string;
}

const ConnectedRoute = ({
  children,
  isAuth,
  redirectionPath = '/login',
}: Props) => {
  if (!isAuth) {
    return <Navigate to={redirectionPath} />;
  }

  return children;
};
export default ConnectedRoute;
