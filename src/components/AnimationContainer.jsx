import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

// Real business part! 👇

function AnimationContainer({ isVisible, children }) {
  const [isVisibleInner, setIsVisibleInner] = useState(false)

  // controls enter/mounting state only
  useEffect(() => {
    if (isVisible) {
      setIsVisibleInner(true)
    }
  }, [isVisible])

  return (
    <div className="animation-container">
      <p><code>&lt;AnimationContainer /&gt;</code></p>
      {isVisibleInner && (
        <div
          className={`dummy-div-to-avoid-prop-drilling ${isVisible ? 'animate-in' : 'animate-out'}`}
          onAnimationEnd={() => {
            // controls exit/unmount only
            if (isVisible === false) {
              setIsVisibleInner(false)
            }
          }}
        >
          {/* The children here is the `<ComponentToBeAnimated />` component! */}
          {children}
        </div>
      )}
    </div>
  )
}

// I hate modern development workflows part! 👇

AnimationContainer.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.node,
}

export default AnimationContainer
