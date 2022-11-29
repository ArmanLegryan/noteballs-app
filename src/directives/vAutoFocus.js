export const vAutoFocus = {
  name: "auto-focus",
  directive: {
    mounted: (el) => {
      el.focus();
    }
  }
};
