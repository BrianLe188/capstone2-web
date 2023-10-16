import GenderService from "@/services/genders";
import AreaService from "@/services/areas";
import type {
  Area,
  Gender,
  Priority,
  SubjectBlock,
  Major,
} from "@/utils/types";
import { ReactElement, createContext, useEffect, useState } from "react";
import PriorityService from "@/services/priorities";
import SubjectBlockService from "@/services/subject-blocks";
import MajorService from "@/services/majors";

type Init = {
  genders: Array<Gender>;
  areas: Array<Area>;
  priorities: Array<Priority>;
  subjectBlocks: Array<SubjectBlock>;
  majors: Array<Major>;
};

const initialState: Init = {
  genders: [],
  areas: [],
  priorities: [],
  subjectBlocks: [],
  majors: [],
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }: { children: ReactElement }) => {
  const [genders, setGenders] = useState<Array<Gender>>([]);
  const [areas, setAreas] = useState<Array<Area>>([]);
  const [priorities, setPriorities] = useState<Array<Priority>>([]);
  const [subjectBlocks, setSubjectBlocks] = useState<Array<SubjectBlock>>([]);
  const [majors, setMajors] = useState<Array<Major>>([]);

  useEffect(() => {
    loadGenders();
    loadAreas();
    loadPriorities();
    loadSubjectBlocks();
    loadMajors();
  }, []);

  const loadMajors = async () => {
    const res = await MajorService.getMajors();
    if (res) {
      setMajors(res);
    }
  };

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
        majors,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;