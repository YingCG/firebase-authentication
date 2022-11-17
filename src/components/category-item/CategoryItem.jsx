import React from 'react'
import './category-item.styles.scss'

function CategoryItem({category}) {
    const {imageUrl, title} = category
  return (
    <div className="category-container">
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className="category-body">
        <h3>{title}</h3>
        <button>Shop Now</button>
      </div>
      </div>
  )
}

export default CategoryItem
