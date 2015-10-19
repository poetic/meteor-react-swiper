SwiperComponent = React.createClass({
  propTypes: {
    options: React.PropTypes.object,
    styles: React.PropTypes.object
  },


  componentDidUpdate(){
    console.log( "Update occurred" );
    new Swiper(this.getDOMNode(),(this.props.options || {}));
  },

  componentDidMount(){
    console.log( 'mounted' );
    new Swiper(this.getDOMNode(),(this.props.options || {}));
  },

  render(){
    let children = React.Children.map( this.props.children, (c) => {
      return <div className='swiper-slide'>{c}</div>;
    });
    let style = this.props.style;

    return (
      <div style={ style } className="swiper-container">
        <div className="swiper-wrapper">
          {children}
        </div>
      </div>
    );
  }
});
