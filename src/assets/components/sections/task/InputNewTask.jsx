import IconAcceptTask from "../../icons/IconAcceptTask"
import IconCancelTask from "../../icons/IconCancelTask"

const InputNewTask = ({ setTasks, className, setShowInputNewTask }) => {

  const addNewTask = (e) => {
    e.preventDefault();

    const inputTitle = e.target.title.value;

    if (inputTitle === "") {
      return;
    }
    const newTask = {
      id: Math.random().toString(36).substring(2, 9),
      title: inputTitle,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    e.target.title.value = "";
  };

  return (
    <form onSubmit={addNewTask} className={`flex justify-between items-center bg-yellow-300 mt-5 rounded-xl p-4 gap-4 ${className}`}>
      <input type="text" name="title" className="flex-2/3" />
        <button title="Accept New Task" className="hover:scale-105 cursor-pointer" type="submit" >
          <IconAcceptTask />
        </button>
        <button title="Cancel New Task" className="hover:scale-105 cursor-pointer" type="reset" onClick={() => setShowInputNewTask(false)}>
          <IconCancelTask />
        </button>

    </form>
  )
}

export default InputNewTask