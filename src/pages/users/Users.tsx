import {useNavigate} from 'react-router-dom';
import Button from "components/button";

import { UsersWrapper, ButtonContainer } from "./styles";

function Users() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/');
  }

  return (
    <UsersWrapper>
      Users
      <ButtonContainer>
        <Button name="Go to Homepage" onClick={goToHomepage} />
      </ButtonContainer>
    </UsersWrapper>
  );
}

export default Users;