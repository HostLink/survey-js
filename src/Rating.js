export default class {
  static get toolbox() {
    return {
      title: "Rating",
      icon: '<i class="fas fa-star"></i>'
    };
  }

  render() {
    let div = document.createElement('div');
    div.append("[Rating] Question: ");
    div.append(document.createElement('input'));
    return div;
  }

  save(blockContent) {

    return {
      type: "rating",
      data: {
        question: blockContent.querySelector('input').value,
      }
    };
  }
}

