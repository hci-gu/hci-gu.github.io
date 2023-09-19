const iframeUrl = 'https://hci-gu.github.io/sci-project/#'
export const getIframeUrlForPage = (page) => {
  switch (page) {
    case 1:
    case 2:
    case 7:
    case 8:
      return `${iframeUrl}/`
    case 3:
    case 4:
      return `${iframeUrl}/calories`
    case 5:
      return `${iframeUrl}/sedentary`
    case 6:
      return `${iframeUrl}/activity`
    default:
      return `${iframeUrl}`
  }
}
