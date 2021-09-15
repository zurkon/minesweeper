import Face from '../Face';
import NumberDisplay from '../NumberDisplay';
import { HeaderContainer } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <NumberDisplay value={0} />
      <Face />
      <NumberDisplay value={23} />
    </HeaderContainer>
  );
}

export default Header;