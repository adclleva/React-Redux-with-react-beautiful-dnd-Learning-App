import React from "react"
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';
import {Draggable}  from "react-beautiful-dnd"

const JobCard = ({title, name, jobId, index}) => {
    return (
        <Draggable draggableId={String(jobId)} index={index}>
            {provided => (
                <div 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}>
                {/* we need a ref to the div and not the Card*/}
                    <Card style={styles.cardContainer}>
                        <CardContent>
                            <Typography>
                                {title} - {name}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>
    )
}

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}

export default JobCard
