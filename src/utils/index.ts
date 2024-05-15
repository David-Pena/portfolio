import * as WOW from 'wowjs'

function kuraTmPreloader() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ? true
    : false
  const preloader = document.getElementById('preloader')

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add('preloaded')
      }, 800)
      setTimeout(function () {
        preloader.remove()
      }, 2000)
    } else {
      preloader.remove()
    }
  }
}

function kuraTmDataImages() {
  const d = document.querySelectorAll('[data-img-url')
  for (let i = 0; i < d.length; i++) {
    const element = d[i] as any
    element.style.backgroundImage = `url(${element.getAttribute('data-img-url')})`
  }
}

export const kuraTmMyLoad = () => {
  kuraTmPreloader()
  setTimeout(() => {
    document.querySelector('body')?.classList.add('opened')
  }, 1500)
}

export const customCursor = () => {
  const myCursor = document.querySelectorAll('.mouse-cursor')
  const hamburger = document.querySelectorAll('.hamburger')
  const kuraTmTopbar = document.querySelectorAll('.kura_tm_topbar')
  const pointer = document.querySelectorAll('.cursor-pointer')
  const e = document.querySelectorAll('.cursor-inner') as any
  const t = document.querySelectorAll('.cursor-outer') as any

  function mouseEvent(element: any) {
    element.addEventListener('mouseenter', function () {
      e.classList.add('cursor-hover'), t.classList.add('cursor-hover')
    })
    element.addEventListener('mouseleave', function () {
      e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover')
    })
  }

  if (myCursor.length) {
    if (document.body) {
      const o = !1
      ;(window.onmousemove = function (s) {
        o || (t.style.transform = 'translate(' + s.clientX + 'px, ' + s.clientY + 'px)'),
          (e.style.transform = 'translate(' + s.clientX + 'px, ' + s.clientY + 'px)')
      }),
        document.body.addEventListener('mouseenter', function () {
          const a = document.querySelectorAll('a')
          e.classList.add('cursor-inner'), t.classList.add('cursor-outer')

          for (let i = 0; i < a.length; i++) {
            const element = a[i]
            mouseEvent(element)
          }

          hamburger && mouseEvent(hamburger)
          kuraTmTopbar && mouseEvent(kuraTmTopbar)
          pointer && mouseEvent(pointer)
        }),
        (e.style.visibility = 'visible'),
        (t.style.visibility = 'visible')
    }
  }
}

export const audioSoundAndOpen = () => {
  const audio1 = document.querySelectorAll('#audio1')
  const audio2 = document.querySelectorAll('#audio2')
  const hamburgers = document.querySelectorAll('.trigger .hamburger')

  hamburgers.forEach((hamburger) => {
    hamburger.addEventListener('click', function () {
      if (hamburger.classList.contains('is-active')) {
        ;(audio1[0] as HTMLMediaElement).play()
      } else {
        ;(audio2[0] as HTMLMediaElement).play()
      }
      return false
    })
  })
}

export const wowJsAnimation = () => {
  new WOW.WOW().init()
}

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']")
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i]
    a.addEventListener('click', (e) => {
      e.preventDefault()
    })
  }
}

export const dataImage = () => {
  kuraTmDataImages()
}

export const kuraTmServicePopup = () => {
  const modalBox = document.querySelector('.kura_tm_modalbox')
  const buttons = document.querySelectorAll(' .services> ul> li> a,.kura_tm_full_link_')
  const closePopup = modalBox?.getElementsByClassName('close')[0]
  buttons.forEach((button) => {
    button.addEventListener('click', (e: any) => {
      const element = e?.target?.parentElement
      let elImage = element.getElementsByClassName('image_')[0]
      elImage = elImage.currentSrc ? elImage.currentSrc : elImage.getAttribute('data-img-url')
      const title = element.getElementsByClassName('span')[0].innerText
      const date =
        element.getElementsByClassName('date')[0] &&
        element.getElementsByClassName('date')[0].innerText
      const parentLi = element.parentElement
      const description = parentLi.getElementsByClassName('description')[0].innerHTML
      const news_popup_informations = modalBox!.getElementsByClassName('news_popup_informations')[0]
      // Image
      news_popup_informations.innerHTML = `<div class="image"><img src="img/thumbs/4-2.jpg" alt=""><div class="main" data-img-url=${elImage} ></div></div>`
      kuraTmDataImages()

      // title
      const divTitle = document.createElement('div')
      divTitle.classList.add('details')
      divTitle.innerHTML = `${date ? `<span>${date}</span>` : ''} <h3>${title}</h3>`
      news_popup_informations.appendChild(divTitle)

      // text
      const divText = document.createElement('div')
      divText.innerHTML = description
      divText.classList.add('text')
      news_popup_informations.appendChild(divText)
      // popup open
      modalBox!.classList.add('opened')
      return false
    })
  })

  closePopup?.addEventListener('click', () => {
    modalBox!.classList.remove('opened')
    modalBox!.getElementsByClassName('news_popup_informations')[0].innerHTML = ''
    return false
  })
}
