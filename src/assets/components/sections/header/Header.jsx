const Header = () => {
  return (
    <header className="flex justify-between w-full p-4">
      <a className="flex cursor-pointer hover:scale-110" href="/">
        ⏲️
        <h1 className="px-3 self-center text-xl font-semibold">Pomodoro Timer</h1>
      </a>
      <button className="cursor-pointer hover:scale-110">
        ⚙️
      </button>
    </header>
  )
}

export default Header