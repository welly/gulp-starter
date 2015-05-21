const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  const load = require(`bundle?lazy!./${name}`)
  load((Module) => new Module(el))
}
