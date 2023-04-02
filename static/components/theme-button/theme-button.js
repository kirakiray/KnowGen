Component(async () => {
  return {
    data: {
      theme: "light",
    },
    watch: {
      theme(val) {
        if (val === "light") {
          $("html").class.add("light");
          $("html").class.remove("dark");
        } else {
          $("html").class.remove("light");
          $("html").class.add("dark");
        }

        localStorage.themeMode = val;
      },
    },
    proto: {
      changeTheme() {
        if (this.theme === "light") {
          this.theme = "dark";
        } else {
          this.theme = "light";
        }
      },
    },
    ready() {
      this.theme = localStorage.themeMode || "light";
    },
  };
});
