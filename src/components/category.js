import React from "react";

const Category = ({ category, insertNewCategory }) => {
  const nestedCategories = (category.categories || []).map((cat) => {
    return (
      <Category
        key={cat.name}
        category={cat}
        insertNewCategory={insertNewCategory}
      />
    );
  });

  return (
    <div className="box">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>Name: {category.name}</div>

        <div
          style={{
            marginLeft: "25px",
            border: "1px solid green",
            padding: "0 7px",
            cursor: "pointer",
            borderRadius: "2px",
          }}
          onClick={() => insertNewCategory(category, category.name)}
        >
          &#x2B;
        </div>
      </div>
      {nestedCategories}
    </div>
  );
};

export default Category;
