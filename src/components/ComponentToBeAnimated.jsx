function ComponentToBeAnimated() {
  return (
    <div
      className="inner"
    >
      <code>&lt;div.dummy-div-to-avoid-prop-drilling&gt;</code>
      <br />
      &nbsp;&nbsp;
      <code>&lt;ComponentToBeAnimated /&gt;</code>
    </div>
  )
}

export default ComponentToBeAnimated
