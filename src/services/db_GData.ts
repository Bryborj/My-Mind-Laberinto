// src/services/userService.ts
import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("/api/users");
  return response.data;
};
