const highlight = {
    beforeMount(el, binding, vnode) {
        console.log('highlight directive:'+ el, binding, vnode)
        el.style.background = binding.value
    },
    updated(el, binding, vnode) {
        console.log('highlight directive:'+ el, binding, vnode)
        el.style.background = binding.value
    }
}

const directives = {
    highlight
} 

export default directives