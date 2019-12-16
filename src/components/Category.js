import React from "react"
import JobCard from "./JobCard"
import {Droppable} from "react-beautiful-dnd"

const Category = ({title, jobs, categoryId}) => { // we use this to pass down the prop
    
    const displayJobs = jobs.map((job, index) => {
        return (
            <JobCard title={job.title} name={job.name} key={job.id} jobId={job.id}/>
        )
    })

    return (
        <Droppable droppableId={String(categoryId)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={style.container}>
                    <h3>{title}</h3>
                    {displayJobs}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

const style ={
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
}

export default Category 