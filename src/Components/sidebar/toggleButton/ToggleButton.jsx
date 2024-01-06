import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
function ToggleButton({ open, setOpen }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {open ? <IoCloseOutline size={24} /> : <HiBars3 size={24} />}
    </button>
  );
}

export default ToggleButton;
