class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    bangs: 1,
  };
  render() {
    console.log(this.props);
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <h1>
          <p>
            Hello there, {this.props.to}! I'm {this.props.from}
            {bangs}
          </p>
          <img src={this.props.img} />
        </h1>
      </div>
    );
  }
}
