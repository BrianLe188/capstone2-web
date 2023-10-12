import GenderService from "@/services/genders";
import { Gender } from "@/utils/types";
import { ReactElement, createContext, useEffect, useState } from "react";

type Init = {
  genders: Array<Gender>;
};

const initialState: Init = {
  genders: [],
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }: { children: ReactElement }) => {
  const [genders, setGenders] = useState<Array<Gender>>([]);

  useEffect(() => {
    loadGenders();
  }, []);

  const loadGenders = async () => {
    const res = await GenderService.getGenders();
    if (res) {
      setGenders(res);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        genders,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
