import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new  Set(items.map((item) => item.category))] //mapping the item of array and return the category item, "Set" is used to get unique values, ['all', ...] is for a new object for the new category

console.log(allCategories) 

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState (allCategories); // passing allCategory to useState

  const filterItems = (category) => { //filtering items from object category
    
    if(category === "all"){
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category) //if item category is equal to category string then return to newItems
    setMenuItems(newItems); 
  }

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menus</h2>
          <div className="underline"></div>
        </div>
        <Categories categories = {categories} filterItems = {filterItems} />
        <Menu items = {menuItems}/>
      </section>
    </main>
  );
}

export default App;
