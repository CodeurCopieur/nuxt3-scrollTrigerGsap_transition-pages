export function useAnimationImage(el) {

  const element = typeof el === 'string' ? document.querySelector(el) : el

  const tl = gsap.timeline()

  if (element) {
    tl.set(element, {
      overflow: 'hidden',
      pointerEvents: 'none'
    })

    tl.fromTo(element, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
    },{
      transition: 'unset',
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: .7,
      delay: .1,
      clearProps: 'all'
    })
  }

  return tl

}