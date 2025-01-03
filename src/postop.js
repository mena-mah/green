import "./index1.css";
import MyImage from "./images/Vector (1).jpg";
import MyImageG from "./images/g8.jpg";

export default function Postop(){
    return (
        <div>
            <div className="row ">
    <div className="col-6 sec1">
   

       <img src={MyImage} alt="" className="im1"/>
       <h4>  الطريقة الاكثر ذكاء للحصول على <span>وظيفة احلامك</span> </h4>
       <p>يساعدك الملف الاخضر أضعاف فرصك في الحصول على وظيفة أحلامك وزيادة راتبك مدي الحياة</p>
       <a href="login.php">سجل معنا الان </a>
       </div>
       <div className="col-6">
         <div className="g1">
              <img src={MyImageG} alt="" className="im2"></img>
         </div>
  </div>


    
  </div>
       
  </div>

    )
}