import { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { sortData } from "../../utils/sort-data";

function SortButtons({ field }: any) {
  const [order, setOrder] = useState("asc")
  const { inviteLinksList, updateList }: any = useGlobalContext()

  function handleClick(order: string) {
    setOrder(prev => prev === 'asc' ? 'desc' : 'asc')
    let data = sortData(inviteLinksList, order, field);
    updateList(data)
  }

  return (
    <div className='sort-content'>
      <button onClick={() => handleClick(order)} className='sort-content__button'></button>
    </div>
  );
}

export default SortButtons;
