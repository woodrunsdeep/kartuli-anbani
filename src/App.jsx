import { useDispatch, useSelector } from 'react-redux';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import Settings from './components/Settings/Settings';
import Controls from './components/Controls/Controls';
import Footer from './components/Footer/Footer';
import { selectSettings, setVisibility } from './slices/settingsSlice';
import { restart, selectSession } from './slices/sessionSlice';
import Dialog from './components/Dialog/Dialog';
import Icon from './components/Icon/Icon';

function App() {
  const { isVisible, deckOrder, theme } = useSelector(selectSettings);
  const dispatch = useDispatch();
  const { inProgress } = useSelector(selectSession);

  return (
    <div className="content" data-theme={theme}>
      <div inert={isVisible ? '' : null}>
        <Carousel />
        <Controls>
          <div className="controls__actions">
            <Button className="button-icon" onClick={() => dispatch(setVisibility(true))}>
              <Icon iconName="Sliders" aria-hidden="true" />
            </Button>
            {inProgress ? (
              <Button className="button-icon" onClick={() => dispatch(restart(deckOrder))}>
                <Icon iconName="ArrowCounterclockwise" aria-hidden="true" />
              </Button>
            ) : null}
          </div>
          <Form className="controls__form" />
        </Controls>
        <Footer />
      </div>
      <Dialog open={isVisible}>
        <Settings />
      </Dialog>
    </div>
  );
}

export default App;
