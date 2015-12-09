SwiperComponent = React.createClass({
  getDefaultProps: function () {
    return {
      options:             {},
      swiperIsInitialized: function () {},
    }
  },

  propTypes: {
    options:             React.PropTypes.object,
    swiperIsInitialized: React.PropTypes.func,
  },

  componentDidMount(){
    let {options, swiperIsInitialized} = this.props

    this.swiper = new Swiper(ReactDOM.findDOMNode(this), options)
    this.props.swiperIsInitialized(this.swiper)
  },

  shouldComponentUpdate(nextProps, nextState){
    if( _.isNumber(nextProps.activeIndex) ){
      this.swiper.slideTo( nextProps.activeIndex )
    }

    return true;
  },

  render(){
    let {options, swiperIsInitialized, children, ...other} = this.props

    return (
      <div className="swiper-container" {...other}>
        <div className="swiper-wrapper">
          {
            React.Children.map(
              children,
              function (c) { return <div className='swiper-slide'>{c}</div> }
            )
          }
        </div>
      </div>
    )
  }
})
