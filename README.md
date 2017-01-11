# Font Size

Plugin for font-sizes and resize.

### How to use
```sh
npm install --save font-size-actions

import $ from 'jquery';
import fontSize from 'font-size-actions';
```
Or just add the following lines:

`<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>`
`<script src="./fontsize.js"></script>`


```sh

<button class="mySelector" data-font-action="fontUp"></button>
<button class="mySelector" data-font-action="fontDown"></button>

$(document).ready(function(){
    $('.mySelector').fontSize();
});
```

[DEMO](https://leonardotessaroalves.github.io/fontsize/)


[Autor: Leonardo Tessaro](mailto:leonardotessaroalves@gmail.com)
