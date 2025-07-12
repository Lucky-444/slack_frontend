import { useEffect } from "react";
import { UserButton } from "../../components/atoms/UserButton/UserButton";
import { useFetchWorkspace } from "../../hooks/apis/workspaces/useFetchWorkspace";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { isFetching, workspaces } = useFetchWorkspace();
  const navigate = useNavigate();
  useEffect(() => {
    if (isFetching) return;

    console.log("Workspaces downloaded is the", workspaces);

    if (workspaces.length === 0 || !workspaces) {
      console.log("You Have no Workspace Please Crate One");
    }else{
      navigate(`/workspaces/${workspaces[0]._id}`)

    }
  }, [isFetching, workspaces , navigate]);

  return (
    <>
      <h1>Home</h1>
      <UserButton />
    </>
  );
};
