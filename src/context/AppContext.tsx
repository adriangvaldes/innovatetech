import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useRef,
  RefObject,
} from "react";
import { fetchUsers } from "../api/api";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type GeneralContextProps = {
  userFetchLoading: boolean;
  userInfoShow: boolean;
  userData: UserType[];
  userSelected: UserType | null;
  bottomSheetRef: RefObject<BottomSheetModal>;
  showUserInfo: (user: UserType) => void;
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
  const [userSelected, setUserSelected] = useState<UserType | null>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  function showUserInfo(user: UserType) {
    if (!bottomSheetRef) return;
    setUserSelected(user);
    setUserInfoShow(true);
    bottomSheetRef.current?.present();
  }

  function closeUserInfo() {
    setUserSelected(null);
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
        userSelected,
        bottomSheetRef,
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
