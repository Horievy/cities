import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeCity } from '../../store/action';
import { getCity } from '../../store/app-data/selectors';
import { City } from '../../types/mainTypes';

interface CityTabProps {
  cityName: string
}

export default function CityTab({cityName}: CityTabProps) {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCity);

  const isActive = city.name === cityName;

  function handleCityclick() {
    const activeCity: City = CITIES.find((item) => item.name === cityName) || CITIES[0];

    dispatch(changeCity(activeCity));
  }

  return (
    <li onClick={handleCityclick} className='locations__item'>
      <Link to={`#${cityName.toLowerCase()}`} className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}>
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
