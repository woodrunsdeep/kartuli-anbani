import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import Settings from './components/Settings/Settings';
import Controls from './components/Controls/Controls';
import Footer from './components/Footer/Footer';
import { selectSettings } from './slices/settingsSlice';
import { restart, selectSession } from './slices/sessionSlice';
import Dialog from './components/Dialog/Dialog';
import Icon from './components/Icon/Icon';

function App() {
  const { deckOrder, theme } = useSelector(selectSettings);
  const dispatch = useDispatch();
  const { inProgress } = useSelector(selectSession);

  const dialogRef = useRef(null);
  const showModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();
  const handleClickOutsideModal = (evt) => {
    /*
      Doesn't cover the corner case - clicking inside dialog and releasing outside of a dialog.
      In such situations (e.g. text highlighting) the dialog will be closed.
    */

    if (!evt.target.contains(dialogRef.current)) return;
    dialogRef.current.close();
  };

  return (
    <div
      className="content"
      data-theme={theme}
      onClick={(evt) => handleClickOutsideModal(evt)}
    >
      <Carousel />
      <Controls>
        <div className="controls__actions">
          <Button className="button-icon" onClick={showModal}>
            <Icon iconName="Sliders" aria-hidden="true" />
          </Button>
          {inProgress ? (
            <Button className="button-icon" onClick={() => dispatch(restart(deckOrder))}>
              <Icon iconName="ArrowCounterclockwise" aria-hidden="true" />
            </Button>
          ) : null}
        </div>
        <Form />
      </Controls>
      <Footer />
      <Dialog ref={dialogRef}>
        <Settings closeModal={closeModal} />
      </Dialog>
    </div>
  );
}

export default App;
