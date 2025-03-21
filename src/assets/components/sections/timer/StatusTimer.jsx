import RadioButton from "./RadioButton";

const typeButton = [
  {
    id: "pomodoro",
    text: "Pomodoro",
    initialChecked: true,
  },
  {
    id: "shortBreak",
    text: "Short Break",
    initialChecked: false,
  },
  {
    id: "longBreak",
    text: "Long Break",
    initialChecked: false,
  },
];

const StatusTimer = () => {
  return (
    <>
      <fieldset className="bg-yellow-100 w-full grid grid-cols-3 rounded-full shadow-md">
        {/* <RadioButton htmlFor="pomodoro" id="pomodoro" text="Pomodoro" checked/> */}
        {typeButton.map((button) => (
          <RadioButton
            key={button.id}
            htmlFor={button.id}
            id={button.id}
            text={button.text}
            checked={button.initialChecked}
          />
        ))}
      </fieldset>
    </>
  );
};

export default StatusTimer;
