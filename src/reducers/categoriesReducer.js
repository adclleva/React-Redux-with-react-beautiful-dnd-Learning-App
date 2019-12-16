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
        id: "category-12",
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

            if (droppableIdStart === droppableIdEnd) { // this means that if it happens in the same categories section
                const category = state.find(category => {
                    console.log(category, "category")
                    return droppableIdStart === category.id

                })

                const job = category.jobs.splice(droppableIndexStart, 1)
                category.jobs.splice(droppableIndexEnd, 0, ...job)
            } 
            return newState
        }

        default: 
            return state;
    }
}

export default categoriesReducer