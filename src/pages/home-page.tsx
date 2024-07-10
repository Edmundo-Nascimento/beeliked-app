import { useEffect } from 'react'

import Button from '../components/button/button';
import BeelikedLogo from '../components/beeliked-logo/beeliked-logo';
import { useGlobalContext } from '../context/context';
import { useModal } from '../context/modal/modal-context';
import { DetailsList } from '../components/modal/detail-list';
import { RegistrationForm } from '../components/modal/form';
import useInviteLinks, { UseInviteLinksProps } from '../hooks/use-invite-links';
import CustomDataGrid from '../components/table/data-grid';
import PromotionType from '../components/promotion-type/promotion-type';

export default function HomePage() {
  const { setInviteLinks, inviteLinksList }: any = useGlobalContext()
  const { isLoading, inviteLinks }: UseInviteLinksProps = useInviteLinks()
  const { isOpen, openModal, setHeaderContent }: any = useModal();

  const columns = [
    { field: 'createdAt' },
    { field: 'name', onClick: (row: any) => handleOpenDetails(row) },
    { field: 'email' },
    { field: 'type', style: { width: "10%" } },
  ];

  function mapRows(data: any) {
    return data.map(({ type, name, email, ...rest }: any, idx: any) => ({
      ...rest,
      id: `${idx}_inviteLink`,
      name: type === 'anonymous' ? <div className='anonymous-info'></div> : name,
      email: type === 'anonymous' ? <div className='anonymous-info'></div> : email,
      type: <PromotionType type={type} />,
    }));
  }

  function handleOpenDetails(data: any) {
    setHeaderContent({
      title: 'Details',
      description: 'See all infos about this inviteLink'
    });
    openModal(<DetailsList selectedInviteLink={data} />);
  };

  useEffect(() => {
    setInviteLinks(inviteLinks)
  }, [inviteLinks, inviteLinksList])

  return (
    <div className={`app ${isOpen ? 'blurred' : ''}`}>
      <Header />
      <main>
        <CustomDataGrid isLoading={isLoading} columns={columns} rows={mapRows(inviteLinksList || inviteLinks)} showCheckbox={true} showCopy={true} />
      </main>
    </div>
  )
}

function Header() {
  const { openModal, closeModal, setHeaderContent }: any = useModal();

  const handleOpenForm = () => {
    setHeaderContent({
      title: 'Form',
      description: 'Add new promotion'
    })
    openModal(<RegistrationForm onSubmit={handleSubmit} />);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    closeModal();
  };
  return (
    <header className='header'>
      <nav className='navigation'>
        <BeelikedLogo />
        <div className='share'>
          <div className='share__image-content'>
            <img className='share__image' src="/images/share.svg" alt="" />
          </div>
          <div className='share__description-content'>
            <h1 className='title'>Share Center</h1>
            <p className='description'>You can share your promotions, manage your items and create widgets</p>
          </div>
        </div>
        <div className='actions'>
          <img className='notification' src="/images/notifications.svg" alt="" />
          <Button label='Create Promotion' onClick={handleOpenForm} />
          {/* TODO: This button does not exist in figma, but I think it will be necessary. Think of any logic to hide this button and make it appear when an item is selected */}
          {/* <Button label='Show Details' onClick={handleOpenDetails} /> */}
        </div>
      </nav>
    </header>
  )
}