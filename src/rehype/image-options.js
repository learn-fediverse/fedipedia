const visit = require("unist-util-visit");
const querystring = require("querystring");

const plugin = (options) => {
	const transformer = async (ast) => {
		visit(ast, "element", (node) => {
			if (node.type === "element") {
				console.log(node.tagName);
			}
			if (node.tagName === "img") {
				console.log(node.tagName);
				if (!node.properties) {
					return;
				}

				const hashes = node.properties.src.split("#");
				const lastHash = hashes[hashes.length - 1];
				if (!lastHash) return;
				if (!lastHash.endsWith("!!!")) return;
				const query = lastHash.slice(3);
				if (!query) return;
				console.log(query);
				try {
					const options = querystring.parse(query);
					const { width } = options;
					if (width) {
						node.properties.width = `${width}`;
					}
				} catch (e) {
					return;
				}
			}
		});
	};
	return transformer;
};

module.exports = plugin;
