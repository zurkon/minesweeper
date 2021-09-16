import { FC } from "react";
import { FaceState } from "../../types";
import { FaceContainer } from "./style";

interface FaceProps {
  face: FaceState,
  handleFaceClick: () => void
}

const Face: FC<FaceProps> = ({ face, handleFaceClick }) => {
  return (
    <FaceContainer onClick={handleFaceClick}>
      {face}
    </FaceContainer>
  );
}

export default Face;