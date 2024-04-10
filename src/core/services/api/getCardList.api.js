import http from "../interceptor";

import { toast } from "../../../components/common/toast";

export const getCardList = async () => {
  try {
    const response = await http.get("/card");

    return response.data;
  } catch (error) {
    toast.error("Something went wrong.");
  }
};
