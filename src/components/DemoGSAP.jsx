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

      <p>Implementing the same logic with GSAP was a little bit challenging then the others. There is no built-in solution for exit/unmount animations in the library and it uses an imperative approach to build animations. It is a framework-agnostic library and uses a lower-level abstraction and makes you ask more questions then other libraries. I think I will write another article about GSAP, so I will stop to try explaining things for now.</p>
      <p>The challenging part was mostly about the &quot;context-safe&quot; context (pun intended) and the &quot;cleaup logic&quot; comes with the React helper <code>useGSAP</code> hook.</p>
      <p>In summary, as we did in the problem definition and react transition group demos, we also need to manually delay when React unmounts the animated element with listening to the <code>onAnimationEnd</code> event.</p>
      <p>To make the demo code simple I separated enter and exit logic to the parent and child components. So exit is handled in the parent, enter is handled in the animated component body. (There is a reason for that I will try to explain in a separate post.) One more thing. Exit animation is created again and again here. Using <code>forwardRef</code> + <code>useImperativeHandler</code> or saving the recreated animation into a <code>useRef</code> hook were 2 solution I could come up with. But  again, for the sake of simplicity. I skipped them.</p>
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
      <p><a href="https://github.com/xkema/blog-demo-exit-unmount-animations-with-react/blob/main/src/components/DemoGSAP.jsx">See the code at GitHub</a></p>
    </section>
  )
}

export default DemoGSAP
