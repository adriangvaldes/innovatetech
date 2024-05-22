import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type GeneralContextProps = {
  userInfoShow: boolean;
  showUserInfo: () => void;
  closeUserInfo: () => void;
};

type CardProviderProps = {
  children: ReactNode;
};

export const GeneralContext = createContext({} as GeneralContextProps);

export const GeneralContextProvider: React.FC<CardProviderProps> = ({
  children,
}) => {
  const [userInfoShow, setUserInfoShow] = useState(false);

  function showUserInfo() {
    console.log("IM HERE");

    setUserInfoShow(true);
  }

  function closeUserInfo() {
    setUserInfoShow(false);
  }

  return (
    <GeneralContext.Provider
      value={{
        userInfoShow,
        showUserInfo,
        closeUserInfo,
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
