const path = require('path');
const url = 'http://localhost:8090';

module.exports = {
	// outputDir: path.resolve(__dirname, "../" + "main/resources/static"),
	devServer: {
		proxy: {
			'/api':{
				target: url,
				ws: true,
				changeOrigin: true
			}
		}
	}
}