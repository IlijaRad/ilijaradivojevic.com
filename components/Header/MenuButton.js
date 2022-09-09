import CaretDownIcon from "../../public/icons/caret-down.svg";

const MenuButton = () => {
  return (
    <div className="pointer-events-auto md:hidden" data-headlessui-state="">
      <button
        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
        id="headlessui-popover-button-:Rqb6:"
        type="button"
        aria-expanded="false"
        data-headlessui-state=""
      >
        Menu
        <CaretDownIcon />
      </button>
    </div>
  );
};

export default MenuButton;
