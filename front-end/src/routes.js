import Detail from "./layouts/Detail";
import Home from "./layouts/Home";



export const routeHome=[
    {
        path: '/',
        exact: true,
        component: Home
    },
  
    {
        path: '/detail',
        exact: false,
        component: Detail
    },
    // {
    //     path: '/chi-tiet-rap-chieu-phim/:maLichChieu',
    //     exact: false,
    //     component: ChiTietLichChieu
    // },
    
]