import React from "react"
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';


const JobCard = ({title, name}) => {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
                <Typography>
                    {title} - {name}
                </Typography>
            </CardContent>
      </Card>
    )
}

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}

export default JobCard
