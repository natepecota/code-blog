var Article = function(props) {
  this.title = props.title;
  this.category = props.category;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.body = props.body;
};

Article.prototype.toHTML = function() {
  var $art = $('article').first().clone();
  $art.find('.title').html(this.title);
  $art.find('.author').html(this.author);
  $art.find('.body').html(this.body);
  $art.find('.category').html(this.category);
  $art.find('.publishedOn').html(this.publishedOn);
  $art.find('.authorUrl').html(this.authorUrl);
  $('main').append($art);
};

Article.prototype.createFilters = function() {
  var $authorMenuItemClone = $('.authorMenuItem').clone();
  $authorMenuItemClone.removeAttr('class');
  $authorMenuItemClone.attr('value', this.author);
  $authorMenuItemClone.text(this.author);
  if ($('#authorSelect').find('option[value="' + this.author + '"]').length === 0) {
    $('#authorSelect').append($authorMenuItemClone);
  }
  var $catMenuItemClone = $('.catMenuItem').clone();
  $catMenuItemClone.removeAttr('class');
  $catMenuItemClone.attr('value', this.category);
  $catMenuItemClone.text(this.category);
  if ($('#catSelect').find('option[value="' + this.category + '"]').length === 0) {
    $('#catSelect').append($catMenuItemClone);
  }
};
