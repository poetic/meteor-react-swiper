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

    let swiperInstance = new Swiper(ReactDOM.findDOMNode(this), options)
    this.props.swiperIsInitialized(swiperInstance)
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
