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
