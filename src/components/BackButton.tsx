import { useNavigate } from "react-router";
import { Button } from "./ui/button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      className="absolute"
      onClick={() =>
        navigate("/", {
          preventScrollReset: false,
          replace: true,
        })
      }
    >
      Back
    </Button>
  );
}

export default BackButton;
