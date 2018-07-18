import React from 'react'
import Link from 'gatsby-link'



const IndexPage = ({data}) => (
  <div>
    <h1>Wubba lubba dub dub friends!</h1>
    <p>Meeseeks!!</p>
    <p>I'm Ants-In-My-Eyes Johnson! here at 
    Ants-In-My-Eyes Johnson's Electronics! 
    I mean, there's so many ants in my eyes!</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post =>(
      <Link key={post.node.id} 
      href={post.node.frontmatter.path}
      >
      {post.node.frontmatter.title}
      </Link>
    ))}
  </div>
)

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(limit: 10) {
    edges {
      node {
        html
        id
        frontmatter {
          path
          title
        }
      }
    }
  }
}
`

export default IndexPage
