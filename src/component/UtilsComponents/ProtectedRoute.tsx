import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  children?: JSX.Element;
  isAllowed: boolean;
  redirectionPath?: string;
}

const ConnectedRoute = ({
  children,
  isAllowed,
  redirectionPath = '/login',
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectionPath} />;
  }

  return children ? children : <Outlet />;
};
export default ConnectedRoute;
