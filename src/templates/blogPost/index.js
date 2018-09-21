import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Helmet from 'react-helmet'
import { DiscussionEmbed } from 'disqus-react'

import './index.scss'

export default class BlogTemplate extends React.Component {
  render() {
    console.log(this.props)
    const { data, location, pageContext } = this.props
    const { id, frontmatter, html } = data.markdownRemark
    const siteTitle = data.site.siteMetadata.siteTitle
    const { previous, next } = pageContext

    //disqus
    const disqusShortname = 'dev-hundred-blog'
    const disqusConfig = {
      identifier: id,
      title: siteTitle,
    }

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          <div className="blog-post-nav">
            <ul>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
