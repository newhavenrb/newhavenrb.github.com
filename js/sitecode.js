var nhvsite = {};
nhvsite.templates = {};
nhvsite.templates.gg_post = function gg_post() {
    var template;
    template = '<div><a href="{{link}}" class="post-title">{{title}}</a>';
    template += ' <div class="post-author">{{author}}</div></div>';
    return template
};

nhvsite.templates.twitter_post = function twitter_post() {
    var template;
    template = '<div><a href="{{link}}" class="tweet-title">{{title}}</a>';
    template += ' <div class="tweet-author">{{author}}</div></div>';
    return template
};

nhvsite.utils = {};
nhvsite.utils.rss = function rss(url, template, destination, entries) {
    $.jGFeed(url,
             function (feeds) {
                 if (!feeds) {
                     return false;
                 }

                 $.each(feeds.entries, function (index,feed) {
                     destination.append(Mustache.to_html(template, feed));
                 });
             }, 6);
};

$(document).ready( function () {
    // Google Groups
    nhvsite.utils.rss('http://groups.google.com/group/newhavenrb/feed/atom_v1_0_msgs.xml',
                      nhvsite.templates.gg_post(),
                      $("#google-groups-posts"),
                      6);
    // Twitter
    nhvsite.utils.rss('http://twitter.com/statuses/user_timeline/18841573.rss',
                      nhvsite.templates.twitter_post(),
                      $("#twitter-posts"),
                      6);
    // HA!
    $(window).konami( function () {
        var markup = '<div class="konami"><p>RUBY</p>';
        markup += '<p class="secret"><code>Level.unlock(:bonus => "konami")</code></p>';
        markup += '</div>'
        $("#page").fadeOut();
        $("body").append(markup);
        setTimeout(function () { $(".konami").fadeIn(); }, 1500);
    });
});
