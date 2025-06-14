// src/services/userService.ts
import axios from "axios";

// Define a User type (example, adjust as needed)
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const getUsers = async () => {
  try {
    // Assuming the API returns an array of User objects
    const response = await axios.get<User[]>("/api/users");
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error al obtener usuarios:", error); // Spanish error
    if (axios.isAxiosError(error)) {
      return { success: false, error: error.response?.data || error.message };
    }
    return { success: false, error: "Ocurrió un error desconocido al obtener usuarios." }; // Spanish error
  }
};
