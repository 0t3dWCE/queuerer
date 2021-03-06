angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div ng-controller=\"HomeCtrl\">\n" +
    "    <div id=\"Exper\" ng-controller=\"AlertDemoCtrl\">\n" +
    "    <div class=\"navbar navbar-inverse\">\n" +
    "        <div id=\"container\" ng-controller=\"DropdownCtrl\">\n" +
    "            <div class=\"btn-group\" dropdown>\n" +
    "                <button type=\"button\" class=\"btn btn-info navbar-btn\">Action</button>\n" +
    "                <button type=\"button\" class=\"btn btn-info dropdown-toggle navbar-btn\">\n" +
    "                    <span class=\"caret\"></span>\n" +
    "                    <span class=\"sr-only\">Split button!</span>\n" +
    "                </button>\n" +
    "                <ul class=\"dropdown-menu\" role=\"menu\" >\n" +
    "                    <div id=\"huy\" ng-repeat=\"choice in dropChoices\">\n" +
    "                        <li>\n" +
    "                            <a href=\"{{choice.link}}\">{{choice.name}}</a>\n" +
    "                        </li>\n" +
    "                    </div>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"btn-group\" role=\"group\">\n" +
    "                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
    "                  Dropdown\n" +
    "                  <span class=\"caret\"></span>\n" +
    "                </button>\n" +
    "                <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "\n" +
    "                  <li><a href=\"#\">Dropdown link</a></li>\n" +
    "                  <li><a href=\"#\">Dropdown link</a></li>\n" +
    "\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"btn-group\" role=\"group\" id=\"fat_ddl\">\n" +
    "                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
    "                  Dropdown\n" +
    "                  <span class=\"caret\"></span>\n" +
    "                </button>\n" +
    "                <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                    <div id=\"vneshniy\">\n" +
    "                        <li style=\"width: 400px; height: 200px;\">\n" +
    "                            <div class=\"mega-menu-content\" id=\"c1\">\n" +
    "                                <div class=\"row\" id=\"row_1\">\n" +
    "                                    <div class=\"col-md-6\" id=\"col_1\">\n" +
    "                                        <a href=\"#\">Dropdown link</a>\n" +
    "                                        <a href=\"#\">Dropdown link</a>\n" +
    "                                     </div>\n" +
    "                                    <div class=\"col-md-4\" id=\"col_2\">\n" +
    "                                        <a href=\"#\">Dropdown link</a>\n" +
    "                                        <a href=\"#\">Dropdown link</a>\n" +
    "                                     </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\" id=\"row_2\">\n" +
    "                                    <div class=\"col-md-4\" id=\"col_22\" >\n" +
    "                                        <p>\n" +
    "                                            <button class='btn btn-info' ng-click=\"addAlert('info')\">Add Alert</button>\n" +
    "                                        </p>\n" +
    "                                     </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </div>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" style=\"height: 20px;\">\n" +
    "    </div>\n" +
    "    <div class=\"row\" id=\"main_container_body\" >\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <tabset justified=\"true\">\n" +
    "                <tab heading=\"Justified\">Justified content</tab>\n" +
    "                <tab heading=\"SJ\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <p>Short Labeled Justified content</p>\n" +
    "                            <button class='btn btn-danger' ng-click=\"addAlert('danger')\">Add Alert</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "                <tab heading=\"Long Justified\">Long Labeled Justified content</tab>\n" +
    "            </tabset>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"row\" id=\"first\">\n" +
    "                <div class=\"form-group has-error\">\n" +
    "                    <label class=\"control-label\" for=\"inputError\">Input error</label>\n" +
    "                    <input type=\"text\" ng-model=\"bootty\" class=\"form-control\" id=\"inputError\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\" id=\"second\">\n" +
    "                <form class=\"bs-component\" role=\"form\" ng-submit=\"getResults()\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"text\" ng-model=\"input_url\" name=\"url\" class=\"form-control\" id=\"url-box\" placeholder=\"Enter URL...\" style=\"max-width: 300px;\">\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div id=\"results-bootty\" ng-repeat=\"entry in res track by $index\">\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                          <div class=\"bs-component\">\n" +
    "                              <div class=\"alert alert-dismissable alert-success\">\n" +
    "                                <button type=\"button\" class=\"close\" ng-click=\"closeAlerts($index)\" data-dismiss=\"alert\">&times;</button>\n" +
    "                                <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">{{entry}}</a>.\n" +
    "                              </div>\n" +
    "                          </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"row\" > <!--ng-controller=\"AlertDemoCtrl\"-->\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <p>\n" +
    "                        <button class='btn btn-success' ng-click=\"addAlert('success')\">Add Alert</button>\n" +
    "                    </p>\n" +
    "                    <button class='btn btn-danger' ng-click=\"addAlert('danger')\">Add Alert</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-8 offset 4\">\n" +
    "                    <div id=\"papa\">\n" +
    "                        <alert ng-repeat=\"alert in alerts\" type=\"alert.type\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"well bs-component\">\n" +
    "                <table class=\"table table-striped table-hover \">\n" +
    "                    <thead>\n" +
    "                        <th>#</th>\n" +
    "                        <th>Color</th>\n" +
    "                        <th>Type</th>\n" +
    "                        <th>Count</th>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr class=\"warning\" ng-Repeat=\"row in rows\" ng-controller=\"HomeCtrl\">\n" +
    "                            <td>{{row.id}}</td>\n" +
    "                            <td>{{row.color}}</td>\n" +
    "                            <td>{{row.type}}</td>\n" +
    "                            <td>{{row.count}}</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"well bs-component\">\n" +
    "                <div class=\"row\" ng-controller=\"CameraController\">\n" +
    "                    <!--div class=\"col-md-6\"-->\n" +
    "                        <!--Full backgroud via css in variables.less-->\n" +
    "                        <!--video id=\"bgvid\" autoplay ng-show=\"show\"></video>\n" +
    "                    <!--/div-->\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <video id=\"bgvid\" autoplay ng-show=\"show\"></video>\n" +
    "                        <p>\n" +
    "                            <button class='btn btn-danger' ng-click=\"updateSize()\">Resize</button>\n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                            <button class='btn btn-danger' ng-click=\"hideVideo()\">Hide/Show Video</button>\n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                            <button class='btn btn-danger' ng-click=\"stopPlayVideo()\">Stop/Play Video</button>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"form-group has-error\">\n" +
    "                            <label class=\"control-label\" for=\"inputH\">Input Height</label>\n" +
    "                            <input type=\"text\" ng-model=\"h\" class=\"form-control\" id=\"inputH\">\n" +
    "\n" +
    "                            <label class=\"control-label\" for=\"inputW\">Input Width</label>\n" +
    "                            <input type=\"text\" ng-model=\"w\" class=\"form-control\" id=\"inputW\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
