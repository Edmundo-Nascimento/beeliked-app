import { useNavigate } from "react-router-dom";
import Button from "../components/button/button";
import { authentication } from "../services/api";
import Storage, { LocalStorageKeyEnum } from "../utils/local-storage";

export default function AuthPage() {
  const navigate = useNavigate();

  async function auth() {
    try {
      const payload = {
        client_id: '1f2a9705-3cb2-4f17-9c2b-2327dea85bc1',
        client_secret: '1rsU0vkFcVhBfcn5JMRM1PlVMGNy6J',
      }

      const { data, status } = await authentication(payload)

      if (status === 200) {
        Storage.set(data, LocalStorageKeyEnum.LOCAL_STORAGE_KEY);
        navigate('/home')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-page-content">
        <a href="http://www.beeliked.com/">
          <img width={158} height={36} src="/images/beeliked.svg" alt="Beeliked" loading='lazy' title='Beeliked' />
        </a>

        <div className="btn-content">
          <Button label="Clique para autenticar e entrar" onClick={auth} />
        </div>
      </div>
    </div>
  )
}