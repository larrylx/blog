import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = ({data}) => (
    <Layout>
        <h1>
            About
        </h1>
        <p>
            xixi
        </p>
        <Link to='/'>Go back to the homepage</Link>
    </Layout>
)

export default About

// export const query = graphql`
// query {
//   site {
//     siteMetadata {
//         siteTitle
//         siteDescription
//     }
//   }
// }
// `
// {data.site.siteMetadata.siteTitle}
// {data.site.siteMetadata.siteDescription}