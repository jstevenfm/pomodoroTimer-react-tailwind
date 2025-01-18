import RadioButton from "./RadioButton"

const StatusTimer = () => {
  return (
    <>
      <fieldset className="bg-yellow-100 w-full grid grid-cols-3 rounded-full shadow-md">
        <RadioButton htmlFor="pomodoro" id="pomodoro" text="Pomodoro" checked/>
        <RadioButton htmlFor="shortBreak" id="shortBreak" text="Short Break" />
        <RadioButton htmlFor="longBreak" id="longBreak" text="Long Break" />
      </fieldset>
    </>
  )
}

export default StatusTimer