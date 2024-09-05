import { useState } from 'react'
import '../App.css'
import { AnimatePresence, motion } from 'framer-motion'

function DemoFramerMotion() {
  const [isVisibleFramerMotion, setIsVisibleFramerMotion] = useState(true)

  return (
    <section>
      <h2 id="demo-2-framer-motion">Demo 2 - Framer Motion <a href="#demo-2-framer-motion">#</a></h2>

      <p>Framer Motion provides us with a powerful exit animation container called <code>&lt;AnimatePresence /&gt;</code>. The only notable limitation of the component is animated components have to be the direct children of the <code>&lt;AnimatePresence /&gt;</code>. (It happens to be a React limitation originally.) Then it is some kind of magic.</p>
      <p>Actually it is not that magic. 😄 But the developers did a really great job. Instead of controlling a flag like <code>isVisible</code>, the component keep track of all the children if they are exiting from the React tree by looping through the direct children.</p>
      <p>⚠️ The wrapper <code>div</code> around the <code>AnimatePresence</code> is just for demonstration purposes. No need for it!</p>
      <p>
        <button onClick={() => { setIsVisibleFramerMotion(prev => !prev) }}>Toggle</button>
      </p>
      <p>
        <code>Framer Motion</code> - <code>isVisibleFramerMotion: {JSON.stringify(isVisibleFramerMotion)}</code>
      </p>

      <div className="outer">
        <code>&lt;AnimatePresence /&gt;</code>

        {/* 👇 */}
        <AnimatePresence>
          {isVisibleFramerMotion && (
            <motion.div
              className="inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <code>isVisibleFramerMotion &amp;&amp; &lt;motion.div /&gt;</code>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      <p><a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react/blob/main/src/components/DemoFramerMotion.jsx">See the code at GitHub</a></p>
    </section>
  )
}

export default DemoFramerMotion
