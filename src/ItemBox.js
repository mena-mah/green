import "./index1.css";
export default function ItimBox({titel , img}){
    return (
        <div className="item-g">

        <img src={img} alt=""/>
        <p>  {titel} </p>
        
      </div>
    )
}