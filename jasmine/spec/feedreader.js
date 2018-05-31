/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* Make sure that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Ensures allFeeds has a URL defined and that the URL
         * is not empty.
         */
        it('urls are defined', function () {
            allFeeds.forEach(function (rss) {
                expect(rss.url).toBeDefined();
            })
        });


        /* Ensures allFeeds has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function () {
            allFeeds.forEach(function (rss) {
                expect(rss.name).toBeDefined();
            })
        });
    });

    describe("The menu", function () {

        /* Test side menu is hidden by default.
         */
        it('slide menu is hidden at start up', function () {


            expect($( "body" ).hasClass( "menu-hidden" )).toBe(true);
        });

        /* Test the visibility when the menu icon is clicked.
         */

        it('menu hidden toggle is working.', function () {
            var body = $('body');
            var burgerIcon = document.querySelector('.menu-icon-link');

            burgerIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            burgerIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });

    describe("Initial Entries", function () {


        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /* Test that ensures when the loadFeed function is called
         * and completes its work, there is at least a single
         * .entry element within the .feed container.
         */
        it('loadFeed function called and function well', function () {
            expect($('.feed .entry')).toBeDefined();
        });

    });

    describe("New Feed Selection", function () {

        var prevFeedData, newFeedData;

        beforeEach(function (done) {
            firstEntryFromFirstFeed =
            loadFeed(0, function () {
                prevFeedData = document.querySelectorAll('.feed .entry');
                loadFeed(2, function() {
                    newFeedData = document.querySelectorAll('.feed .entry');
                    done();
                })
            });
        });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('feed is changing when switching source', function () {
            for (const pervEntry of prevFeedData) {
               for (const newEntry of newFeedData ) {
                   expect(pervEntry.innerText).not.toBe(newEntry.innerText);
               }
            }

        });

    });
}());
