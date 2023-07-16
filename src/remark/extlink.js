const visit = require("unist-util-visit");

const plugin = (options) => {
	const transformer = async (ast) => {
		visit(ast, "element", (node) => {
			if (node.tagName === "a") {
				if (!node.properties) {
					return;
				}
				const suffix = "#target=_blank";
				if (node.properties.href?.endsWith(suffix)) {
					// console.log(node.properties.href);
					node.properties.href = node.properties.href
						.split("")
						.slice(0, node.properties.href.length - suffix.length)
						.join("");
					node.properties.target = "_blank";
					node.properties.rel = "noopener noreferrer";
				}
			}
		});
	};
	return transformer;
};

module.exports = plugin;
