import { useState } from 'react';
import Button from "components/button/Button"; // '../../components/button'
import './styles.css';
// import LikeIcon from '../../assets/like.png'  // - первый способ: импорт напрямую из файла с иконкой
// import DislikeIcon from '../../assets/dislike.png'

// - второй способ: импорт из общего файла index.ts
import { LikeIcon, DislikeIcon } from "assets";

function Homework21() {
  const [likes, setLikes] = useState<number>(0);

  const plusLikes = (): void => {    
    setLikes((prevValue: number) => prevValue + 1)
  };
  
  const [dislikes, setDislikes] = useState<number>(0);

  const minusDislikes = (): void => {
    setDislikes((prevValue: number) => prevValue + 1)
  };

  const resResults = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className='hw21-wrapper'>
      <div className='likes'>
        {dislikes > 0 && <div>{dislikes}</div>}
      </div>        
      {/* <img className='likesControl' src="https://smile-emoji.ru/wp-content/uploads/site-images/simvol-vk/v33svuzr.png" alt="thumb-down"  onClick = {minusDislikes} /> */}
       <img className='likesControl' src={LikeIcon} alt="thumb-down"  onClick = {minusDislikes} />
      
      <div className='buttonControl'>
        <Button 
          name="Reset results"          
          onClick={resResults}
        />
      </div>
      {/* <img className='likesControl' src="https://cdn-0.emojis.wiki/emoji-pics/whatsapp/thumbs-up-whatsapp.png" alt="thumb-up" onClick = {plusLikes} /> */}
      <img className = 'likesControl' src = {DislikeIcon} alt="thumb-up" onClick = {plusLikes} />

      <div className='likes'>    
        {likes > 0 && <div>{likes}</div>}
      </div>  
    </div>
  );
}

export default Homework21;
