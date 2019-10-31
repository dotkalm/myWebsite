const startTheShow = () => {
    let noticeArray = []
    const animate = setInterval(() => {
        const body1 = document.querySelector('body')
        body1.removeChild(body1.childNodes[body1.childNodes.length -1])
        const titleScreen = document.createElement('span')
        titleScreen.setAttribute('id','notice')
        noticeArray.push(' joel at joelholmberg dot com')
        titleScreen.innerText = noticeArray.flat()
        noticeArray.length > 3 ? noticeArray = [] : null
        body1.appendChild(titleScreen);
    }, 2000)
   
}
startTheShow()
