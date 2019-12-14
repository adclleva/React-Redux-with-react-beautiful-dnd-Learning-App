import React from 'react';
import Category from "./Category"
import { connect } from "react-redux" // this connects the redux to our react
import JobCard from './JobCard';

function App(props) {
  const { categories } = props

  const displayCategories = categories.map((category, index) => {
    return (
      <Category title={category.title} jobs={category.jobs}/>
    )
  })

  return (
    <div className="App">
      <h2>Test</h2>
      
      {displayCategories}

    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories // we get the categories from the reducer's given state
})

export default connect(mapStateToProps)(App); // this creates the connection
