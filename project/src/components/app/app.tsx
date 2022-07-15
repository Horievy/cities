import Main from '../../pages/main/main';
import {PlaceListItemType} from '../../types/mainTypes';

interface AppProps {
  placesList: PlaceListItemType[],
}

function App({placesList}: AppProps): JSX.Element {
  return (<Main placesList={placesList}/>);
}

export default App;
