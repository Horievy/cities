import React from 'react';
import { CITIES } from '../../const';
import CityTab from '../city-tab/city-tab';


function CitiesTabs() {
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

export default React.memo(CitiesTabs);
