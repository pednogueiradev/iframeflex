const PostMessage = {
  frameId: 'iframeFlex',
  project: 'app',
  defaulHeight: 1100,

  setHeight: () => {
    let ucd = '*';
    let body_height = document.body.scrollHeight
    let new_height = body_height > PostMessage.defaulHeight ? body_height : PostMessage.defaulHeight;

    let obj = JSON.stringify({
      'docHeight': new_height,
      'frameId': PostMessage.frameId,
      'nameProject': PostMessage.project
    })

    console.log(obj);
    window.top.postMessage(obj, ucd)
  },
  start: () => {
    window.onload = () => PostMessage.setHeight();
    window.onmouseover = () => PostMessage.setHeight();
  }
}

PostMessage.start();