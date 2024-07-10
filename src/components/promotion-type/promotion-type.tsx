export default function PromotionType({ type }: any) {

  return type === "anonymous" ? (
    <div className='type anonymous'>
      <span className="type-value">Anonymous</span>
    </div>
  ) : (
    <div className='type personalized'>
      <span className="type-value">Personalized</span>
    </div>
  )
}