import React from "react"
import JobCard from "./JobCard"
import CategoriesActionButton from "./CategoriesActionButton"

const Category = ({title, jobs}) => { // we use this to pass down the prop
    
    const displayJobs = jobs.map((job, index) => {
        return (
            <JobCard key={job.id} title={job.title} name={job.name}/>
        )
    })

    return (
        <div style={style.container}>
            <h3>{title}</h3>
            {displayJobs}
            <CategoriesActionButton category
            />

        </div>
    )
}

const style ={
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
}

export default Category 