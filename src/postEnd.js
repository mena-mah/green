import "./index1.css";
import img1 from "./images/d1.jpg";
import img2 from "./images/d2.jpg";
import img3 from "./images/d3.jpg";
import img4 from "./images/d4.jpg";
import imgBoy from "./images/boy.jpg";


export default function PostEnd(){
  let numUser = "2000"
    return(
        <div className="dreem2">
            <div className="dreem2-1">
            
    <h2>ان كنت صاحب عمل وتبحث عن افضل الموظفين فأهلا بك في موقعنا الملف الاخضر</h2>

    <div className="d1">
      <img src={img1} alt=""/>
      <p>نحن نمتلك اكثر من {numUser} باحث عن عمل</p>
    </div>

    <div className="d2">
      <img src={img2} alt=""/>
      <p>يمكنك الحصول علي خدمة سريعة من خلال الاتفاق مع مستقلين</p>
    </div>

    <div className="d3">
    <img src={img3} alt=""/>
    </div>

    <div className="d4">
    <img src={img4} alt=""/>
    </div>
    </div>

    <div className="imgboy">
    <img src={imgBoy} alt=""/>
    </div>

  </div>
    )
}