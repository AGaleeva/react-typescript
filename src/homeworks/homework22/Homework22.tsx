import Input from "components/input";
import { Homework22Wrapper, LoginCard } from "./styles";

function Homework22() {
  return (    
    <Homework22Wrapper>
      <LoginCard>
        <Input placeholder="Enter your email" disabled={false} label="Email" />
        <Input placeholder="Enter your password" disabled={true} label="Password" />
      </LoginCard>
    </Homework22Wrapper>
  );
};
 

export default Homework22;