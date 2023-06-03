
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kitten gallery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
   <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(93825308, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/93825308" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
  <h1>Милые котики онлайн бесплатно без регестрации и смс/h1>
  <div class="container">
    <img src="https://ferret-pet.ru/wp-content/uploads/a/6/2/a626730f755048695a64d7f4216bae00.jpeg" alt="kitten 1">
    <img src="https://ferret-pet.ru/wp-content/uploads/6/8/2/6821893976f37c36de01d60e2b225cca.jpeg">
    <img src="https://placekitten.com/200/150" alt="kitten 3">
    <img src="https://placekitten.com/200/150" alt="kitten 4">
    <img src="https://placekitten.com/200/150" alt="kitten 5">
    <img src="https://placekitten.com/200/150" alt="kitten 6">
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Code for `style.css`:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  margin: 10px;
  border: 5px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 5px #ddd;
}
```

Code for `script.js` (this just makes the images spin when you hover over them):

```javascript
const images = document.querySelectorAll('img');

images.forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'rotate(360deg)';
    img.style.transition = 'transform 1s';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'rotate(0deg)';
    img.style.transition = 'transform 1s';
  });
});
