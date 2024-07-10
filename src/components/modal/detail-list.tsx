import usePromotionDetail from '../../hooks/use-promotion-detail';

export const DetailsList = ({ selectedInviteLink }: any) => {
  const { isLoading, promotionDetail }: any = usePromotionDetail(selectedInviteLink?.promotion_id)

  return (
    <div className='details-content'>
      <div className="details-body">
        <div className='simple-header-details'>
          <h6>{selectedInviteLink?.name} {selectedInviteLink.type}</h6>
          <p>{selectedInviteLink?.email}</p>
        </div>
        <div className='simple-details'>
          <h6>Created at</h6>
          <p>{selectedInviteLink?.createdAt}</p>
        </div>
        <div className='simple-details'>
          <h6>Promotion</h6>
          <p>{isLoading ? <p>carregando ...</p> : promotionDetail?.name}</p>
        </div>
        <div className='simple-details'>
          <h6>Invite Code</h6>
          <p>{isLoading ? <p>carregando ...</p> : promotionDetail?.microsite_url}</p>
        </div>
      </div>
      <div className="details-footer">
        <button className="details-footer-btn">
          <img src="/images/share.svg" alt="Share" height={15} />  Share
        </button>
      </div>
    </div>
  );
}