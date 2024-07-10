import { useCallback, useEffect, useState } from "react";
import { allInviteLinks } from "../services/api";
import { capitalizeFirstLetter } from "../utils/util";
import { formatISODate } from "../utils/date";
import { CustomInviteLinkProps, InviteLinkData } from "../types/invite-link";

const useInviteLinks = () => {
  const [inviteLinks, setInviteLinks] = useState<CustomInviteLinkProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getAllInviteLinks = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await allInviteLinks();

      const list = data?.data.map((el: InviteLinkData) => {
        if (el?.data) {
          const d = el.data;
          return {
            name: `${capitalizeFirstLetter(d['first-name'])} ${capitalizeFirstLetter(d['last-name'])}`,
            createdAt: formatISODate(el?.created_at) ?? "--",
            email: d.email,
            type: 'personalized',
            ...el,
          };
        } else {
          return {
            name: "",
            createdAt: formatISODate(el?.created_at),
            email: "",
            type: 'anonymous',
            ...el,
          };
        }
      });

      setInviteLinks(list);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllInviteLinks();
  }, [getAllInviteLinks]);

  return { inviteLinks, isLoading, error, refresh: getAllInviteLinks };
};

export interface UseInviteLinksProps {
  inviteLinks: CustomInviteLinkProps[];
  isLoading: boolean;
  error: unknown;
  refresh: () => void
}

export default useInviteLinks;