import "./index1.css";
import MyImage from "./images/logo 2.jpg";

const showCategories = true; 
export default function Header(){
  const tasks = [
    {id: 1,title: " الصفحة الرئيسية"},
    {id: 2,title: "ملف الوظائف "},
    {id: 3,title: " ملف العمل الحر"},
    {id: 4,title: " ملف الاعمال"}
  ];
  const myTasksList = tasks.map((task)=>{
     return (
      <li key={task.id}>
        <a href="#">{task.title}</a>
        </li>
     );
  });
    return (
      <header>
      <div className="logo">
      <img src={MyImage} alt="" className="im1"/>
      </div>
      <div className="lest">
          <ul>
          {myTasksList}
                 
          </ul></div>
          <div className="buttons">
          <a href="login.php" className="long">تسجيل الدخول</a>
          <a href="serch.php" className="log">انشاء حساب</a>
          </div>
      
    </header>
    );
}