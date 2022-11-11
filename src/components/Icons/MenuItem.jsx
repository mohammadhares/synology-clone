import { Link } from "react-router-dom";

const MenuItem = ({img , name , path}) => {
    return ( 
        <Link to={path} className="links">
            <div className="menu-item">
                <div className="img">
                    <img src={img} title={name} alt={name} className="img img-responsive" />
                </div>
                <p>{name}</p>
            </div>
        </Link>
     );
}
 
export default MenuItem;