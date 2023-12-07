import { useEffect, useState } from "react";
import { ButtonContainer, Card, Homework24Wrapper, Text, TextHeader } from "./styles";
import Button from "components/button";

function Homework24() {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [jokeQuestion, setJokeQuestion] = useState<string | undefined>(
    undefined
  );
  const [jokeError, setJokeError] = useState<string | undefined>(undefined);

  const getNewJoke = async (isClickedButton?: boolean) => {
    setJokeError(undefined);
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (response.ok) {
      const data = await response.json();
      setJokeQuestion(data.setup);
      setJoke(data.punchline);
      if (isClickedButton) {
        alert("You got a new joke")
      };
    } else {
      setJokeQuestion(undefined);
      setJoke(undefined);
      setJokeError("Some error occured");
      if (isClickedButton) {
        alert("Some error occured")
      };
    }
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  // () => getNewJoke() в onClick не обязательно вызывать стрелочную функцию, если нет необходимости передавать аргумент в вызываемой функции

  return (
    <Homework24Wrapper>
      <Card>
        <TextHeader>The day's joke</TextHeader>
        {jokeQuestion && <Text>{jokeQuestion} </Text>}
        {joke && <Text>{joke}</Text>}
        {jokeError && <Text>{jokeError}</Text>}
        <ButtonContainer>
          <Button name="Get new joke" onClick={() => getNewJoke(true)} />
        </ButtonContainer>
      </Card>
    </Homework24Wrapper>
  );
}

export default Homework24;