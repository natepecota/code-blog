var stats = {};
stats.uniqueAuthors = [];
stats.markdownWordCouts = [];
stats.allWordsArray = [];
stats.eachAuthorWords = [];

stats.getAllArticles = function(rawJSON) {
  stats.allArticles = rawJSON;
};

stats.numberOfArticles = function() {
  var articleCount = stats.allArticles.length;
  $('#main').append('<p> Number of Articles: ' + articleCount + '</p>');
};

stats.searchArticles = function() {
  var getAuthors = function(art) {
    if($.inArray(art.author, stats.uniqueAuthors) === -1) {
      stats.uniqueAuthors.push(art.author);
    }
  };
  stats.allArticles.map(getAuthors);
};

stats.numberOfAuthors = function() {
  var authorCount = stats.uniqueAuthors.length;
  $('#stats').append('<p>Number of Authors ' + authorCount + '</p>');
};

stats.wordCount = function(str) {
  return str.replace(/[#,\n]/g, ' ').match(/\b\w+/g);
};

stats.totalWordCount = function() {
  var allWords = function(art) {
    stats.markdownWordCouts.push(stats.wordCount(art.markdown).length);
  };
  stats.allArticles.map(allWords);
  stat.blogWordCount = stats.markdownWordCouts.reduce(getSum, 0);
  $('#stats').append('<p>Number of Words in All Articles ' + stats.blogWordCount + '</p>');
};






// //stats object
// var stats = {};
// var statData = '';
// var authorList = [];
//
// //Ajax call
// stats.getData = function () {
//  $.getJSON('scripts/hackerIpsum.json', function(data) {
//    statData = data;
//  }).done(numberOfArticles);
//   //  .done(numberOfAuthors);
// };
// function numberOfArticles() {
//   return ('#stats').html('<p>Number of Articles ' + statData.length + '</p>');
// }
//
// stats.getData();







// var stats = {};
// ​
// $.get('scripts/hackerIpsum.json', function(data) {
//   stats.data = data; //this saves the entire json file as an array that belongs to your stats object, that you can access anywhere
// }).done(stats.numberOfArticles)
//   .done(stats.numberOfAuthors);
// };
// ​
// $(function() {
//   stats.data.forEach( function(article) {
//     words = article.body.split(" ")
// 	console.log(words)
//   })
// });









// $(function() {
//
//   // functional core
//
//   // returns a specified property from a collection of objects
//   // in ES2015, it's even shorter: return collection.map(e => e[property])
//   function pluck(property, collection) {
//     return collection.map(function(e){
//       return e[property];
//     });
//   }
//
//   // return an array with unique elements
//   // this isn't efficient for sorted arrays, but whatevs
//   function unique(collection) {
//     // ternary operator to guard for empty collection
//     var length = collection ? collection.length : 0;
//
//     if (!length) { return []; }
//
//     var seen = [];
//     collection.forEach(function(e) {
//       if ( seen.indexOf(e) < 0 ) { seen.push(e); }
//     });
//     return seen;
//   }
//
//   // compose two functions together
//   function compose(func1, func2) {
//     return function() {
//       return func1(func2.apply(null, arguments));
//     };
//   }
//
//   var distinct = compose(unique, pluck);
//
//   // TODO do something useful with reduce and filter
//
//   // jquery render functions (IO)
//   var $headline = $('<h1>Stats</h1>');
//
//   function $numberOfArticles(articles) {
//     return $('<p>Number of articles: ' + articles.length + '</p>');
//   }
//
//   function $numberOfAuthors(articles) {
//     var numAuthors = distinct('author', articles).length;
//     return $('<p>Number of authors: ' + numAuthors + '</p>');
//   }
//
//   function $numberOfWords(articles) {
//     var numWords = $.forEach()
//     })
//     return $('<p>Number of words: ' + numWords + '</p>');
//   }
//
//   var $statsComponent = function(blog) {
//     var component = $('<div>');
//     component.append([
//       $headline,
//       $numberOfArticles(blog),
//       $numberOfAuthors(blog),
//       $numberOfWords(blog)
//     ]);
//     return component;
//   };
//
//   function renderStats(blog) {
//     $('#stats').replaceWith($statsComponent(blog));
//   }
//
//   function renderError(message, xhr) {
//     $('#stats').replaceWith($('<p>Error: <code>' + message + xhr + '</code></p>'));
//   }
//
//   // imperative shell
//
//   function stats(data, message, xhr) {
//     if (xhr.status != 200) {
//       renderError(message, xhr);
//     } else {
//       renderStats(data);
//     }
//   }
//
//   $.getJSON('scripts/hackerIpsum.json', stats);
//
// });
