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
    console.log("Response in  fetch WorkspaceDetails request", response);
    return response?.data?.data;
  } catch (error) {
     console.log("error in  fetch WorkspaceDetails request", error);
    throw error.response.data;
  }
}

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.delete(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });

    console.log("Response in deleteWorkspaceRequest ->", response);

    return response?.data?.data;
  } catch (error) {
    console.log("error in delete Workspace request ->", error);
    throw error.response.data;
  }
}

export const updateWorkspaceRequest = async ({ workspaceId, name, token }) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}`,
      { name },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    

    return response?.data?.data;
  } catch (error) {
    console.log("error in update Workspace request ->", error);
    throw error.response.data;
  }
}

export const addChannelToWorkspaceRequest = async ({ workspaceId, channelName, token }) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}/channels`,
      { channelName },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    

    return response?.data?.data;
  } catch (error) {
    console.log("error in add Channel to Workspace request ->", error);
    throw error.response.data;
  }
};

export const resetJoinCodeRequest = async ({ workspaceId, token }) => {
  try {
    console.log("workspaceId in resetJoincodeRequest ->" , workspaceId);
    
    const response = await axios.put(
      `/workspaces/${workspaceId}/joinCode/reset`,
      {},
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    console.log("Response in resetJoinCodeRequest ->", response);

    return response?.data?.data;
  } catch (error) {
    console.log("error in reset Join Code request ->", error);
    throw error.response.data;
  }
}



export const addMemberToWorkspaceRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}/members`, {}, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in adding member to workspace request', error);
        throw error.response.data;
    }
};

export const joinWorkspaceRequest = async ({ workspaceId, joinCode, token }) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}/join`, { joinCode }, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in joining workspace request', error);
        throw error.response.data;
    }
};