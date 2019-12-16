import { CONSTANTS } from "../actions";

const initialState = [
    {
        title: "Wish List",
        id: "category-1",
        jobs: [
            {
                name: "Google",
                title: "SWE III",
                id: "job-0"
            },
            {
                name: "Facebook",
                title: "SWE III",
                id: "job-1"
            }
        ]
    },
    {
        title: "Applied",
        id: "category-2",
        jobs: [
            {
                name: "Netflix",
                title: "SWE III",
                id: "job-2"
            },
            {
                name: "Apple",
                title: "SWE III",
                id: "job-3"
            }
        ]
    }
]

const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.DRAG_HAPPENED: {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload

            const newState = [...state]
            
            // this means that if it happens in the same categories section
            if (droppableIdStart === droppableIdEnd) { 
                const category = state.find(category => {
                    return droppableIdStart === category.id

                })

                const job = category.jobs.splice(droppableIndexStart, 1)
                category.jobs.splice(droppableIndexEnd, 0, ...job)
            } 

            // this is if the droppable goes to a different list
            if (droppableIdStart !== droppableIndexEnd) {
                // get the category where the drag ocurrs
                const categoryStart = state.find(category => {
                    return droppableIdStart == category.id
                }) 

                // we get the job from the category section
                const job = categoryStart.jobs.splice(droppableIdStart, 1)
                
                // get the category where the drag ended
                const categoryEnd = state.find(category => {
                    return droppableIdEnd === category.id
                })

                // we put the job in the new category
                categoryEnd.jobs.splice(droppableIndexEnd, 0, ...job)
            }
            return newState
        }

        default: 
            return state;
    }
}

export default categoriesReducer