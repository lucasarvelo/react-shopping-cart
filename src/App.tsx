import { useState } from "react";
import { useQuery } from "react-query";

import Drawer from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/icons-material/Badge";

import { Wrapper } from "./App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  return <div className="App"></div>;
};

export default App;
