import { Html } from '@react-three/drei'

const Test = () => {
  return (
    <div>
      test page
      {/* <iframe
        width={320}
        height={640}
        src="https://hci-gu.github.io/sci-project/#/demo"
      ></iframe> */}
    </div>
  )
}

Test.layout = (children) => {
  return <>{children}</>
}

Test.onlyCanvas = true
Test.r3f = () => {
  return (
    <>
      <Html transform occlude>
        <div>
          <iframe
            width={320}
            height={640}
            src="https://hci-gu.github.io/sci-project/#/demo"
          ></iframe>
        </div>
      </Html>
    </>
  )
}

export default Test
