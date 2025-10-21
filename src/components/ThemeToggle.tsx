interface ThemeToggleProps {
  isToggled: boolean;
  handleToggle: () => void;
}

const ThemeToggle = ({ isToggled, handleToggle }: ThemeToggleProps) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        id="theme-switch"
        checked={isToggled}
        onChange={handleToggle}
        className="hidden"
      />
      <label 
        htmlFor="theme-switch" 
        className={`
          block w-[60px] h-[30px] rounded-[30px] cursor-pointer relative transition-all duration-300 ease-in-out
          hover:scale-105 shadow-[0_2px_10px_rgba(102,126,234,0.3)]
          ${isToggled 
            ? 'bg-gradient-to-br from-gray-700 to-gray-600' 
            : 'bg-gradient-to-br from-indigo-400 to-purple-500'
          }
        `}
      >
        <span className={`
          absolute top-[3px] left-[3px] w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out
          flex items-center justify-center shadow-[0_2px_5px_rgba(0,0,0,0.2)]
          ${isToggled ? 'translate-x-[30px]' : 'translate-x-0'}
        `}>
          <span className={`
            text-xs absolute transition-all duration-300 ease-in-out
            ${isToggled ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}
          `}>
            🌙
          </span>
          <span className={`
            text-xs absolute transition-all duration-300 ease-in-out
            ${isToggled ? 'opacity-0 -rotate-180' : 'opacity-100 rotate-0'}
          `}>
            ☀️
          </span>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;