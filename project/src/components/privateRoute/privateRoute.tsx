import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
