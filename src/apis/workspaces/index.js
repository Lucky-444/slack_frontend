import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      "/workspace",
      { name, description },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    console.log("Response in createWorkspace", response);

    return response?.data;
  } catch (error) {
    console.log("error in  Create Workspace request", error);
    throw error.response.data;
  }
};

export const fetchWorkspaceRequest = async ({token}) => {
         try {
    const response = await axios.get(
      "/workspace",
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    console.log("Response in fetchWorkspace", response);

    return response?.data;
  } catch (error) {
    console.log("error in  fetch Workspace request", error);
    throw error.response.data;
  }
};
