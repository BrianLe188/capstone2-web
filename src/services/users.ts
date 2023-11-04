/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "@/utils/types";
import { request } from "./request";

const getUsers = (req: { body: any }): Promise<Array<User>> =>
  new Promise((rs, rj) => {
    request()
      .get(`/auth/users?data=${encodeURIComponent(JSON.stringify(req.body))}`)
      .then(({ data }) => {
        if (data) {
          rs(data?.data);
        }
      })
      .catch((error) => {
        rj(error);
      });
  });

const UserService = {
  getUsers,
};

export default UserService;
