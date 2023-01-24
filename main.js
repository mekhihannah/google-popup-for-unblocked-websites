const head = document.getElementsByTagName("head")[0] || document.head
const body = document.getElementsByTagName("body")[0] || document.body
window.teachers = false
window.teachKey = document.currentScript.getAttribute('key') || ","

function main(event) {
  if (event.key === window.teachKey) {
    if (typeof(window.oldTitle) === "undefined" || typeof(window.oldTitle) !== "boolean" && typeof(window.oldTitle) !== "string") {
      try {
        window.oldTitle = head.getElementsByTagName("title")[0].innerHTML
      } catch {
        var title = document.createElement("title")
        title.innerHtml = ""
        head.appendChild(title)
        window.oldTitle = false
      }
    }
    if (typeof(window.oldIcon) === "undefined" || typeof(window.oldIcon) !== "boolean" && typeof(window.oldIcon) !== "string") {
      try {
        var links = head.getElementsByTagName("link")
        for (i = 0; i < links.length; i++) {
          if (links[i].rel === "icon") {
            window.oldIcon = links[i].href
          }
        }
      } catch {
        var icon = document.createElement("link")
        icon.rel = "icon"
        icon.href = ""
        icon.type = "image/x-icon"
        head.appendChild(icon)
        window.oldIcon = false
      }
    }
    if (!window.teachers) {
      head.getElementsByTagName("title")[0].innerHTML = "google.com"
    } else {
      if (typeof(window.oldTitle) !== "boolean" && typeof(window.oldTitle) !== "undefined") {
        head.getElementsByTagName("title")[0].innerHTML = window.oldTitle
      }
    }
    var links = head.getElementsByTagName("link")
    for (i = 0; i < links.length; i++) {
      if (links[i].rel === "icon") {
        if (!window.teachers) {
          links[i].href = "https://google.com/favicon.ico"
        } else {
          if (window.oldIcon !== "https://google.com/favicon.ico") {
            links[i].href = window.oldIcon
          }
        }
      }
    }
    var all = document.getElementsByTagName("*");
    if (!window.teachers) {
      for (var i = 0; i < all.length; i++) {
        all[i].style.visibility = "hidden"
      }
      var img = document.createElement("img")
      img.id = "teachers"
      img.style.height = "100%"
      img.style.width = "100%"
      img.style.position = "absolute"
      img.style.inset = "0%"
      img.style.visibility = "visible"
      img.src = "https://github.com/tympanicblock61/google-popup-for-unblocked-websites/blob/main/google.png"
      body.appendChild(img)
    } else {
      var img = document.getElementById("teachers")
      img.remove()
      for (var i = 0; i < all.length; i++) {
        all[i].style.visibility = "visible"
      }
    }
    window.teachers = !window.teachers
  }
}
document.addEventListener("keyup", main)
