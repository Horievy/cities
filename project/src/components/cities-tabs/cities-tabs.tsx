import { CITIES } from '../../const';
import CityTab from '../city-tab/city-tab';


export default function CitiesTabs() {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            CITIES.map((city) => (
              <CityTab
                key={city.title}
                cityName={city.title}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}
