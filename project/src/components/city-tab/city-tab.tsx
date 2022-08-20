import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeCity } from '../../store/action';
import { City } from '../../types/mainTypes';

interface CityTabProps {
  cityName: string
}

export default function CityTab({cityName}: CityTabProps) {
  const dispatch = useAppDispatch();
  const {city} = useAppSelector((state) => state);

  const isActive = city.title === cityName;

  function clickHandler() {
    const activeCity: City = CITIES.find((item) => item.title === cityName) || CITIES[0];

    dispatch(changeCity(activeCity));
  }

  return (
    <li onClick={clickHandler} className='locations__item'>
      <Link to={`#${cityName.toLowerCase()}`} className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}>
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
