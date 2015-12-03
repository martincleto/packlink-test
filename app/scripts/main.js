( function($){

  var packlinkTest;

  function PacklinkTest() {

    //DOM
    this.$pageHeader = $( '.page-header' );
    this.$navigationToggleButton = $( '.page-header__navigation-toggle' );

    this.bindEvents();
  }


  PacklinkTest.prototype.bindEvents = function() {
    var self = this;

    this.$navigationToggleButton.on( 'click', function(){
      self.$pageHeader.toggleClass( 'page-header--expanded' );
    } )
  };

  packlinkTest = new PacklinkTest;

} )(jQuery);
