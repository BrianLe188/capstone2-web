import GenderService from "@/services/genders";
import AreaService from "@/services/areas";
import type { Area, Gender, Priority, SubjectBlock } from "@/utils/types";
import { ReactElement, createContext, useEffect, useState } from "react";
import PriorityService from "@/services/priorities";
import SubjectBlockService from "@/services/subject-blocks";

type Init = {
  genders: Array<Gender>;
  areas: Array<Area>;
  priorities: Array<Priority>;
  subjectBlocks: Array<SubjectBlock>;
};

const initialState: Init = {
  genders: [],
  areas: [],
  priorities: [],
  subjectBlocks: [],
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }: { children: ReactElement }) => {
  const [genders, setGenders] = useState<Array<Gender>>([]);
  const [areas, setAreas] = useState<Array<Area>>([]);
  const [priorities, setPriorities] = useState<Array<Priority>>([]);
  const [subjectBlocks, setSubjectBlocks] = useState<Array<SubjectBlock>>([]);

  useEffect(() => {
    loadGenders();
    loadAreas();
    loadPriorities();
    loadSubjectBlocks();
  }, []);

  const loadGenders = async () => {
    const res = await GenderService.getGenders();
    if (res) {
      setGenders(res);
    }
  };

  const loadAreas = async () => {
    const res = await AreaService.getAreas();
    if (res) {
      setAreas(res);
    }
  };

  const loadPriorities = async () => {
    const res = await PriorityService.getPriorities();
    if (res) {
      setPriorities(res);
    }
  };

  const loadSubjectBlocks = async () => {
    const res = await SubjectBlockService.getSubjectBlocks();
    if (res) {
      setSubjectBlocks(res);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        genders,
        areas,
        priorities,
        subjectBlocks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
