import {useNavigate} from 'react-router-dom';
import Button from "components/button";

import { UsersWrapper } from "./styles";

function Users() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/');
  }

  return (
    <UsersWrapper>
      Users
      <Button name="Go to Homepage" onClick={goToHomepage} />
    </UsersWrapper>
    )
}

export default Users;