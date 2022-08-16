module.exports = {
	branches: [
		{ name: "master" },
		{ name: "beta", channel: "beta", prerelease: true }, // `prerelease` is set to `beta` as it is the value of `name`
	],
	npmPublish: false,
	dryRun: false,
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/git",
		[
			"semantic-release-vsce",
			{
				packageVsix: true,
			},
		],
		[
			"@semantic-release/github",
			{
				assets: [
					{
						path: "*.vsix",
						label: "Extension File",
					},
				],
			},
		],
	],
};
