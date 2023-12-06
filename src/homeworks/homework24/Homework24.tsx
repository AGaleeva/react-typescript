import { useEffect, useState } from "react";
import { ButtonContainer, Card, Homework24Wrapper, Text, TextHeader } from "./styles";
import Button from "components/button";

function Homework24() {
  const [joke, setJoke] = useState<string>('');
  const [jokeError, setJokeError] = useState<string>('');

  const getNewJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (response.ok) {
      const data = await response.json();
      setJoke(data.setup); 
      setTimeout(() => alert("You got a new joke"), 10);        
    } else {
      setTimeout(() => alert(setJokeError("Some error occured")), 0);
    }

  };
  useEffect(() => {getNewJoke()}, []);
  return (
    <Homework24Wrapper>
      <Card>
        <TextHeader>The day's joke</TextHeader>
        {joke && <Text>{joke}</Text>}
        {jokeError && <Text>{jokeError}</Text>}
        <ButtonContainer>
          <Button name="Get new joke" onClick={() => getNewJoke()} />
        </ButtonContainer>
      </Card>
    </Homework24Wrapper>
  );
}

export default Homework24;