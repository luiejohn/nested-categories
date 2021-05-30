import React, { useState } from "react";
import "./App.css";

import storeData from "./store.json";
import Category from "./components/category";
import _ from "lodash";
import objectPath from "object-path";

const App = () => {
  const [dataObj, setDataObj] = useState(storeData);
  const [counter, setCounter] = useState(0);

  const insertNewCategory = (obj, name) => {
    const path = name.split(".").map((i) => i - 1);
    let newVersion, newName;

    var pointer = [];
    if (path.includes(NaN) || path.includes(-1)) {
      newName = (obj.categories.length + 1).toString();
      pointer.push("categories");
    } else {
      newVersion = obj.categories.length + 1;
      newName = name + "." + newVersion;

      for (let x = 0; x < path.length; x++) {
        pointer.push("categories");
        pointer.push(`${path[x]}`);
        if (x === path.length - 1) {
          pointer.push("categories");
        }
      }
    }

    const newObj = {
      name: newName,
      categories: [],
    };

    objectPath.push(dataObj, pointer, newObj);
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Nested Categories</h1>
      <div className="outer_container">
        <div className="box outer_box">
          <div className="category__title">
            <div>Name: {dataObj.name}</div>
            <div
              style={{
                marginLeft: "25px",
                border: "1px solid green",
                padding: "0 7px",
                cursor: "pointer",
                borderRadius: "2px",
              }}
              onClick={() => insertNewCategory(dataObj, dataObj.name)}
            >
              &#x2B;
            </div>
          </div>
          {dataObj.categories.map((category) => {
            return (
              <Category
                key={category.name}
                category={category}
                insertNewCategory={insertNewCategory}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
