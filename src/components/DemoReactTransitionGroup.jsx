import { useRef, useState } from 'react'
import '../App.css'
import { CSSTransition } from 'react-transition-group'

function DemoReactTransitionGroup() {
  const [isVisibleReactTransitionGroup, setIsVisibleReactTransitionGroup] = useState(true)

  const nodeRef = useRef(null)

  return (
    <section>
      <h2 id="demo-3-react-transition-group">Demo 3 - React Transition Group <a href="#demo-3-react-transition-group">#</a></h2>

      <p>React Transition Group is not an animation library; rather, it&apos;s a decorator that enhances animation containers and targets by providing animation-related class names and event handlers. You still need to write your own CSS animations using the library&apos;s built-in (prefixable) class names.</p>
      <p>To control exit animations, you must utilize two props of the <code>CSSTransition</code> (or <code>Transition</code>) component: the <code>unmountOnExit</code> flag and the <code>addEndListener</code> event listener.</p>
      <p>There is also a fallback mechanism controlled by the <code>timeout</code> prop to forcibly signal the end of the animations when necessary.</p>
      <p>⚠️ When using the <code>addEndListener</code> handler, remember to use the correct native JavaScript event listener within the handler. If you&apos;re utilizing CSS <code>transition</code> property for your animations, listen for the <code>transitionend</code> event. If you&apos;re using CSS <code>animation</code> property, listen for the <code>animationend</code> event instead.</p>

      <p>
        {/* 👇 */}
        <button onClick={
          () => {
            setIsVisibleReactTransitionGroup(prev => !prev)
          }
        }
        >Toggle
        </button>
      </p>
      <p>
        <code>React Transition Group</code> - <code>isVisibleReactTransitionGroup: {JSON.stringify(isVisibleReactTransitionGroup)}</code>
      </p>

      <div className="outer">
        <code>&lt;CSSTransition nodeRef=&#123;nodeRef&#125; /&gt;</code>

        {/* 👇 */}
        <CSSTransition
          nodeRef={nodeRef}
          timeout={5000}
          in={isVisibleReactTransitionGroup}
          appear={isVisibleReactTransitionGroup}
          unmountOnExit
          addEndListener={(done) => {
            nodeRef.current.addEventListener('animationend', done, false)
          }}
        >
          <div className="inner" ref={nodeRef}>
            <code>&lt;div ref=&#123;nodeRef&#125; /&gt;</code>
          </div>
        </CSSTransition>

      </div>
      <p><a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react/blob/main/src/components/DemoReactTransitionGroup.jsx">See the code on GitHub</a> <small>(React Transition Group)</small></p>
    </section>
  )
}

export default DemoReactTransitionGroup
