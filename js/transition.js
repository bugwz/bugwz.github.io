$(function () {
  // page
  $('.layout').velocity('stop')
    .velocity('transition.slideUpIn', {
      delay: 0,
      duration: 0,
      easing: 'easeInOutQuart',
      complete: function () {
        if ($('.sidebar-toc').length > 0) {
          setTimeout(function () {
            $('#toggle-sidebar').click()
          }, 200)
        }
      }
    })
  $('#top-container').velocity('stop')
    .velocity('transition.fadeIn', {
      delay: 0,
      duration: 0,
      easing: 'easeInOutQuart'
    })
})
