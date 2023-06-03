```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kitten gallery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome to the Kitten Gallery</h1>
  <div class="container">
    <img src="https://placekitten.com/200/150" alt="kitten 1">
    <img src="https://placekitten.com/200/150" alt="kitten 2">
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
