import React, { useState } from "react";
import Register from "./Component/Public/Register";
import Login from "./Component/Public/Login";
import Home from "./Component/Public/Home";
import Search from "./Component/Public/Search";
import VerifyOTP from "./Component/Public/VerifyOtp";
import Account from "./Component/Common/Account";
import Cart from "./Component/Private/Customer/Cart";
import SellerOrders from "./Component/Private/Seller/SellerOrder";
import SellerDashboard from "./Component/Private/Seller/SellerDashbord";
import Wishlist from "./Component/Private/Customer/Wishlist";
import Orders from "./Component/Private/Customer/Order";
import EditProfile from "./Component/Common/EditProfile";

const navs = [
    // ----------------------- BEFORE AUTH --------------------------- 
  {
    path: "/seller/register",
    element: <Register role="SELLER"/>,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "SELLER",
  },
  {
    path: "/customer/register",
    element: <Register role="CUSTOMER"/>,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "CUSTOMER",
  },
  {
    path: "/login",
    element: <Login />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP/>,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
    // -------------------------- BEFORE AND AFTER AUTH ----------------
  {
    path: "/",
    element: <Home />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/search",
    element: <Search />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  // ---------------------- COMMON AND AFTER AUTH ----------------------
  {
    path: "/account",
    element: <Account />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  // --------------------------- CUSTOMER --------------------------
  {
    path: "/cart",
    element: <Cart />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/orders",
    element: <Orders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  // ------------------------- SELLER ----------------------------
  {
    path: "/seller-dashboard",
    element: <SellerDashboard />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
  {
    path: "/seller-orders",
    element: <SellerOrders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
];

export default navs;
