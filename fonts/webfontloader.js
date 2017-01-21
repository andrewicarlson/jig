/**
This jig is a state-in-time example from January 2017 of the webfontloader project.

Learn more by reading about the project developed by Google and Typekit here: https://github.com/typekit/webfontloader
**/

WebFontConfig = {
    typekit: { id: 'xxxxxx' }
};

(function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);
