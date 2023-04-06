Component(async () => {
  const getJSON = (ul) => {
    const subdata = ul.all(":scope > li");

    const redata = subdata.map((e) => {
      const a = e.$("a");
      const reObj = { name: "" };

      const newUl = e.all(":scope > ul");
      if (newUl && newUl.length) {
        reObj.uls = newUl.map(getJSON);
      }

      if (a) {
        reObj.name = a.text;
        reObj.href = a.ele.href;
      }

      return reObj;
    });

    return redata;
  };

  return {
    data: {
      list: [],
    },
    proto: {
      refresh() {
        const target = this.$("ul");

        this.list = getJSON(target);
      },
    },
    ready() {
      this.refresh();
    },
  };
});
