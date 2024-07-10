import { useRef } from "react";

export default function Copy({ value }: any) {
  const textRef = useRef<any>();

  const handleCopy = () => {
    const textToCopy = textRef.current.value;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // TODO: Add a snackbar or toast intead alert to give feedback to the user when them copy any link
        alert(textToCopy);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div onClick={handleCopy} className='copy tooltip'>
      <input type="hidden" ref={textRef} value={`https://mateusblkd.beeliked.promo/frontend-job-test?inv=${value?.code}`} />
      <span className="tooltiptext">Copy InviteLink URL</span>
      <img src="./images/copy_all.svg" />
    </div>
  )
}