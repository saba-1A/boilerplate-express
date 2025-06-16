{
    //myApp.use(enableCORS);
    app.use('/', myApp);
    var stack = (myApp._router && myApp._router.stack) || [];
    var layers = stack.map((l) => l.name);
.....

// check if /now route has a middleware before the handler
    var nowRoute = stack.filter((l) => {
      if (l.route) {
        return l.route.path === '/now';
      }
      return false;
    });
    if (nowRoute.length > 0) {
      nowRoute = nowRoute[0];
      globals.nowRouteStackLength = nowRoute.route.stack.length;
    }
