## Install
[Swiper js](http://www.idangero.us/swiper/) wrapped into a react component.
```
meteor add poetic:react-swiper
```

## Example
```
<SwiperComponent
  options={this.swiperOptions}
  swiperIsInitialized={this.swiperIsInitialized}>

  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>

</SwiperComponent>
```

## Props
- **options**, the options are passed to Swiper directly.
- **swiperisinitialized(swiperInstance)**, you can get the swiper instance by pass in ths callback.
- other props are passed directly to the Swiper div.
