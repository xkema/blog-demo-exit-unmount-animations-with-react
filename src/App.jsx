import './App.css'
import DemoFramerMotion from './components/DemoFramerMotion'
import DemoReactTransitionGroup from './components/DemoReactTransitionGroup'
import DemoGSAP from './components/DemoGSAP'
import DemoProblemDefinition from './components/DemoProblemDefinition'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Exit/Unmount Animations with React - Blog Demo</h1>
      </header>

      <main>
        {/* problem definition demo */}
        <DemoProblemDefinition />

        {/* framer-motion demo */}
        <DemoFramerMotion />

        {/* react-transition-group demo */}
        <DemoReactTransitionGroup />

        {/* gsap demo */}
        <DemoGSAP />
      </main>

      <footer>
        <p>
          <a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react">See the code on GitHub</a>
        </p>
        <p>
          <a href="https://kemalyilmaz.com/blog/exit-unmount-animations-with-react">Read the blog post</a>
        </p>
      </footer>
    </div>
  )
}

export default App
