Package.describe({
  name: 'poetic:react-swiper',
  version: '0.0.4',
  summary: 'React-swipe npm package exposed on meteor client',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use([
    'react@0.1.13',
    'jquery@1.11.4',
    'nolimits4web:swiper@3.1.7'
  ]);

  api.add_files([
    'swiper.jsx'
  ],'client');

  api.export('SwiperComponent');
});
