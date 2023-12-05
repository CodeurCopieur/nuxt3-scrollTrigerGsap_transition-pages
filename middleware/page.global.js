export default defineNuxtRouteMiddleware((to, from) =>  {

  from.meta.pageTransition.onLeave = (el, done) => {

    general.isTransitionStart = false
    general.isTransitionStart = true
    general.isTransitionFinish = false
    general.scrollLenis.stop()

    const tl = gsap.timeline({
      onComplete() {

        gsap.set(el, {
          clearProps: 'all'
        })
        done()

      }
    })

    tl.set(el, {
      position: 'relative',
      zIndex: 2,
      pointerEvents: 'none'
    })

    tl.to(el.querySelector('.header'), {
      yPercent: -100,
      duration: .3
    }, 0)
  }

  to.meta.pageTransition.onEnter = (el, done) => {
    const tl = gsap.timeline({
      onComplete() {
        gsap.set(el, {
          clearProps: 'all'
        })

        general.isTransitionStart = false
        general.isTransitionFinish = true
        general.scrollLenis.start()

        done()
      }
    })

    tl.set(el, {
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none'
    })

    tl.from(el, {
      opacity: 0,
      duration: .3
    }, 0)
  }

})