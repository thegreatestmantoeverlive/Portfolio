import { useNavigate } from "react-router-dom";
import { HomePageProps } from "../utils/types";
import { Button } from "@mui/material";

const HomePage = ({
  shouldRefresh,
  setShouldRefresh,
}: HomePageProps | undefined): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-grow">This is home page</div>
    </>
  );
};

export default HomePage;
