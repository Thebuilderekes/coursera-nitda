## attribute selector

you can target a specific element using the attribute selector.
for example you have 3 anchor link elements all but one haveing a class:

```
<a class="home" href="/home"></a>

<a class="about" href="/about"></a>

<a href="/contact"> </a>
```

using the attribute selector `a[class]` in the css, you can target the home and about links, leaving the contact list out because it does not have a class attribute set on it.

## Pseudoclasss for links

pseudo classes for the state of links have to be used in the right order IN A CSS FILE. This is the order:

LVHA
:link
:visited
:hover
:active

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
https://www.geeksforgeeks.org/10-css-selectors-every-developer-should-know/
https://www.w3schools.com/cssref/css_selectors.asp

## CSS effects

Pros

- Attracts attention

Cons
Excess of it can be distracting

### Types of text effects

- text-overflow: ellipses. used for ... effect at the end of text to show that ther're more to the text
- text clip property
- writing mode: vertical-rl - used to flip text vertically on screen


 ##CSS animations

 ``
 @keyframe animationname {
   from {color:blue}
   to {color red}
 }

to set the animation to be used as a property in CSS you can use the animation rule like this:

animation : animationname duration timing-function
 ``
 Default timing function value is ease. To make an animation to move ata aconstant speed, change the default timing function toto linear

https://www.lambdatest.com/blog/css-transforms-and-transitions-property/
https://www.opendesignsin.com/blog/10-web-design-effects-to-enhance-your-website/
https://www.w3schools.com/css/css3_animations.asp
 https://dev.to/kiranrajvjd/simple-text-effects-using-css-3dgp
https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
https://freefrontend.com/css-animation-examples/
https://freefrontend.com/css-typing-text/
https://goingclear.com/website-effects


##Browse more best practices for writing CSS

- Use style linter extensions link stylelint to help check for errors in your CSS file.

### How to use style lint
* Step 1: download and instalkl style lint extenstion
* Step 2: Ensure it is enabled
Once installed, the button will be replaced by the ‘Disable’ and ‘Uninstall’ button.
If you see ‘Enable’ instead of ‘Disable’, click on ‘Enable’ and make sure the extension is enabled. 
* Step 3: Create and add a file called ‘.stylelinttrc.json’ to your project directory
The extension will look for this file inside any project folder you are working with. 
Add the rules in JSON object format as below, these are the same as the ones you used in ‘Handling errors

``
{ 
"rules": { 

        "alpha-value-notation": "number", 
        "selector-type-case": "lower", 
        "color-no-hex": true 
}

} 
``
These are just a few rules as you can add more rules to the file.

- overspecificity can slow down browser
- When you miss a semi colon in css everything before the line that has the missed semi colon works with teh exception of the line just imediately after the mistake.


### Browser specific issues
Use CSS resets for all stylesheets
Find out the possible differences in differences between browsers in terms of using CSS animations and theircompatibilty between browsers.
- media query settings


## UI testing strategies
Cross device testing - most commonly used
Visual regression testing - read up on this
Automated user acceptance testing - read up on this





