import React from "react";
import headerStyles from "./Header.module.css";
import { categoriesData } from "../../Data/CategoriesData";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/searchBar/SearchBar";
import allServices from "../../Data/ServicesImports";
import { Cities } from "../../Data/CityData";


export const Header = () => {

  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.title}>
        <h1>Services at the Doorstep</h1>
        <h5>We Focus on Customer Satisfaction</h5>
      </div>

      <div className={headerStyles.inputBoxes}>
        <div className={headerStyles.gradient}></div>
        <SearchBar
          placeholder="Search the Location"
          name="location"
          data={Cities}
        />
        <SearchBar
          placeholder="Search the Service"
          name="services"
          data={allServices}
        />
      </div>

      <div className={headerStyles.categories}>
        <h3>Categories</h3>
        <div className={headerStyles.categories_container}>
          {categoriesData.map((item) => (
            <div
              key={item.id}
              className={headerStyles.categories_container_item}
            >
              <Link to={"/categories/" + item.id}>
                <img src={item.icon_img} alt={item.desc} />
                <p>{item.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
