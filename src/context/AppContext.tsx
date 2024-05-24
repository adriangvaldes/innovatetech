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
  filterModalShow: boolean;
  filterApplied: boolean;
  userInfoShow: boolean;
  userData: UserType[];
  userSearched: UserType[];
  userSelected: UserType | null;
  bottomSheetRef: RefObject<BottomSheetModal>;
  showUserInfo: (user: UserType) => void;
  handleGenderToSearch: (genders?: GenderSearch) => void;
  closeUserInfo: () => void;
  nextPage: () => void;
  searchUser: (search: string) => void;
  openFilterModal: () => void;
  closeFilterModal: () => void;
};

export const GeneralContext = createContext({} as GeneralContextProps);

export const GeneralContextProvider: React.FC<CardProviderProps> = ({
  children,
}) => {
  const [userInfoShow, setUserInfoShow] = useState(false);
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState<UserType[]>([]);
  const [userSearched, setUserSearched] = useState<UserType[]>([]);
  const [userFetchLoading, setUserFetchLoading] = useState(false);
  const [filterApplied, setFilterApplied] = useState(false);
  const [filterModalShow, setFilterModalShow] = useState(false);
  const [userSelected, setUserSelected] = useState<UserType | null>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [search, setSearch] = useState("");

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

  function closeFilterModal() {
    setFilterModalShow(false);
  }

  function openFilterModal() {
    setFilterModalShow(true);
  }

  async function nextPage() {
    setPage((prev) => prev + 1);
    await loadUsers();
  }

  function handleGenderToSearch(gender?: GenderSearch) {
    loadUsers(gender, "genderSearch");
    setFilterApplied(!!gender);
  }

  function handleSearch() {
    setUserSearched(
      userData.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  function searchUser(searchToFind: string) {
    setSearch(searchToFind);
  }

  async function loadUsers(gender?: Gender, genderSearch?: "genderSearch") {
    if (search) return;
    setUserFetchLoading(true);
    try {
      const userFetched = await fetchUsers(page, gender);

      setUserData((prev) => {
        const previousData = genderSearch ? [] : [...prev];
        return [...previousData, ...userFetched];
      });
    } catch (error) {
      console.log(error);
    }
    setUserFetchLoading(false);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    if (userData.length === 0) return;
    setUserSearched(userData.map((el) => el));
  }, [userData]);

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
        searchUser,
        userSearched,
        openFilterModal,
        closeFilterModal,
        filterModalShow,
        handleGenderToSearch,
        filterApplied,
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
