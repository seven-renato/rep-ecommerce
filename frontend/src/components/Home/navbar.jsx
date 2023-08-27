import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./styles/navbar.scss"; // Certifique-se de que este caminho está correto

function Navbar() {
  const quantity = 6;

  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="left">
          <div className="image-container">
            <Link to={`/`} style={{ color: "inherit", textDecoration: "none" }}>
              <img
                className="image"
                src="https://i.ibb.co/thQcBw8/image-1.png"
                style={{ cursor: "pointer" }}
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="container-category">
            <div className="categories">
              <Link to={`/products/ofertas`} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="category-item">Ofertas</div>
              </Link>

              <Link to={`/products/feminino`} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="category-item">Feminino</div>
              </Link>

              <Link to={`/products/masculino`} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="category-item">Masculino</div>
              </Link>

              <Link to={`/products/infantil`} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="category-item">Infantil</div>
              </Link>

              <Link to={`/products/adidas`} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="category-item">Adidas</div>
              </Link>

              <Link to={`/products/nike`} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="category-item">Nike</div>
              </Link>

              <Link to={`/products/puma`} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="category-item">Puma</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="search-container">
            <input className="input" type="text" placeholder="Buscar" />
            <SearchIcon style={{ color: "black", fontSize: 16 }} />
          </div>
          <div className="menu-item">
            <Link to={`/login`} style={{ color: "inherit" }}>
              <AccountCircleOutlinedIcon />
            </Link>
          </div>
          <div className="menu-item">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="menu-item">
            <Badge badgeContent={quantity} color="primary">
              <Link to={`/cart`} style={{ color: "inherit" }}>
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
