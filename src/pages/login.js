import React from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
// import { Link } from 'gatsby'
// import Content from '../elements/content'
// import Inner from "../elements/inner"
import Layout from '../components/layout'
import Pageshero from '../components/pageshero'
import Pagesfooter from '../components/pagesfooter'
// import Intro from "../sections/intro"

const Login = () => (
    <Layout>
        <Parallax pages={1}>
            <Pageshero offset={0} factor={1} />
            <Pagesfooter offset={0} factor={1} />
        </Parallax>
    </Layout>
)

export default Login