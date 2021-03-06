import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Product.vue")
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: () => import("../views/Instructions.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/shipping",
    name: "Shipping",
    component: () => import("../views/Shipping.vue"),
    props: true
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("../views/Payment.vue"),
    props: true
  },
  {
    path: "/bigbubble",
    name: "BigBubble",
    component: () => import("../components/BigBubble.vue"),
    props: true
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue")
  },
  {
    path: "/editProduct/:id",
    name: "EditProduct",
    component: () => import("../components/EditProduct.vue")
  },
  {
    path: "/editOrder/:id",
    name: "EditOrder",
    component: () => import("../components/EditOrder.vue")
  },
  {
    path: "/editCustomer/:id",
    name: "EditCustomer",
    component: () => import("../components/EditCustomer.vue")
  },
  {
    path: "/editReview/:id",
    name: "EditReview",
    component: () => import("../components/EditReview.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
