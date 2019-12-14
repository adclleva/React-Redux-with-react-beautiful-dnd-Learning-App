import React from "react"
import JobCard from "./JobCard"

const Category = ({title, jobs}) => { // we use this to pass down the prop
    
    const displayJobs = jobs.map((job, index) => {
        return (
            <JobCard title={job.title} name={job.name}/>
        )
    })

    return (
        <div style={style.container}>
            <h3>{title}</h3>
            {displayJobs}

        </div>
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