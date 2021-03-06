const Home = () => import("views/home");
const Category = () => import("views/category");
const ShopCart = () => import("views/shopcart");
const Profile = () => import("views/profile");
const Detail = () => import("views/detail");

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcart",
    component: ShopCart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail",
    component: Detail
  }
];

export default routes;
