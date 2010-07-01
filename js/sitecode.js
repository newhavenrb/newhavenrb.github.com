$(document).ready( function () {
    $.jGFeed('http://groups.google.com/group/newhavenrb/feed/atom_v1_0_msgs.xml',
             function(feeds){
                 if(!feeds){
                     return false;
                 }
                 $.each(feeds.entries, function (index,feed) {
                     var markup = "<li>";
                     markup += '<a href="' + feed.link + '" class="post-title">' + feed.title + "</a>";
                     markup += ' &larr; Posted by ';
                     markup += '<span class="post-author">' + feed.author + "</span>";
                     markup += "</li>";
                     $("#google-groups-posts").append(markup);
                 });
             }, 6);
});