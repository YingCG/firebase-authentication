import React from "react";
import './categories.styles.scss'
import CategoryItem from "./components/category-item/CategoryItem";

function App() {
  const categories = [
    {id: 'cat01', title: 'Mindfulness cards', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF-ardsc9iKn8aysUpR-q5Dz-f8A5WM6DQl3KgFWIZD7IlnrrOxY4l7XzardhCj8cCDw&usqp=CAU"},
    {id: 'cat02', title: 'Eventful cards', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF-ardsc9iKn8aysUpR-q5Dz-f8A5WM6DQl3KgFWIZD7IlnrrOxY4l7XzardhCj8cCDw&usqp=CAU"},
    {id: 'cat03', title: 'Make your own', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF-ardsc9iKn8aysUpR-q5Dz-f8A5WM6DQl3KgFWIZD7IlnrrOxY4l7XzardhCj8cCDw&usqp=CAU"},
    {id: 'cat04', title: 'Seeding Guide', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF-ardsc9iKn8aysUpR-q5Dz-f8A5WM6DQl3KgFWIZD7IlnrrOxY4l7XzardhCj8cCDw&usqp=CAU"},
    {id: 'cat05', title: 'Postcard', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF-ardsc9iKn8aysUpR-q5Dz-f8A5WM6DQl3KgFWIZD7IlnrrOxY4l7XzardhCj8cCDw&usqp=CAU"},
  ]

  return (
    <div className="categories-container">
     {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>
     )
      )}
    </div>
  );
}

export default App;
