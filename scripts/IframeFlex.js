const IframeFlex = {
  listen: (obj) => {
    const { nameProject, frameId, docHeight, scrollTop } = JSON.parse(obj.data);
    const iframe = window.document.getElementById(frameId);


    docHeight != undefined && nameProject != 'prelogin'
      ? iframe.height = docHeight
      : false

    //  SET SCROLL POSITION
    scrollTop != null
      && window.scrollTo(0, scrollTop)
  },
  start: () => {
    window.addEventListener(
      'message',
      (event) => {
        typeof event.data === 'string'
          && IframeFlex.listen(event)
      }
    )
  }
}


IframeFlex.start();