import { useState, useCallback, useEffect } from 'react';
import { promotionDetails } from '../services/api';

const usePromotionDetail = (promotionId: string) => {
  const [promotionDetail, setPromotionDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const getPromotionDetail = useCallback(async () => {
    if (!promotionId) return;

    setIsLoading(true);
    setError(null);
    try {
      const { data } = await promotionDetails(promotionId);
      setPromotionDetail(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [promotionId]);

  useEffect(() => {
    getPromotionDetail();
  }, [getPromotionDetail]);

  return { promotionDetail, isLoading, error, refresh: getPromotionDetail };
};

export default usePromotionDetail;