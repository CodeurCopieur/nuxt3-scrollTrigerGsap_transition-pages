export default defineNuxtRouteMiddleware((to, from) =>  {

  from.meta.pageTransition.onLeave = (el, done) => {

    general.isTransitionStart = false
    general.isTransitionStart = true
    general.isTransitionFinish = false
    general.scrollLenis.stop()

    const tl = gsap.timeline({
      onComplete() {

        gsap.set([
          el, 
          el.querySelector('.page-wrap'), 
          el.querySelector('.header')], {
          clearProps: 'all'
        })

        ScrollTrigger.getAll().filter( st => {
          if (from.name.includes('-id')) {
            if (st.trigger && st.trigger.closest(`.projet-${from.params.id}`)) {
              st.kill()
            }
          } else {
            if (st.trigger && st.trigger.closest(`.${from.name}`)) {
              st.kill()
            }
          }
        })

        done()
      }
    })

    tl.set(el, {
      position: 'relative',
      zIndex: 2,
      pointerEvents: 'none'
    })

    tl.fromTo(el, {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
		}, {
			clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
			duration: 1,
		})

    tl.to(el.querySelector('.header'), {
      yPercent: -100,
      duration: .3
    }, 0)

    tl.to(el.querySelector('.page-wrap'), {
      xPercent: -20,
      duration: 1
    }, 0)
  }

  to.meta.pageTransition.onEnter = (el, done) => {

    useChangePageBg()
    
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

    tl.from(el.querySelector('.page-wrap'), {
      xPercent: 50,
      duration: 1
    }, 0)

    // tl.from(el, {
    //   opacity: 0,
    //   duration: .3
    // }, 0)
  }

})