import { useNavigate } from "react-router-dom";

export const navigateWithState = (path: string, state: unknown) => {
  const navigate = useNavigate();

  navigate(path, { replace: true, state });
};
