import "./index.css";
import MyImag from "./images/Group 259.jpg";
import MyImag1 from "./images/Group (1).jpg";

const showCategories = true; 
 export default function Postow(){

    const tasks = [
        {id: 1 ,title: " نأخذ بيدك خطوة بخطوة فنقوم بانشاء سيرة ذاتية بشكل محترف لك  "},
        {id: 2 ,title: " نحن نساعدك على اتخاد القرار الوظيفي الصحيح اما عن طريق العمل كمستقل او الحصول ع وظيفة "},
        {id: 3 ,title: " نوفر لك ايضا بيع منتجاتك الرقمية ومشاريعك والحصول علي اعلي الارباح  "},
        {id: 4 ,title: " نحن نساعدك دائما في تطوير قدراتك من خلال توفير لك افضل الكورسات لتنمية مهاراتك في مجالك تجعلك اكثر منافسة علي الوظائف "}
      ];
      const myTasksList = tasks.map((task)=>{
         return (
          <li style={{padding:"10px"}} key={task.id}><img src={MyImag1} alt=""/>{task.title}</li>
         );
      });

    return( 
        <div>
            <div className="container">
        <div className="contant">
          <div className="contant-cont1">
            <h2>10  أضعاف فرصك  في  الحصول  على <span> وظيفة أحلامك</span>
              </h2>
                <p>من استراتيجية عمل سيرة ذاتية لك الي لللحصول علي امثل وظيفة</p>
                <ul>
                {myTasksList}
                </ul>
                <a href="login.php" className="a-content">ابحث عن وظيفة أحلامي الآن</a>
          </div>
          <div className="contant-cont">
          <img src={MyImag} alt=""/>
          </div>
        
      </div>
    </div>
        </div>
    )
 }