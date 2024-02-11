### Tutorials
+ https://www.w3schools.com/html/default.asp
+ https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
+ https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
+ 1 - as first https://www.youtube.com/watch?v=a_iQb1lnAEQ
+ https://www.youtube.com/watch?v=qz0aGYrrlhU

# HTML - Hyper Markup Language
1.  ![alt text](htmlCssJs.jpg)
2. An HTML file can be opened by dropping it onto a web browser.
3.  HTML Tags - tag list: https://www.w3schools.com/TAGs/.  
The website is built from various elements. For a given element to work, we invoke it by opening it `"<TAG>"` and close `"</TAG>"` appropriate TAG. Some tags are self-closing.
4. `<!DOCTYPE HTML>` - every project should start with a document type declaration and `<html> </html>` and be closed with `</html>`
5. `<body> </body>` - is the visible part of the page that is located in **body**
6. `<header> </header>`- (headings) - from h1 (largest) to h6 (smallest). The `<header>` element represents a container for introductory content or a set of navigational links. Typical content: headings, logo/icon, authorship information. There can be many paragraphs in one HTML. But NO `<header>` is allowed in `<footer>`, `<address>` or another `<header>`
7. `<p> </p>` - paragraph
8. [`<img>`](https://www.w3schools.com/TAGs/tag_img.asp) - to embed an image, self-closing. `<img>` tag has two required attributes:
    + `src` (source) - Specifies the path to the image
    + good to specify width and height, if not page might flicker during image loads.
    + `alt` - Specifies an alternate text for the image, if the image for some reason cannot be displayed.    
    
    Example: `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`
9. [`<div>` `</div>`](https://www.w3schools.com/TAGs/tag_div.asp) (divider)- we use it for **nesting**. It is used as a container for section of code. Any kind of contetn can be put in `<div>`. It is useful for CSS and JS. By definiton, browser are plaxce line break before and after `<div>`.
10. [`<buton>`](https://www.w3schools.com/TAGs/tag_button.asp) -