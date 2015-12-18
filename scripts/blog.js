var blog = {};
blog.articles = [];

blog.sortRawData = function() {
  this.rawData.sort(function(a, b) {
    if (a.publishedOn > b.publishedOn) {return -1;}
    if (a.publishedOn < b.publishedOn) {return 1;}
  });
};

blog.createArticles = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var temp = new Article (blog.rawData[i]);
    this.articles.push(temp);
    temp.toHTML();
    this.articles[i].createFilters();
  }
  $('#template').remove();
};

blog.truncateArticles = function() {
  $('article p:not(:first-child)').hide();
  $('main').on('click', '.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('p').fadeIn('slow');
    $(this).hide();
  });
};

blog.revealArticles = function() {
  $('main').on('click', '.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('p').show();
  });
};

blog.filterArticles = function() {
  $('select[id="authorSelect"]').change(function() {
    $('.author').find('option:first').attr('selected', 'selected');
    $('article').show();
    if ($(this).val() !== 'none') {
      $('.author:not(:contains(' + $(this).val() + '))').parent().hide();
    }
  });

  $('select[id="catSelect"]').change(function() {
    $('.category').find('option:first').attr('selected', 'selected');
    $('article').show();
    if ($(this).val() !== 'none') {
      $('.category:not(:contains(' + $(this).val() + '))').parent().hide();
    }
  });
};

blog.makeTabsWork = function() {
  $('.nav-tabs > li > a').on('click', function (event) {
    event.preventDefault();
    var active_tab_selector = $('.nav-tabs > li > a').attr('href');
    var active_nav = $('.nav-tabs > li.active');
    var target_tab_selector = $(this).attr('href');
    active_nav.removeClass('active');
    $(this).parent('li').addClass('active');
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
  });
};
