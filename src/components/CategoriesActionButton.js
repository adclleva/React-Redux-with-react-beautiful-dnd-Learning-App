import React, {useState} from "react"
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Icon';
import TextareaAutosize from 'react-textarea-autosize' // we installed react-textarea-autosize

function CategoriesActionButton(props) {

    const [ formOpen, setFormOpen ] = useState(false)
    const [ text, setText ] = useState()
    
    const renderAddButton = () => {
        const { category } = props
        const buttonText = category ? "Add another category" : "Add another card"
        const buttonTextOpacity = category ? 1 : 0.5
        const buttonTextColor = category ? "white" : "inherit"
        const buttonTextBackground = category ? "rgba(0,0,0,.15)" : "inherit"
        return (
            <div 
                onClick={openForm}
                style={{
                    ...styles.openForButtonGroup,
                    opacity: buttonTextOpacity, 
                    color: buttonTextColor, 
                    backgroundColor: buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    const openForm = () => {
        setFormOpen(true)
    }

    const closeForm =() => {
        setFormOpen(false)
    }

    const renderForm = () => {
        const { category } = props

        const placeholder = category ? "Enter Category title..." : "Enter job for this card..."
        const buttonTitle = category ? "Add Category" : "Add Job"
        return (
            <div>
                <Card>
                    <TextareaTeAutosize 
                        placeholder={placeholder}
                        autoFocus
                    />
                </Card>
            </div>
        )
    }

    return formOpen ? renderForm() : renderAddButton()
}

const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    }
}

export default CategoriesActionButton