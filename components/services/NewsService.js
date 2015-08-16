;(function() {

  'use strict';

  angular
    .module('demo')
    .service('NewsService', NewsService);

    NewsService.$inject = ['$http', '$q', 'CONSTANTS'];

  function NewsService($http, $q, CONSTANTS) {
      var svc = this,
          time = moment();

      svc.data = {
          frontPage: [],
          frontPageFilters: [],
          movies: [],
          listStyle: 'grid',
          categories: CONSTANTS.CATEGORIES,
          readLater: [],
          filter: '',
          readLaterFilter: false
      }

      svc.loadArticle = function (url) {
          $http({
              method: 'GET',
              url: url
          }).then(function(data) {
              console.log(data);
          }, function(error) {
              console.log('Oh boy, something went wrong...');
          });
      }

      svc.feed = function (url, params, data) {
          $http({
              method: 'GET',
              url: url,
              params: params,
              data: data
          }).then(function(data) {
              if (!data.config) {
                  console.log('Server error occured.');
              }

              //Create unqiue hash ID for retrieval
              _.forEach(data.data.results, function(article) {
                  article.hash = createObjectHash(article.url + article.section + article.abstract);
                  article.timeAgo = createTimeAgo();
                  article.class = getClass(article.section);
                  if (article.media && article.media[0]['media-metadata']) {
                      _.forEach(article.media[0]['media-metadata'], function(image){
                          if (image.format === 'square320') {
                              if (article.image == undefined) {
                                  article.image = image.url;
                              }
                          }
                      });
                 }

                 if (article.image == undefined && article.multimedia) {
                     _.forEach(article.multimedia, function(image){
                         if (image.format === 'mediumThreeByTwo440') {
                             if (article.image == undefined) {
                                 article.image = image.url;
                             }
                         }
                     });
                 }
                  svc.data.frontPage.push(article);
              });

          }, function(error) {
              console.log('Oh boy, something went wrong...');
          });
      }

      svc.movies = function (url, params, data) {
          $http({
              method: 'GET',
              url: url,
              params: params,
              data: data
          }).then(function(data) {
              if (!data.config) {
                  console.log('Server error occured.');
              }

              //Create unqiue hash ID for retrieval
              _.forEach(data.data.results, function(article) {
                  article.hash = createObjectHash(article.display_title + article.headline);
                  svc.data.movies.push(article);
              });

          }, function(error) {
              console.log('Oh boy, something went wrong...');
          });
      }

      function createTimeAgo() {
          time = time.subtract((Math.floor(Math.random() * 10) + 1)  , 'minutes');
          return time.fromNow();
      }

      function getClass(clazz) {
          var clean = clazz.replace(/[^A-Z0-9]/ig, '');
          return clean.toLowerCase();
      }

      //Found on stackoverflow...don't have the url
      function createObjectHash(str) {
          var hash = 5381,
              i = 0,
              char = 0;

          for (i = 0; i < str.length; i++) {
              char = str.charCodeAt(i);
              hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
          }
          return Math.abs(hash);
      }
  }


})();
