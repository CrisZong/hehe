export class showDisplay {
  element(element) {
    element.setAttribute('style', '')
  }
}

export class setImage {
  element(element) {
    element.setAttribute(
      'src',
      'https://avatars3.githubusercontent.com/u/34640786?s=460&u=126875c3d070765bd85ab6ba7726dc6c1ca84703&v=4',
    )
  }
}

export class setText {
  element(element) {
    element.append('Yijian Zong')
  }
}

export class setTitle {
  element(element) {
    element.setInnerContent('Yijian Zong')
  }
}

export class setBg {
  element(element) {
    console.log(element.setAttribute('class', 'bg-indigo-200'))
  }
}
