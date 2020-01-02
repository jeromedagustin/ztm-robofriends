import React from 'react'

const style = {
    overflowY: 'scroll', 
                border: '5px solid black',
                height: '500px',
}

const Scroll = (props) => {
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Scroll