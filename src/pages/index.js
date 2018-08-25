import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import GlitchText from '../components/GlitchText'
import Typist from 'react-typist'

import 'react-typist/dist/Typist.css'

const profileWords = ['前端开发工程师', '也略懂 Native 开发', 'Base 成都']

class BlogIndex extends React.PureComponent {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <GlitchText>Hu Huanming</GlitchText>
            <Typist cursor={{ hideWhenDone: true }}>
              {profileWords.map(words => (
                <span key={words}>
                  <span>{words}</span>
                  <Typist.Backspace count={words.length} delay={400} />
                </span>
              ))}
            </Typist>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
