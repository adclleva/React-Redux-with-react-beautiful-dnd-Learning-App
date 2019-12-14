const initialState = [
    {
        title: "Wish List",
        id: 1,
        jobs: [
            {
                name: "Google",
                title: "SWE III",
                id: 0
            },
            {
                name: "Facebook",
                title: "SWE III",
                id: 1
            }
        ]
    },
    {
        title: "Applied",
        id: 2,
        jobs: [
            {
                name: "Netflix",
                title: "SWE III",
                id: 2
            },
            {
                name: "Apple",
                title: "SWE III",
                id: 3
            }
        ]
    }
]

const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default categoriesReducer