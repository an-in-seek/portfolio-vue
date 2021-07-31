const url = 'http://localhost';
// const url = 'http://localhost:8080';

module.exports = {
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