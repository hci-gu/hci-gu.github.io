import Menu from '../Menu'
import Footer from '../Footer'

export default function Layout({ children, page }) {
  if (page.layout) {
    return page.layout(children)
  }
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}
