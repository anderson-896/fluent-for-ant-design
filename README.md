# fluent-for-ant-design

The Microsoft's Fluent Design System theme For Vue.js Ant Design

## Current Features

- Acrylic
- Reveal Effect

## Requirements

- Chorme 76+
- Edge 44+

- [NPM Package](https://www.npmjs.com/package/fluent-for-ant-design)
- [GitHub](https://github.com/anderson-896/fluent-for-ant-design)

![Preview](https://raw.githubusercontent.com/anderson-896/fluent-for-ant-design/master/pic%20(1).png)

## Install

```
npm i -S fluent-for-ant-design
```

## Usage

![alt text](https://raw.githubusercontent.com/anderson-896/fluent-for-ant-design/master/pic%20(2).png)
```html
<template>
  <div>
    <div class="acrylic">Acrylic</div>
    <div class="acrylic light">Acrylic light</div>
    <div class="reveal">Reveal</div>
    <div class="highlight reveal">Reveal with highlight</div>
    <div class="highlight reveal light">Reveal with highlight</div>
    <div class="highlight highlight-small reveal">Reveal with small highlight</div>
    <div class="highlight highlight-large reveal light">Reveal with large highlight</div>
  </div>
</template>

<script>
  import fluent from 'fluent-for-ant-design'
  export default {
    mixins: [fluent]
  }
</script>
```
![alt text](https://raw.githubusercontent.com/anderson-896/fluent-for-ant-design/master/pic%20(3).png)
## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
