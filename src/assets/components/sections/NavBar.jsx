import Logo from "../ui/Logo";
import SettingsIcon from "../ui/SettingsIcon";

const NavBar = () => {
  return (
    <nav className=" flex justify-between w-screen">
      <a href="/" className="p-4 flex">
        <Logo />
        <h1 className="self-center px-3 text-xl font-bold">Pomodoro Timer</h1>
      </a>
      <button className="p-4">
        <SettingsIcon />
      </button>
    </nav>
  )
}

export default NavBar