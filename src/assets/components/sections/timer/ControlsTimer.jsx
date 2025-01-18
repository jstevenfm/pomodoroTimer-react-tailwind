import ResetButtonIcon from '../../ui/ResetButtonIcon';
import PlayButtonIcon from '../../ui/PlayButtonIcon';
import PauseButtonIcon from '../../ui/PauseButtonIcon';
import NextButtonIcon from '../../ui/NextButtonIcon';

const ButtonControlTimer = ({ title, children }) => {
  return (
    <button className='' title={title}>
      {children}
    </button>
  )
}

const ControlsTimer = () => {
  return (
    <div className="bg-yellow-100 shadow-md rounded-full py-2 px-5 w-3/4 max-w-72 grid grid-cols-3 justify-items-center">
      <ButtonControlTimer title={'Reset'}>
        <ResetButtonIcon />
      </ButtonControlTimer>
      <ButtonControlTimer title={'Play'}>
        <PlayButtonIcon />
      </ButtonControlTimer>
      <ButtonControlTimer title={'Pause'}>
        <PauseButtonIcon />
      </ButtonControlTimer>
      <ButtonControlTimer title={'Next'}>
        <NextButtonIcon />
      </ButtonControlTimer>
    </div>
  );
}

export default ControlsTimer