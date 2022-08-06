import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { changeCity } from '../../store/action';
import { City } from '../../types/mainTypes';


interface CityTabProps {
  isActive?: boolean,
  cityName: string
}

export default function CityTab({isActive, cityName}: CityTabProps) {
  const dispatch = useAppDispatch();

  function clickHandler() {
    const activeCity: City = CITIES.find((city) => city.title === cityName) || CITIES[0];

    dispatch(changeCity({city: activeCity}));
  }

  return (
    <li onClick={clickHandler} className='locations__item'>
      <Link to={`#${cityName.toLowerCase()}`} className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}>
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
