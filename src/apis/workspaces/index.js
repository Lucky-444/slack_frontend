import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      "/workspaces",
      { name, description },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    console.log("Response in createWorkspace", response);

    return response?.data?.data;
  } catch (error) {
    console.log("error in  Create Workspace request", error);
    throw error.response.data;
  }
};

export const fetchWorkspaceRequest = async ({ token }) => {
  try {
    const response = await axios.get("/workspaces", {
      headers: {
        "x-access-token": token,
      },
    });

    console.log("Response in fetchWorkspaceRequest", response);

    return response?.data?.data;
  } catch (error) {
    console.log("error in  fetch Workspace request", error);
    throw error.response.data;
  }
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId , token }) => {
  try {
    const response = await axios.get(`/workspaces/${workspaceId}` ,{
      headers : {
        "x-access-token": token,
      }
    })

    return response?.data?.data;
  } catch (error) {
     console.log("error in  fetch WorkspaceDetails request", error);
    throw error.response.data;
  }
}
