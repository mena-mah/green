import "./index1.css";
import MyImag from "./images/Group 5394.jpg";
import MyImag1 from "./images/Group 1000003537.jpg";
import MyImag2 from "./images/Group 122.jpg";
export default function PostDreem(){
    return(
        <div>
             <div className="row2">
  <div className="col-9">
    <h2>بصفتنا مسؤولين عن موارد بشرية و متمرسين في ذلك ، فنحن دقيقين في البحث عن الوظائف و، حتى يحصل الباحثون  على وظيفة أحلامهم.</h2>
    <p>من استراتيجية  انشاء السيرة الذاتية حتي تتمكن من البحث عن وظيفة  ، 
    سأفعل كل ما هو مطلوب لضمان ذلك </p>
    
    <div className="list">

      <div className="list1">
        <img src={MyImag} alt=""/>
       <p>نقترح لك الوظيفة الخاص بك ذو صلة</p>
      </div>
      <div className="list1">
         <p>نقف بجانبك حتي تصل  إلى مرحلة المقابلة</p>
      </div>
      <div className="list1">
      <img src={MyImag1} alt=""/>
      <p>واذا لم تتمكن من حصول عليها نساعدك في تطوير مهاراتك للحصول علي وظيفة افضل</p>

      </div>
      
      
  </div>
    

  </div>
  <div className="col-9">
    <img src={MyImag2} alt=""/>
  </div>
</div>
        </div>
    );
};