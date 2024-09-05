import { useState } from 'react'
import '../App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ComponentToBeAnimatedGSAP from './ComponentToBeAnimatedGSAP'

gsap.registerPlugin(useGSAP)

function DemoGSAP() {
  const [isVisibleGSAP, setIsVisibleGSAP] = useState(true)

  const { contextSafe } = useGSAP()

  const exitHandler = contextSafe(() => {
    gsap.to('.inner.gsap', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // This animation recreates itself again and again since the `DemoGSAP` is never unmounted.
        // We may use `gsap.context().kill()` to destroy previously created tweens manually here!
        setIsVisibleGSAP(false)
      },
    })
  })

  return (
    <section>
      <h2 id="demo-4-gsap">Demo 4 - GSAP <a href="#demo-4-gsap">#</a> </h2>

      <p>Implementing the same logic using GSAP was more challenging than with other libraries. Unlike those libraries, GSAP doesn&apos;t have a built-in solution for exit/unmount animations and employs an imperative approach to build animations. As a  framework-agnostic library, it uses a lower-level abstraction, requiring you to ask more questions compared to other libraries. I think I&apos;ll write another article about GSAP, so I&apos;ll stop here and avoid further explanations.</p>
      <p>The most challenging part was dealing with the &quot;context-safe&quot; context (pun intended) and the &quot;cleanup logic&quot; that comes with the React helper <code>useGSAP</code> hook.</p>
      <p>In summary, as we did in the problem definition and React Transition Group demos, we also need to manually delay the animation when React unmounts the animated element by listening for the <code>onAnimationEnd</code> event.</p>
      <p>To keep the demo code simple, I separated the enter and exit logic into parent and child components. The exit is handled in the parent, while the enter is handled in the animated component&apos;s body. (I&apos;ll explain the reason behind this separation in a separate post.)</p>
      <p>⚠️ One more thing! The exit animation is created repeatedly every time the user clicks the toggle button to hide the component. To address this issue, two potential solutions came to mind: using <code>forwardRef</code> and <code>useImperativeHandler</code>, or saving the recreated animation in a <code>useRef</code> hook. However, for the sake of simplicity, I decided to skip these approaches here.</p>

      <p>
        {/* 👇 */}
        <button onClick={
          () => {
            isVisibleGSAP ? exitHandler() : setIsVisibleGSAP(true)
          }
        }
        >
          Toggle
        </button>
      </p>
      <p>
        <code>GSAP</code> - <code>isVisibleGSAP: {JSON.stringify(isVisibleGSAP)}</code>
      </p>

      <div className="outer">
        <code>&lt;div /&gt;</code>

        {/* 👇 */}
        {isVisibleGSAP && <ComponentToBeAnimatedGSAP />}

      </div>
      <p><a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react/blob/main/src/components/DemoGSAP.jsx">See the code at GitHub</a> <small>(GSAP)</small></p>
    </section>
  )
}

export default DemoGSAP
