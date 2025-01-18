import StatusTimer from './timer/StatusTimer'
import CounterTimer from './timer/CounterTimer'
import ControlsTimer from './timer/ControlsTimer'

const Timer = () => {
  return (
    <section className='my-16 mx-auto flex flex-col justify-center items-center'>
      <StatusTimer />
      <CounterTimer />
      <ControlsTimer />
    </section>
  )
}

export default Timer