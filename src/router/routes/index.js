const Home = () => import("views/home");
const Category = () => import("views/category");
const ShopCart = () => import("views/shopcart");
const Profile = () => import("views/profile");
const Detail = () => import("views/detail");
const Register = () => import("views/register");

const routes = [
  {
    path: "",
    redirect: "/register"
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
  // {
  //   path: "/register",
  //   component: Register
  // }
];

export default routes;
