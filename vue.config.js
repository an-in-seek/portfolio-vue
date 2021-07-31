const url = 'http://inseek.duckdns.org';
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