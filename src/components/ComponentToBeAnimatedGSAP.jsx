import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function ComponentToBeAnimatedGSAP() {
  useGSAP(() => {
    gsap.from('.inner.gsap', {
      // Used `gsap.from` with `opacity: 0` instead of using `gsap.to` to keep initial styles here!
      opacity: 0,
      duration: 0.5,
    })
  })

  return (
    <div className="inner gsap">
      <code>isVisibleGSAP &amp;&amp; &lt;ComponentToBeAnimatedGSAP /&gt;</code>
    </div>
  )
}

export default ComponentToBeAnimatedGSAP
