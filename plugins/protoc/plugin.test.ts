import { run } from "../../testkit.js";

run({
	name: "protoc",
	afterInstall: async ($) => {
		await $`protoc version`;
	},
});
