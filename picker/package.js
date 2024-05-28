Package.describe({
  name: 'quave:picker',
  summary: 'Server Side Router for Meteor',
  version: '1.2.0',
  git: 'https://github.com/quavedev/meteor-packages',
  documentation: 'README.md',
  deprecated: false,
});

Npm.depends({
  'path-to-regexp': '6.2.2',
});

function configurePackage(api) {
  api.versionsFrom(['2.12', '3.0-rc.2']);
  api.use(['webapp', 'ecmascript', 'url'], 'server');
}

Package.onUse(function (api) {
  configurePackage(api);
  api.mainModule('lib/instance.js', 'server');
});

Package.onTest(function (api) {
  configurePackage(api);
  api.use('communitypackages:picker', 'server');
  api.use(['tinytest', 'fetch', 'random'], 'server');
  api.mainModule('test/instance.js', 'server');
});
