import axios from "axios";

export const updateData = async (data: any, token: string) => {
  return await axios.put("/api/update-content", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
