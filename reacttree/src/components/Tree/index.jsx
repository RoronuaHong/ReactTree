import React, { useState } from 'react'

import './index.css'

const Tree = ({
  data = []
}) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map(tree => <TreeNode node={tree} key={tree.key} />)}
      </ul>
    </div>
  )
}

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisible] = useState(false)

  const hasChild = node.children ? true : false

  return (
    <li className="d-tree-node border-0">
      {/* <div>显示的是父组件</div> */}
      <div className="d-flex" onClick={e => setChildVisible(v => !v)}>
        {hasChild && (
          <div className={`d-inline d-tree-toggler ${ childVisible ? "active" : ""}`}>
            {/* <FontAwesomeIcon icon="caret-right" /> */}
          </div>
        )}
        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon}`}></i>
          { node.label }
        </div>
      </div>
      <>
        {/* <div>显示/隐藏(子组件)</div> */}
        {hasChild && childVisible && <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children}  />
          </ul>
        </div>}
      </>
    </li>
  )
}

export default Tree
