// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Gridsome",
	transformers: {
		remark: {
			externalLinksTarget: "_blank",
			externalLinksRel: ["nofollow", "noopener", "noreferrer"],
			anchorClassName: "icon icon-link",
			plugins: [
				// ...global plugins
			]
		}
	},

	plugins: [
		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "authors/**/*.md",
				typeName: "Authors",
				remark: {
					plugins: [
						// ...local plugins
					]
				}
			}
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "posts/**/*.md",
				typeName: "Posts",
				refs: {
					author: "Authors"
				},
				remark: {
					plugins: [
						// ...local plugins
					]
				}
			}
		},
		{
			use: "@gridsome/source-faker",
			options: {
				numNodes: 100
			}
		},
		{
			use: `gridsome-plugin-netlify-cms`,
			options: {
				publicPath: `/admin`
			}
		}
	]
};
