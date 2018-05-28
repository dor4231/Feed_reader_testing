/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function() {
            allFeeds.forEach(function(rss) {
                expect(rss.url).toBeDefined();
            })
        });


        /* in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
            allFeeds.forEach(function(rss) {
                expect(rss.name).toBeDefined();
            })
        });
    });

    describe("The menu", function() {

        /* hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('slide menu is hidden at start up', function() {
            var body = document.querySelector('body');

            expect(body.classList).toContain('menu-hidden');
        });

         /* visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('menu hidden toggle is working.', function() {
            var body = document.querySelector('body');
            var burgerIcon = document.querySelector('.menu-icon-link');

            burgerIcon.click();
            expect(body.classList).not.toContain('menu-hidden');
            burgerIcon.click();
            expect(body.classList).toContain('menu-hidden');
        });

    });

    describe("Initial Entries", function() {


        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* Test that ensures when the loadFeed function is called
         * and completes its work, there is at least a single
         * .entry element within the .feed container. Remember,
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done()
         * function.
         */
        it('loadFeed function called and function well', function() {
            var feed = document.querySelector('.feed');
            var numOfEnteries = feed.getElementsByClassName('entry').length;

            expect(numOfEnteries).toBeGreaterThan(0);
        });

    });

    describe("New Feed Selection", function() {


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
