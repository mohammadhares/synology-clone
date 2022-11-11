import React, {Component} from "react";
import { Link } from "react-router-dom";
import { menus } from "../../constants/constants";
import MenuItem from "../Icons/MenuItem";
import SmallIcon from "../Icons/SmallIcon";
import GallaryModal from "../window/GallaryModal";
import WindowModal from "../window/windowModal";
import { backgroundImage } from "../../assets/backgrounds";

class Home extends Component {

    state = { 
      img: backgroundImage(),
    } 

    changeBackground = (img) => {
        localStorage.setItem('theme-img', img);
        this.setState({
          img: img,
        })
    }

    showIcons = (title , icon) => {
        if(title === "Gallary"){
           return <GallaryModal onChangeBackground={this.changeBackground}  title={title} icon={icon} />
        }else{
           return (
            <span>
                <SmallIcon title={title} icon={icon} />
           </span>
           )
           
        }
    }

    render() { 
        return (
            <React.Fragment>
            <main id="home" style={{ backgroundImage: `url(${this.state.img})`}}>
                <div className='navbar navbar-default'>
                    <div className='container-fluid'>
                        <div className="navbar-header window-icon">
                            <WindowModal />
                        </div>
                        <nav className="nav navbar-nav navbar-right">
                            <span>
                              <Link to="/product">
                                  <SmallIcon title="Notification" icon="bell" />
                              </Link>
                              <Link to="/product">
                                  <SmallIcon title="Messages" icon="comment" />
                              </Link>
                              <GallaryModal onChangeBackground={this.changeBackground}  title="Gallary" icon="picture-o" />
                              <Link to="/login" >
                                  <SmallIcon title="Login" icon="user" />
                              </Link>
                            </span>
                        </nav>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="col-1">
                        {menus.map( (menu) => (
                            <MenuItem key={menu.id} img={menu.img} name={menu.name} path={menu.path} />
                        ))}
                    </div>
                </div>
            </main>
          </React.Fragment>
        );
    }
}
 
export default Home;