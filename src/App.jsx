import { useState } from 'react'
import './App.css'
import AnimationContainer from './components/AnimationContainer'
import ComponentToBeAnimated from './components/ComponentToBeAnimated'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="container">
      <header>
        <h1>Exit/Unmount Animations with React - Blog Demo</h1>
      </header>

      <main>
        {/* problem definition demo */}
        <section>
          <h2>Demo 1 - Problem Definition</h2>
          <p>
            This is the demo for the problem definition, featuring an
            {' '}
            <code>&lt;AnimationContainer /&gt;</code>
            {' '}
            with both inner and outer visibility controller variables. Click the button below to toggle the animated component.
          </p>

          <p>
            <button onClick={() => { setIsVisible(prev => !prev) }}>
              Toggle Animated Component
            </button>
            {' '}
            <code>
              isVisible:
              {JSON.stringify(isVisible)}
            </code>
          </p>

          <AnimationContainer isVisible={isVisible}>
            <ComponentToBeAnimated />
          </AnimationContainer>
        </section>
      </main>

      <footer>
        <p><a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react">GitHub</a></p>
      </footer>
    </div>
  )
}

export default App
