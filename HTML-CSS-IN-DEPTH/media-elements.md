## Video and audio

video and audio tags support various file types. mp3 wav, OGG for audio, MP4, wav, OGG. for vvideo add type attribute to specify type.

how is the video tag used:
``
<video width='320' height="500" controls>

<source src="dance.mp4" type ="video/mp4">
</video>
``

How the audio tag is used:
``
<audio controls>

<source src="sing.mp3" type = ""audio/mp3">
</audio>
``

```
  <video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
  </video>

  <form>
    <div>
      <label for="rating">Rating</label>
      <input type="range" min="1" max="5" id="rating" name="rating" list="ratings">
      <datalist id="ratings">
          <option value="1" label="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5" label="5"></option>
      </datalist>
    </div>
    <button type="submit">Submit Rating</button>
  </form>

```

form the form above, note the following:

The video element has a controls attribute to enable the video player controls (pause, volume, timeline, and so on).

The video element contains a source element. The source element has a src attribute which specifies the video file to be played. It also has a type attribute to specify the video type, in this case it is an MP4 file.

The input type for the rating is set to range. This will present a slider in the web browser. The min attribute is set to 1 and the max attribute is set to 5. The default range is 0 to 100 so these attributes need to be set so that the slider range matches the datalist.

The range input has a list attribute set to ratings. This matches the id attribute of the datalist element below the input element.

The datalist element contains the possible slider value and the corresponding label to display. When no label is specified for a value, no label will display on the slider for that value.

## IFrame

iFrames is used to embed content from another webpage into a website. Because iframes have the tendency to be vulnrable to security threaths you can set attributes in a way to prevent these security threats using the allow attribrute and the sandbox attribute. It is generally adviceable NOT to use iframe unless you trust the website that you are embedding.

key points

- You can use the allow attribute to limit which browser features the iframe can access.
- The sandbox attribute can prevent files from being downloaded.
- Recommend that iframes are not used.

### Read up more about how to securely use an iframe

_KEY iframe ATTRIBUTES INCLUDE_: sandbox, allow, loading, title, height, width, name, allow

This is an example of security on an iframe with sandbox allow attribute;
``

<iframe src=".../pathtourl" sandbox allow ="payment 'none'; camera 'none'; microphone 'none'" ></iframe>
``

##Canvas element

Read about gif, webp, 2D canvas, webGL

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
https://html.com/media/
https://html.spec.whatwg.org/multipage/media.html
https://www.educba.com/iframes-in-html/
https://www.tutorialrepublic.com/html-tutorial/html5-canvas.php
