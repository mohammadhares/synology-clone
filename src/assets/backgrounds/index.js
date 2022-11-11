import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import banner4 from './banner4.jpg';
import banner5 from './banner5.jpg';
import banner6 from './banner6.jpg';
import banner7 from './banner7.jpg';
import banner8 from './banner8.jpg';
import banner9 from './banner9.jpg';




export {
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
}


export const backgroundImage = () => {
    let img = localStorage.getItem('theme-img');
    if(img){
        return img;
    }else{
        localStorage.setItem('theme-img', banner5)
        return banner5;
    }
}