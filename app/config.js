;(function() {

  angular
  	.module('demo')
    .constant('CONSTANTS', {
        'MOST_POPULAR_KEY': '9ac6fa66cd8c7b542a338ad57d3a912f:18:72661794',
        'MOST_POPULAR_URL': 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed',

        'MOVIE_REVIEWS_KEY': 'adc5fe6300d330fd51e0c9076d21a6fa:4:72661794',
        'MOVIE_REVIEW_URL': 'http://api.nytimes.com/svc/movies/v2/reviews',

        'TIMES_TAGS_KEY': 'dcc10560c4cf4048b83eb86d01e77cc5:16:72661794',
        'TIMES_TAGS_URL': 'http://api.nytimes.com/svc/suggest/v1/timestags',

        'TOP_STORIES_KEY': '05ae22dcfebb66b32273509b1041eebf:13:72661794',
        'TOP_STORIES_URL': 'http://api.nytimes.com/svc/topstories/v1',

        'TIMES_NEWSWIRE_KEY': '5722009392db4ea58e64a7b807b23041:7:72661794',
        'TIMES_NEWSWIRE_URL': 'http://api.nytimes.com/svc/news/v3/content',
        'CATEGORIES': ['arts', 'businessday', 'crosswordgames', 'fashionstyle', 'health', 'nyregion', 'opinion', 'science', 'sports', 'technology', 'theater', 'travel', 'us', 'world']
    });


})();
