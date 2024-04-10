import http from "../interceptor";

import { toast } from "../../../components/common/toast";

export const getCardDetail = async (cardId) => {
  try {
    const response = await http.get(`/card/${cardId}`);

    return response;
  } catch (error) {
    toast.error("Something went wrong.");
  }
};
