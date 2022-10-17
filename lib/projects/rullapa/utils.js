const iframeUrl = 'https://hci-gu.github.io/sci-project/#'
export const getIframeUrlForPage = (page) => {
  switch (page) {
    case 1:
      return `${iframeUrl}/demo`
    case 2:
      return `${iframeUrl}/demo/calories`
    case 3:
      return `${iframeUrl}/demo/sedentary`
    case 4:
      return `${iframeUrl}/demo/activity`
    default:
      return `${iframeUrl}`
  }
}
