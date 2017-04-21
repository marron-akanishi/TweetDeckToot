var script = document.createElement('script');
var patch = "(function(){$('textarea').keydown(function(e){$('.js-in-reply-to.is-hidden').length!=0&&$('.icon-compose-dm.is-hidden').length!=0&&e.ctrlKey&&e.keyCode==13&&$(('.toot')).trigger('click')})})()"
script.appendChild(document.createTextNode(patch));
document.body.appendChild(script);
setTimeout(patch,3000)
