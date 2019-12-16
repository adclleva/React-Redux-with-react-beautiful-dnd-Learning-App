import React from 'react';
import Category from "./Category"
import { connect } from "react-redux" // this connects the redux to our react
import JobCard from './JobCard';
import {DragDropContext} from "react-beautiful-dnd"
import { sort } from "../actions"

function App(props) {
  const { categories } = props

  const displayCategories = categories.map((category, index) => {
    return (
      <Category title={category.title} jobs={category.jobs} key={category.id} categoryId={category.id}/>
    )
  })

  function onDragEnd(result) { 
    // TODO reording logic
    const { destination, source, draggableId } = result
    
    if(!destination) {
      return
    }

    props.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h2>Test</h2>
        <div style={styles.categoriesContainer}>
          {displayCategories}
        </div>
      </div>
    </DragDropContext>
  );
}

const styles = {
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  categories: state.categories // we get the categories from the reducer's given state
})

export default connect(mapStateToProps, {sort})(App); // this creates the connection
