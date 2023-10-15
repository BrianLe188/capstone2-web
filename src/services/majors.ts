import { request } from "./request";
import type { Major } from "@/utils/types";

const getMajors = (): Promise<Array<Major>> =>
  new Promise((rs, rj) => {
    request()
      .get("/core/majors")
      .then(({ data }) => {
        if (data) {
          rs(data?.data);
        }
      })
      .catch((error) => {
        rj(error);
      });
  });

const MajorService = {
  getMajors,
};

export default MajorService;
