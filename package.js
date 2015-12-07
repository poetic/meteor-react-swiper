Package.describe({
  name: 'poetic:react-swiper',
  version: '3.2.7-rc.2',
  summary: 'React-swipe npm package exposed on meteor client',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use([
    'react@0.1.14',
    'jquery@1.11.4',
    'nolimits4web:swiper@3.2.6'
  ]);

  api.add_files([
    'swiper.jsx'
  ],'client');

  api.export('SwiperComponent');
});
