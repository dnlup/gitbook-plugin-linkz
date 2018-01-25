require(['gitbook', 'jQuery'], function (gitbook, $) {
  var links
  var insertLinks = function (links) {
    for (var i = 0; i < links.length; i++) {
      var icon = links[i].icon || 'fa fa-edit'
      var label = links[i].label || ''
      var url = links[i].url || '/'
      $('div.font-settings').after('<a class="links-link btn ' + icon + ' pull-left" href="' + url + '">&nbsp;&nbsp;' + label + '</a>')
    }
  }

  gitbook.events.bind('start', function (e, config) {
    links = config.links.links || []
  })

  gitbook.events.bind('page.change', function () {
    insertLinks(links)
  })
})
