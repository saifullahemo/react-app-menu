import React from 'react';

const Categories = ({ categories, filterItems}) => {
  return (
    <div className = "btn-container">
      {categories.map((category, index)=> { //mapping category object and the list
        return (
          <button 
            type = 'button' 
            className = 'filter-btn' 
            key = {index}
            onClick = {() => filterItems(category)} //onclick firing filterItems funtion where passing the category string value
          
          >
            {category} {/* whatever the list string value pass it here in categories */}

          </button>
        );
    })}

    {/* instead of manually creating button i will try a dynamic button for the new category */}
    
    {/* <button className = "filter-btn" onClick = {() => {
      filterItems('all')
    }}>All</button>

    <button className = "filter-btn" onClick = {() => {
      filterItems('breakfast')
    }}>Breakfast</button> */}
  </div>
  );
};

export default Categories;
