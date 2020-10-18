import { linksToReturn, socialLinks } from './linkObjects'
export class LinksTransformer {
  constructor(links) {
    this.links = links
  }

  element(element) {
    var i
    for (i = 0; i < this.links.length; i++) {
      element.append(
        `<a href=${this.links[i]['url']}>${this.links[i]['name']}</a>`,
        { html: true },
      )
    }
  }
}

export const rewriter = new HTMLRewriter().on(
  'div#links',
  new LinksTransformer(linksToReturn),
)

export class LinksTransformer2 {
  constructor(links) {
    this.links = links
  }

  element(element) {
    var i
    for (i = 0; i < this.links.length; i++) {
      element.append(
        `<a href=${
          this.links[i]['url']
        } style='background-color: #1877F2;'><img src=${
          this.links[i]['src']
        }></img></a>`,
        { html: true },
      )
    }
  }
}

export const rewriter2 = new HTMLRewriter().on(
  'div#social',
  new LinksTransformer2(socialLinks),
)
