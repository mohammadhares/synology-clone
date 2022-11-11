import {banner1, banner2 , banner3 , banner4 , banner5 , banner6 , banner7 , banner8 , banner9} from "../assets/backgrounds";
import { packages, controlPanel , folders , helpDesk } from "../assets/icons";

export const banners = [
    {
        id: 1 ,
        img: banner1 
    },
    {
        id: 2 ,
        img: banner2 
    },
    {
        id: 3 ,
        img: banner3 
    },
    {
        id: 4 ,
        img: banner4 
    },
    {
        id: 5,
        img: banner5 
    },
    {
        id: 6 ,
        img: banner6 
    },
    {
        id: 7 ,
        img: banner7 
    },
    {
        id: 8 ,
        img: banner8
    },
    {
        id: 9,
        img: banner9 
    },
    
];


export const icons = [
    {
        id : 1 ,
        icon : "bell",
        title: "Notifications",
    },

    {
        id : 2 ,
        icon : "comment",
        title: "Messages",
    },

    {
        id : 3 ,
        icon : "user",
        title: "My Profile",
    },

    {
        id : 4 ,
        icon : "picture-o",
        title: "Gallary",
    },
    {
        id : 5 ,
        icon : "search",
        title: "Search",
    }
]


export const menus = [
    {
        id: 1 ,
        name: "Package Center",
        img: packages,
        path: '/package-center',
    },
    {
        id: 2 ,
        name: "Control Panel",
        img: controlPanel,
        path: '/control-panel',
    },
    {
        id: 3 ,
        name: "File Station",
        img: folders,
        path: '/file-station',
    },
    {
        id: 4 ,
        name: "Help Disk",
        img: helpDesk,
        path: '/help-disk',
    },
]


