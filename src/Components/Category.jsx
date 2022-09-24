import React from 'react'

function Category({categoryRef}) {
  return (
    <select name="category" ref={categoryRef}>
        <option value="">Choose a category</option>
        <option value="21">Sports</option>
        <option value="11">Film</option>
        <option value="23">History</option>
        <option value="12">Music</option>
        <option value="22">Geography</option>
        <option value="25">Art</option>
        <option value="17">Science and Nature</option>
    </select>
  )
}

export default Category