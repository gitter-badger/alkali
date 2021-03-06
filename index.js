/// <reference path="./index.d.ts" />
if (typeof define === 'function' && define.amd) {
define(['./Element', './Variable', './react', './Renderer', './operators', './Copy'], function(Element, Variable, react, Renderer, operators, Copy) {
	var main = Object.create(Element)
	main.Copy = Copy
	main.Element = Element
	main.Variable = Variable
	main.VMap = Variable.VMap
	main.VArray = Variable.VArray
	main.VPromised = Variable.VPromised
	main.all = Variable.all
	main.react = react
	main.spawn = function(func) {
		return react(func).valueOf()
	}
	main.Renderer = Renderer
	Object.assign(main, Renderer)
	Object.assign(main, operators)
	return main
})
} else if (typeof module === 'object' && module.exports) {
	// delegate to the built UMD file, if loaded in node
	module.exports = (require)('./dist/index')
}