;(function() {

    angular
        .module('demo')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['CONSTANTS', '$scope', 'NewsService', '$sce'];

    function HomeController(CONSTANTS, $scope, NewsService, $sce) {
        var home = this;
        home.init = init;
        home.data = NewsService.data;
        home.bindHtml = bindHtml;
        home.addArticle = addArticle;
        home.loadArticle = loadArticle;
        home.clearSearch = clearSearch;
        home.filterCategory = filterCategory;
        home.readLaterFilterFunction = readLaterFilterFunction;
        home.selectedArticle = undefined;

        function readLaterFilterFunction(item) {
            if (home.data.readLaterFilter === true) {
                return item.readLater === true;
            }

            return true;
        }


        function filterCategory(category, readLaterFilter) {
            home.data.filter = category;

            if (readLaterFilter) {
                home.data.readLaterFilter = readLaterFilter;
            } else {
                home.data.readLaterFilter = false;
            }
        }

        function clearSearch() {
            home.search = "";
        }

        function loadArticle(event, hash) {
            var articleIndex = _.findKey(home.data.frontPage, {'hash': hash}),
                article = home.data.frontPage[articleIndex];

            NewsService.loadArticle(article.url);
        }

        function addArticle(event, hash) {
            event.stopPropagation();

            var articleIndex = _.findKey(home.data.frontPage, {'hash': hash}),
                article = home.data.frontPage[articleIndex];

            if (_.findKey(home.data.readLater, {'hash' : hash}) === undefined) {
                article.readLater = true;
                home.data.readLater.push(article);
            } else {
                var readIndex = _.findKey(home.data.readLater, {'hash': hash});
                article.readLater = false;
                home.data.readLater.splice(readIndex, 1);
            }
        }

        function bindHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function init() {
            NewsService.feed('mock-data/front-page/front.json');
        }

        home.init();
    }
})();
