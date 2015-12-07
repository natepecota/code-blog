$(document).ready(function(){
  blog.sortRawData();
  blog.createArticles();
});

$(function() {
  blog.truncateArticles();
});

$(function() {
  blog.revealArticles();
});

$(function() {
  blog.filterArticles();
});

$(function () {
  blog.makeTabsWork();
});
