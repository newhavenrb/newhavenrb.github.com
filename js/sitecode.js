$(document).ready( function () {
    $.jGFeed('http://groups.google.com/group/newhavenrb/feed/atom_v1_0_msgs.xml',
             function(feeds){
                 if(!feeds){
                     return false;
                 }

                 $.each(feeds.entries, function (index,feed) {
                     var markup, template;

                     template = '<li><a href="{{link}}" class="post-title">{{title}}</a>';
                     template += ' &larr; Posted by <span class="post-author">{{author}}</span></li>';

                     $("#google-groups-posts").append(Mustache.to_html(template, feed));
                 });
             }, 6);
});
