import React from 'react'
import {PropTypes} from 'prop-types'
import {Helmet} from 'react-helmet'


const ShortHelmet  = (props)=>(
    <Helmet>
        <title>{props.title}</title>
        {props.children}
    </Helmet>
)

ShortHelmet.propTypes={
    title:PropTypes.string
}
ShortHelmet.defaultProps={
    title: process.env.REACT_APP_NAME
}

export default ShortHelmet