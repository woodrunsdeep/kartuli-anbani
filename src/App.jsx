import { useDispatch, useSelector } from 'react-redux';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import Settings from './components/Settings/Settings';
import Controls from './components/Controls/Controls';
import Footer from './components/Footer/Footer';
import { selectSettings, setVisibility } from './slices/settingsSlice';
import { restart } from './slices/sessionSlice';
import Dialog from './components/Dialog/Dialog';

function App() {
  const { isVisible, deckOrder } = useSelector(selectSettings);
  const dispatch = useDispatch();

  return (
    <>
      <div className="content" inert={isVisible ? '' : null}>
        <Carousel />
        <Controls>
          <div className="controls__actions">
            <Button onClick={() => dispatch(setVisibility(true))}>⚙️</Button>
            <Button onClick={() => dispatch(restart(deckOrder))}>♻️</Button>
          </div>
          <Form className="controls__form" />
        </Controls>
        <Footer />
      </div>
      <Dialog open={isVisible}>
        <Settings />
      </Dialog>
    </>
  );
}

export default App;
