import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Grid } from "grommet"

const PhotoComposition = ({ children }) => (
  <Grid gap="small" columns={{ count: `fill` }}>
    {children
      .filter(child => child !== `\n`)
      .map(child => (
        <Img fluid={JSON.parse(child.props.rehyped)} />
      ))}
  </Grid>
)

PhotoComposition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PhotoComposition
