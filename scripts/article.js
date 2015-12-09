function Article (props) {
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.title = props.title;
  this.category = props.category;
  this.markdown = props.markdown;
  this.body = props.body || marked(this.markdown);
  this.publishedOn = props.publishedOn;
}

Article.prototype.toHtml = function() {
  var sourceText = $('#article-template').text();
  var template = Handlebars.compile(sourceText);

  this.daysAgo =
   parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);

  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.authorSlug = util.slug(this.author);
  this.categorySlug = util.slug(this.category);

  return template(this);
};
