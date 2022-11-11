import { Link } from "react-router-dom";

const FileStation = () => {
    let background = localStorage.getItem('theme-img');
    return ( 
        <section className="dashboard" style={{ backgroundImage: `url(${background})`}}>
            <Link to="/" className="links">
                <div id="back-btn">
                    <span className="fa fa-arrow-left"></span> Back 
                </div>
            </Link>
            <div className="container content">
                <h3>File Station</h3>
                <hr />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas nulla nostrum natus ipsum quis incidunt minima deserunt,
                     nemo culpa, maxime dolores rem modi vel inventore iusto 
                     repellendus eos neque cumque?
                </p>
            </div>
        </section>
     );
}
 
export default FileStation;