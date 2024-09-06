import { useState } from 'react'
import '../App.css'
import { AnimatePresence, motion } from 'framer-motion'

function DemoFramerMotion() {
  const [isVisibleFramerMotion, setIsVisibleFramerMotion] = useState(true)

  return (
    <section>
      <h2 id="demo-2-framer-motion">Demo 2 - Framer Motion <a href="#demo-2-framer-motion">#</a></h2>

      <p>Framer Motion provides us with a powerful exit animation container, <code>&lt;AnimatePresence /&gt;</code>, which offers significant functionality. However, there is one notable limitation: animated components must be direct children of <code>&lt;AnimatePresence /&gt;</code>. (This restriction stems from a React limitation originally.)</p>
      <p>At first glance, it may seem like magic. 😄 But the maintainers did an excellent job. Instead of relying on a flag like <code>isVisible</code> in the parent, the parent component keeps track of its children&apos;s exit status by iterating through its direct children.</p>
      <p>⚠️ Note that the wrapper <code>div</code> around <code>AnimatePresence</code> is merely for demonstration purposes and not required in practice!</p>

      <p>
        {/* 👇 */}
        <button onClick={
          () => {
            setIsVisibleFramerMotion(prev => !prev)
          }
        }
        >Toggle
        </button>
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
      <p><a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react/blob/main/src/components/DemoFramerMotion.jsx">See the code on GitHub</a> <small>(Framer motion)</small></p>
    </section>
  )
}

export default DemoFramerMotion
