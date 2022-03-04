import React from 'react'

function Blog() {
  return (
    <aside className="blog aside section">
        <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Latest Blog Posts</h2>
            <div id="rss-feeds" className="content"></div>
        </div>
    </aside>
  )
}

export default Blog