import axios from "axios";

export const updateData = async (data: any) => {
  return await axios.put("/api/update-content", data);
};
