import { ButtonProps } from "../../types/types";

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className='button'>{label}</button>
  )
}