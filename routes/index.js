var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	app.use(require('prerender-node').set('prerenderToken', 'bdHXmmLaAu5t2R018duW'));

	// Views
	app.get('/', routes.views.index);
	app.get('/do', routes.views.index);
	app.get('/venture', routes.views.index);
	app.get('/team', routes.views.index);
	app.get('/contact', routes.views.index);
	app.get('/views/:viewFile.html', routes.views.view);
	app.get('/sitemap.xml', function (req, res) {
		res.sendfile('sitemap.xml', {root: './public'});
	});
	app.get('/robots.txt', function (req, res) {
		res.sendfile('robots.txt', {root: './public'});
	});
	//app.get('/blog/:category?', routes.views.blog);
	//app.get('/blog/post/:post', routes.views.post);
	//app.all('/contact', routes.views.contact);

};
