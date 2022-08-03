import { CITIES } from '../../const';
import CityTab from '../city-tab/city-tab';

interface CitiesTabsProps {
  activeCity: string,
}

export default function CitiesTabs({activeCity}: CitiesTabsProps) {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            CITIES.map((city) => (
              <CityTab
                key={city.title}
                cityName={city.title}
                isActive={city.title === activeCity}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}
