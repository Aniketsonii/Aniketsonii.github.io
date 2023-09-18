function injector(element, splitter, klass, after) {
    const text = element.textContent;
    const parts = text.split(splitter);
    let inject = "";
  
    if (parts.length) {
      parts.forEach((item, i) => {
        inject += `<span class="${klass}${i + 1}">${item}</span>${after}`;
      });
  
      element.innerHTML = inject;
    }
  }
  
  const methods = {
    init: function () {
      return injector(this, "", "char", "");
    },
    words: function () {
      return injector(this, " ", "word", " ");
    },
    lines: function () {
      const r = "eefec303079ad17405c889e092e105b0";
      injector(this, "\n", "line", "");
      // Replace the dummy element with a line break
      this.innerHTML = this.innerHTML.replace(new RegExp(r, "g"), "<br>");
    },
  };
  
  NodeList.prototype.forEach = Array.prototype.forEach;
  
  HTMLElement.prototype.lettering = function (method) {
    if (method && methods[method]) {
      return methods[method].apply(this);
    } else if (method === "letters" || !method) {
      return methods.init.apply(this);
    }
    console.error(`Method ${method} does not exist on lettering`);
  };