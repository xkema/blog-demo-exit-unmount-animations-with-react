import { useRef, useState } from 'react'
import '../App.css'
import { CSSTransition } from 'react-transition-group'

function DemoReactTransitionGroup() {
  const [isVisibleReactTransitionGroup, setIsVisibleReactTransitionGroup] = useState(true)

  const nodeRef = useRef(null)

  return (
    <section>
      <h2 id="demo-3-react-transition-group">Demo 3 - React Transition Group <a href="#demo-3-react-transition-group">#</a></h2>

      <p>React Transition Group is not an animation library. It is a kind of a decorator that decorates animation containers and targets by animation-related class names and event handlers. You are still responsible for writing CSS animations with it using the library provided built-in (prefixable) class names.</p>
      <p>To control exit animations you need to use 2 props of the <code>CSSTransition</code> (or <code>Transition</code>) component. The <code>unmountOnExit</code> flag and <code>addEndListener</code> event listener.</p>
      <p>There is also a fallback mechanism controlled with the <code>timeout</code> prop to signal the ending of the animations forcefully.</p>
      <p>⚠️ When using the <code>addEndListener</code> handler, do not forget to use the correct native JavaScript event listener inside the handler. If you are using CSS <code>transition</code> property for the animations then listen to the <code>transitionend</code> event. If you are using CSS <code>animation</code> property then listen to the <code>animationend</code> event.</p>
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
      <p><a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react/blob/main/src/components/DemoReactTransitionGroup.jsx">See the code at GitHub</a></p>
    </section>
  )
}

export default DemoReactTransitionGroup
