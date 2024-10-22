import { useState } from 'react';
import Marquee from "./Marquee";
import styles from "./styles.module.scss";
import logo1 from "./assets/1.png";
import logo2 from "./assets/2.png";
import logo3 from "./assets/3.png";
import logo4 from "./assets/4.png";
import logo5 from "./assets/5.png";
import logo6 from "./assets/6.png";
import logo7 from "./assets/7.png";
import logo8 from "./assets/8.png";
import logo9 from "./assets/9.png";
import logo10 from "./assets/10.png";
import logo11 from "./assets/11.png";

const imageList = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
]

const textList = [
  "你好世界",
  "Hello World",
  "こんにちは世",
  "Ciao mondo",
  "헬로 월드",
  "Hello Mundo",
  "Hallo Welt",
  "مرحبًا بالعالم",
  "Привет, мир",
  "Olá, Mundo"
]

function App() {
  const [loadedImages, setLoadedImages] = useState(0)
  
  return (
    <div className={styles.app}>
      <h1>React Marquee</h1>
      <p>一款轻量级的 React 跑马灯组件。</p>
      <h2>鸣谢</h2>
      <Marquee startPlay={loadedImages >= imageList.length*2} className={styles.marquee} delay="0s" direction="left" 
        gradientColor="#F8FBFD" 
        gradientWidth={200}
        pauseOnHover
        >
        <div className={styles.imageList}>
          {imageList.map((img) => (
            <img key={img } className={styles.item} src={img} onLoad={()=>{
              setLoadedImages(num => num + 1);
            }} />
          ))}
        </div>
      </Marquee>
      <h2>支持多语言</h2>
      <Marquee className={styles.marquee} delay="0s" direction="right" 
        gradientColor="#F8FBFD" 
        gradientWidth={200}
        pauseOnHover
        >
        <div className={styles.textList}>
          {textList.map((text) => (
            <div key={text} className={styles.textItem}>{text}</div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default App
