import { useState } from 'react'
import '../App.css'
import AnimationContainer from './AnimationContainer'
import ComponentToBeAnimated from './ComponentToBeAnimated'

function DemoProblemDefinition() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <section>
      <h2 id="demo-1-problem-definition"> Demo 1 - Problem Definition <a href="#demo-1-problem-definition">#</a></h2>

      <p>This is the demo for the problem definition, featuring an <code>&lt;AnimationContainer /&gt;</code> with both inner and outer visibility controller variables. Click the button below to toggle the animated component.</p>
      <p>
        {/* 👇 */}
        <button onClick={
          () => {
            setIsVisible(prev => !prev)
          }
        }
        >Toggle
        </button>
      </p>
      <p>
        <code>Problem Definition Demo</code> - <code>isVisible: {JSON.stringify(isVisible)}</code>
      </p>

      {/* 👇 */}
      <AnimationContainer isVisible={isVisible}>
        <ComponentToBeAnimated />
      </AnimationContainer>

      <p><a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react/blob/main/src/components/DemoProblemDefinition.jsx">See the code at GitHub</a> <small>(Problem Definition)</small></p>
    </section>
  )
}

export default DemoProblemDefinition
