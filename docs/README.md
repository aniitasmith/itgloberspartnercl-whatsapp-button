# Whatsapp Button

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The Whatsapp Button is a component that allows the user to access the store's whatsapp chat and thus receive personalized attention

<img width="1918" alt="image" src="https://user-images.githubusercontent.com/66226368/219792613-cf0d1ce3-315b-413c-86ef-4919db373d9a.png">

## Configuration 

1. Import the whatsapp-button's app to your theme's dependencies in the manifest.json, for example:

```json
  dependencies: {
    "{vendor}.whatsapp-button": "0.x"
  }
```
2. Add the whatsapp-button block to the store-theme. For example:

```json
"responsive-layout.desktop#desktop__home": {
    "title": "Home Desktop",
    "children": [
      "modal-trigger#codigo-postal",
      "flex-layout.row#home__section-1",
      "flex-layout.row#home__section-2",
      "whatsapp-button"
    ]
  },
  "whatsapp-button": {
    "props": {
      "logo": "assets/img/whatsapp-logo.png",
      "phone": "64112312345",
      "message": "Me interesa consultar sobre el producto:",
      "width":"100px",
      "height":"100px"
    }
  }
  ```
  
  ### The whatsapp-button props

| Prop name    | Type            | Description                                                                               | Default value    |
| ------------ | --------------- | ----------------------------------------------------------------------------------------- | ---------------- | 
| `logo`       | `String`        | Define the url of the image that will be used for the whatsapp button                     | `undefined` |
| `phone`      | `String`        | Defines the WhatsApp number that the store uses to provide customer  service              | `+1234578` |
| `message`    | `String`        | Define the welcome message that the client will see when entering the WhatsApp chat       | `Hello we help you?` |
| `width`      | `Number`        | Define the width of the button                                                            | `120` |
| `height`     | `Number`        | Define the height of the button                                                           | `120` |

## Customization

`No CSS Handles are available yet for the app customization.`
                                                                                                                       |
<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
