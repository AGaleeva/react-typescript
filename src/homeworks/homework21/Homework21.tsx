import { useState } from 'react';
import Button from '../../components/button';
import './styles.css';

function Homework21() {
  let [likes, setLikes] = useState<number>(0);

  const plusLikes = (): void => {    
    setLikes((prevValue: number) => prevValue + 1)
  };
  
  let [dislikes, setDislikes] = useState<number>(10);

  const minusDislikes = (): void => {
    setDislikes((prevValue: number) => prevValue - 1)
  };

  const resResults = (): void => {
    setLikes(0);
    setDislikes(0)
  };

  return (
    <div className='hw21-wrapper'>
      <div className='likes'>
        {dislikes > 0 && <div>{dislikes}</div>}
      </div>  
      <button type='button' onClick = {(): void => minusDislikes()}>
        <img className='likesControl' src="https://smile-emoji.ru/wp-content/uploads/site-images/simvol-vk/v33svuzr.png" alt="thumb-down" />
      </button>
      <div className='buttonControl'>
        <Button 
          name='Reset results'
          type='button'
          onClick={resResults}
        />
      </div>
      <button type='button' onClick = {(): void => plusLikes()}>
        <img className='likesControl' src="https://cdn-0.emojis.wiki/emoji-pics/whatsapp/thumbs-up-whatsapp.png" alt="thumb-up" />
      </button>
      <div className='likes'>    
        {likes > 0 && <div>{likes}</div>}
      </div>  
    </div>
  );
}

export default Homework21;
