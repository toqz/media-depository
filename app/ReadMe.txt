SiteMap

Description: I want to create an app that simply and effective records the media I consume. So a good example is Goodreads. That app allows you to indicate what books you've read (and rate and review them), and what books you plan on reading. I'd like that same functionality, but for books, music, movies, magazine articles, blogposts and online articles, etc. If you download Goodreads and search for a book, it'll give you all the info for that book, including a cover image.
Scope: books, music, movies, magazine articles, blogposts and online articles

My Media Page
-------------

  // Media are arranged in tabs based on media types
  Media types: 
    books / Movie / TV / Music
  Media Properties:
    Books: Cover / Author / rating / date consumed / date added / source / action
    Movie: Cover(imdb link) / Cast / rating / date consumed / date added / source / action
    TV : Cover(tv.com link) / Cast / rating / date consumed / date added / source / action
    Music : Singer / Genre / rating / date consumed / date added / source / action


Search Media Page
-------------
  
  // Search from sources (imdb / google / spotify / netflix / tv.com) api
  1. render view with data binding and stuff. (cannot use tab ui as it creates another scope for models)
  2. Search button updates model that then updates view.
    - limit search to parameters( media type, count) 



<!-- Media Data -->
src: src,
idKey: 'imdb_id',
idVal: v.imdb_id,
title: v.title,
url: v.imdb_url,
poster: v.poster 


<!-- Google search API -->

    * Def: Google search API
    * Reference: https://developers.google.com/books/docs/v1/reference/volumes/list#try-it
    * Response :
        
        accessInfo: Object
          accessViewStatus: "SAMPLE"
          country: "SG"
          embeddable: true
          epub: Object
          pdf: Object
          publicDomain: false
          textToSpeechPermission: "ALLOWED"
          viewability: "PARTIAL"
          webReaderLink: "http://books.google.com/books/reader?id=ULQbOUx_MiAC&hl=&printsec=frontcover&output=reader&source=gbs_api"
        etag: "N85WdHu30aw"
        id: "ULQbOUx_MiAC"
        kind: "books#volume"
        saleInfo: Object
          country: "SG"
          isEbook: false
          saleability: "NOT_FOR_SALE"
        searchInfo: Object
          textSnippet: "The novel details the descent into near-starvation of a young intellectual and the downward spiral of misadventures he encounters in the course of trying to find food.
        selfLink: "https://www.googleapis.com/books/v1/volumes/ULQbOUx_MiAC"
        volumeInfo: Object
          authors: Array[1]
            0: "Knut Hamsun"
          averageRating: 3.5
          canonicalVolumeLink: "http://books.google.com/books/about/Hunger.html?hl=&id=ULQbOUx_MiAC"
          categories: Array[1]
            0: "Fiction"
          contentVersion: "preview-1.0.0"
          description: "A must-read for fans of modernist literature, Hunger is a literary tour de force that was influenced equally by Dostoyevsky and Zola but made new by author Knut Hamsun's unique creative approach. The novel details the descent into near-starvation of a young intellectual and the downward spiral of misadventures he encounters in the course of trying to find food."
          imageLinks: Object
            smallThumbnail: "http://bks7.books.google.com/books?id=ULQbOUx_MiAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
            thumbnail: "http://bks7.books.google.com/books?id=ULQbOUx_MiAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          industryIdentifiers: Array[2]
            0: Object
              identifier: "1775419509"
              type: "ISBN_10"
            1: Object
              identifier: "9781775419501"
              type: "ISBN_13"
          infoLink: "http://books.google.com/books?id=ULQbOUx_MiAC&dq=hunger&hl=&source=gbs_api"
          language: "en"
          pageCount: 282
          previewLink: "http://books.google.com/books?id=ULQbOUx_MiAC&printsec=frontcover&dq=hunger&hl=&cd=1&source=gbs_api"
          printType: "BOOK"
          publishedDate: "2010"
          publisher: "The Floating Press"
          ratingsCount: 37
          title: "Hunger" 

<!-- End: Google search API -->


<!-- IMDB search API -->

    * Def: IMDB search API
    * Reference: http://mymovieapi.com/
    * sample: http://mymovieapi.com/?title=hunger&type=json&plot=simple&episode=1&limit=1&yg=0&mt=none&lang=en-US&offset=&aka=simple&release=simple&business=0&tech=0
    * response key: "value", 
        0: Object
          actors: Array[14]
          also_known_as: Array[1]
          country: Array[1]
          directors: Array[1]
          filming_locations: "Santiago, Cuba"
          genres: Array[2]
          imdb_id: "tt1466568"
          imdb_url: "http://www.imdb.com/title/tt1466568/"
          language: Array[2]
          plot_simple: "The relationship between Eric and Stephanie is floundering. They decide to leave for the Republic of Santiago to visit the famous ruins. Once there, they learn that a serial killer rages on steep roads of the region, eliminating drunk drivers."
          rated: "R"
          rating: 5.4
          rating_count: 135
          runtime: Array[1]
          title: "Angle mort"
          type: "M"
          writers: Array[1]
          year: 2011

<!-- END: IMDB search API -->


Implement this
--------------
1. Use filter called on service instead of $helper to format data.
2. Put helper methods on app.run via rootscope.
3. Use rout.resolve to laod initial data.
4. Use scope.$apply to init 3rd party library.
5. inject 3rd party library on app.run via rootscope
6. Use factory instead of service for data.

Directive format
----------------
App.directive('myDirective', ['$location', function($location) {

  return {
    restrict : 'ECA', //Element, Comment and Attribute instances are all scanned
    scope : {
      //these values will be apart of the scope variable passed into the link method
      key : 'value',
      key2 : 'value2'
    },
    compile : function() {
      return {
        pre : function() { ... }, //this is called before the directive element is attached to the DOM
        post : function() { ... } //this is called after the directive element is attached to the DOM (same as link)
      };
    },
    link : function(scope, element, attrs, controllerObject) {
      //this is what is normally used and is the same as the compile:post function.
    }
  };

}]);