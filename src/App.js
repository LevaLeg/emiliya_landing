import './App.css';
import avatar from "./assets/img/Avatar_646px.jpg";
import { FaBook, FaPinterest, FaSquareFacebook, FaSquareInstagram, FaTelegram, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import etsy_img from "./assets/img/etsy-logo-large.webp"
import { SiVk } from "react-icons/si";
import { SiBoosty } from "react-icons/si";

function App() {

  const handleEmailClick = () => {
    navigator.clipboard.writeText('patterndollsetsyq@gmail.com');
    alert('Email скопирован в буфер обмена.')    
  }

  return (
    <div className='container'>
      <h2>AMIGURUMI DESIGNER</h2>
      <h1>EMILIYA CHERNOVA</h1>
      <img className='img_avatar' src={avatar} alt='avatar'></img>
      
      <div>
          <a href='https://www.instagram.com/chernova_emiliya/' target='_blank' rel='noopener noreferrer'>
            <FaSquareInstagram className='icons' />
          </a>
          <a onClick={handleEmailClick} >
            <MdEmail className='icons'/>
          </a>
      </div>

      <a href='https://www.etsy.com/shop/AmiguDollPattern' target='_blank' rel='noopener noreferrer'>
          <div className='div_large'>
            <img className='img_etsy' src={etsy_img} alt='etsy logo'></img>
            PATTERNS IN ENGLISH
          </div>
      </a>

      <a href='https://vk.com/market-25141422?screen=group' target='_blank' rel='noopener noreferrer'>
        <div className='div_large'>
          <SiVk className='icon_vk'/>
          PATTERNS IN RUSSIAN
        </div>
      </a>

      <a href='https://www.emiliyachernova.com/' target='_blank' rel='noopener noreferrer'>
        <div className='div_mywebsite'>
          MY WEBSITE
        </div>
      </a>

      <a href='https://vk.com/dollscrochet' target='_blank' rel='noopener noreferrer'>
        <div className='div_small' style={{color: '#0866FF'}}>
          <SiVk className='icon_small'/>
          MY COMMUNITY
        </div>
      </a>

      <a href='https://boosty.to/chernova_emiliya' target='_blank' rel='noopener noreferrer'>
        <div className='div_small' style={{color: '#000000', fontSize: '27px'}}>
          <SiBoosty className='icon_small'/>
          MY TALENT IS WORTH THE MONEY
        </div>
      </a>

      <a href='https://www.youtube.com/@chernovaemiliya' target='_blank' rel='noopener noreferrer'>
        <div className='div_small' style={{color: '#FC0606'}}>
          <FaYoutube className='icon_small'/>
          VIDEO TUTORIALS
        </div>
      </a>

      <a href='https://www.facebook.com/profile.php?id=100000850298728' target='_blank' rel='noopener noreferrer'>
        <div className='div_small' style={{color: '#0866FF'}}>
          <FaSquareFacebook className='icon_small'/>
          FACEBOOK
        </div>
      </a>

      <a href='https://ru.pinterest.com/Chernova_emiliya/_created/' target='_blank' rel='noopener noreferrer'>
        <div className='div_small' style={{color: '#F21F97'}}>
          <FaPinterest className='icon_small'/>
          PINTEREST
        </div>
      </a>

      <a href='https://t.me/Chernova_EmiliyaMK' target='_blank' rel='noopener noreferrer'>
        <div className='div_small' style={{color: '#0866FF'}}>
          <FaTelegram className='icon_small'/>
          TELEGRAM CHANNEL
        </div>
      </a>


      <a href='https://eksmo.ru/book/vyazanye-miry-v-stile-khayao-miyadzaki-ITD1353824/' target='_blank' rel='noopener noreferrer'>
        <div className='div_small' style={{color: '#8A4647'}}>
        <FaBook className='icon_small'/>
          MY BOOK IN RUSSIAN
        </div>
      </a>

      <div className='copyright'>
        ©2024 LEMAVARO DESIGN STUDIO
      </div>

    </div>

  );
}

export default App;
