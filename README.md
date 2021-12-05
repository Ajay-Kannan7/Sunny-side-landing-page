# Sunny-side-landing-page
This is a landing page named Sunny side.
This landing page has been created using HTML, CSS flexbox, Boostrap 3 and Javascript basic DOM manipulation.
Things I learned whilst designing this landing page.

### Javascript DOM manipulation
i) Used basic selectors for Javascript DOM, such as
```
  document.querySelector();
```
ii) Toggled between attributes using as,
```
  element.setAttribute('attribute','attribute name');  //Sets the attribute for the selected element
  element.getAttribute('attribute'); // Gets the attribute of the selected element
```
### Bootstrap Navigation bar
The following code snippet is used for a navigation bar which is responsive and collapsible.
```
    <nav class="navbar navbar-default" id="nav">
        <div class="container-fluid school-options-dropdown text-center">
            <div class="navbar-header">
                <button class="navbar-toggle change" data-toggle="collapse" data-target="#dropdown">
                    <span></span>
                </button>
                <a class="navbar-brand" href="#">sunnyside</a>
            </div>
            <div class="collapse navbar-collapse navbar-right" id="dropdown">
                <ul class="nav navbar-nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#" class="btn btn-default btn-rounded">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </nav>
```
## Desktop design

## Mobile Design

## Live Site URL
