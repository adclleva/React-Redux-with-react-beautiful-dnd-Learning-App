import React from "react"
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const JobCard = ({title, name}) => {
    return (
        <Card>
          <Typography>
            {title} - {name}
          </Typography>
      </Card>
    )
}

export default JobCard
