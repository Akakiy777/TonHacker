jQuery(document).ready(function(){
    jQuery(".lopy").on('click',function(){
        var lol3 = ['marginheight','scrolling','checkbox','cellpadding','blockquote','bgcolor','canvas','colgroup','embed','fieldset','iframe']
        var kol = Math.floor(Math.random() * (9 - 0) + 0)
        var lol2 = lol3[kol]
        alert(lol2);
    });
});