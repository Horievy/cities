
import { useAppSelector } from '../../hooks/reduxHooks';
import { getErrorMessage } from '../../store/app-data/selectors';
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorMessage);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}
