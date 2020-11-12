export default {
  name: "Button",
  props: {
    /**
     * The color for the button
     */
    color: {
      type: String,
      default: "#333"
    }
  },
  render () {
    return (
      <div class="Button">
        <button class="button">123</button>
      </div>
    );
  }
};
