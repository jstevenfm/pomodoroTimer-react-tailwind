import ButtonControlTimer from '../../sections/timer/ButtonControlTimer';
import ResetButtonIcon from '../../ui/ResetButtonIcon';
import PlayButtonIcon from '../../ui/PlayButtonIcon';
import PauseButtonIcon from '../../ui/PauseButtonIcon';
import NextButtonIcon from '../../ui/NextButtonIcon';

const typeButton = [
  {
    title: 'Reset',
    icon: <ResetButtonIcon />,
    initialClass: ''
  },
  {
    title: 'Play',
    icon: <PlayButtonIcon />,
    initialClass: ''
  },
  {
    title: 'Pause',
    icon: <PauseButtonIcon />,
    initialClass: 'hidden'
  },
  {
    title: 'Next',
    icon: <NextButtonIcon />,
    initialClass: ''
  }
]

const ControlsTimer = () => {
  return (
    <div className="bg-yellow-100 shadow-md rounded-full py-2 px-5 w-3/4 max-w-72 grid grid-cols-3 justify-items-center">
      {typeButton.map( button => {
        return (
          <ButtonControlTimer key={button.title} title={button.title} className={button.initialClass}>
            {button.icon}
          </ButtonControlTimer>
        )
      })}
    </div>
  );
}

export default ControlsTimer