import "./index1.css";
import img1 from "./images/Group 79.jpg";
import img2 from "./images/Group 80.jpg";
import img3 from "./images/Group 81.jpg";
import ItimBox from "./ItemBox";
export default function BoxJob(){
    return(
        <div className="container">
    <div className="group">
      <ItimBox titel="هل انت مستعد لمغادرة وظيفتك ؟"  img={img1} />

      <ItimBox titel="هل تبحث عن وظيفة جديدة ومثيرة ولكن ليس لديك وقت?"  img={img2} />
      <ItimBox titel="هل أنت محبط من عملية التقديم؟"  img={img3} />

      


      
    </div>
  </div>
    )
}