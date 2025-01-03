export default function TagButtonFooter ({name}){
    return (
        <div>
           <a
           style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "#F9DEC9",
            marginBottom: "20px",
           }}
           >{name}</a>
           </div>
    );
};