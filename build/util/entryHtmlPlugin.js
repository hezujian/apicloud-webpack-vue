const path = require('path');
const fs = require('fs');
const os = require("os");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryHtmlPlugin = ()=>{
	const platform = os.platform().toLowerCase();
	const isWin = (platform === "win32") || (platform === "windows");
	const splitStr = isWin ? 'pages\\' : 'pages/';
	let entry = {};
	let pages = [];
	let items = [];
	const eachDirs = (mypath = path.resolve(__dirname, '../../src/pages/')) => {
		items = fs.readdirSync(mypath);

		// 遍历当前目录中所有的文件和文件夹
		items.map(item => {
			let p = path.join(mypath, item);
			if(p.indexOf('.vue')>-1){
				let fullPath = p.split(splitStr)[1].replace(/\\/g, "/").replace(/.vue/g, "");
				let temp = fullPath.split('/');
				let fileName = temp[temp.length-1];
				let chuckName = fullPath;
				
				entry[chuckName] = [
					path.resolve(__dirname, `../../src/pages/${fullPath}.js`)
				];
				
				let projectPath = path.relative(path.join(__dirname, '../../widget/html/' + fullPath), path.join(__dirname, '../../widget/html'));
				projectPath = projectPath.replace(/\\/g, "/");
				pages.push(
					new HtmlWebpackPlugin({
						filename: `${fullPath}.html`,
						chunks: [chuckName],
						jsPath: `${fileName}.js`,
						projectPath: projectPath,
						template: path.resolve(__dirname, `../../public/index.html`),
						inject: false
					})
				)
			} else if (fs.statSync(p).isDirectory()) {
				// 进入下一级文件夹访问
				eachDirs(p);
			}
		});
	} 
	eachDirs();
	return {
		entry,
		pages
	}
}

module.exports = entryHtmlPlugin;
