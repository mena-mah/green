import "./index1.css";
import TagButtonFooter from "./tagButtonFooter";
export default function Footer(){
    return (
        <footer>
        <div className="footerF">
        <div className="footer1">
          <h2>الملف الاخضر</h2>
          <h3>ان كنت باحث للعمل فنحن بجانبك للحصول عل وظيفة وان كنت صاحب عمل فنحن نقدم لك افضل الموظفين </h3>
        </div>
        <div className="footer2">
          <h2 style={{ color: "#F9DEC9"}}>معلومات</h2>
          <TagButtonFooter name="الاسئلة الشائعة" />
          <TagButtonFooter name="من نحن" />
          <TagButtonFooter name="سياسة الشروط والاستخدام" />
          <TagButtonFooter name="تواصل معنا" />
          <TagButtonFooter name="شركاء النجاح" />
          <TagButtonFooter name="الاعلان بالملف الاخضر" />
          
          
        </div>
        </div>
        <div className="footerend">
          <hr />
          <p>Copyright 2021     Orix creative agency. All right reserved</p>
        </div>
       </footer>
    );
}