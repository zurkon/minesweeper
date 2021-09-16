import { FC } from 'react';
import { FaceState } from '../../types';
import Face from '../Face';
import NumberDisplay from '../NumberDisplay';
import { HeaderContainer } from './style';

interface HeaderProps {
  face: FaceState,
  time: number,
  bombCounter: number,
  handleFaceClick: () => void
}

const Header: FC<HeaderProps> = ({ face, time, bombCounter, handleFaceClick }) => {
  return (
    <HeaderContainer>
      <NumberDisplay value={bombCounter} />
      <Face face={face} handleFaceClick={handleFaceClick} />
      <NumberDisplay value={time} />
    </HeaderContainer>
  );
}

export default Header;