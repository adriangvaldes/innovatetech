import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { fetchUsers } from "../api/api";

type GeneralContextProps = {
  userFetchLoading: boolean;
  userInfoShow: boolean;
  userData: UserType[];
  showUserInfo: () => void;
  closeUserInfo: () => void;
  nextPage: () => void;
};

type CardProviderProps = {
  children: ReactNode;
};

export const GeneralContext = createContext({} as GeneralContextProps);

export const GeneralContextProvider: React.FC<CardProviderProps> = ({
  children,
}) => {
  const [userInfoShow, setUserInfoShow] = useState(false);
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState<UserType[]>([]);
  const [userFetchLoading, setUserFetchLoading] = useState(false);

  function showUserInfo() {
    setUserInfoShow(true);
  }

  function closeUserInfo() {
    setUserInfoShow(false);
  }

  function nextPage() {
    setPage((prev) => prev + 1);
  }

  async function loadUsers() {
    setUserFetchLoading(true);
    try {
      const userFetched = await fetchUsers(page);
      setUserData((prev) => [...prev, ...userFetched]);
    } catch (error) {
      console.log(error);
    }
    setUserFetchLoading(false);
  }

  useEffect(() => {
    loadUsers();
  }, [page]);

  return (
    <GeneralContext.Provider
      value={{
        userInfoShow,
        showUserInfo,
        closeUserInfo,
        userData,
        nextPage,
        userFetchLoading,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};
