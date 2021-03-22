import React, { Component } from "react";
import { Link } from 'react-router-dom';

const BreadCrumbs = (props) => {
  let pathCrumbs = "";
  if (props.items && props.items.length > 1) {
    pathCrumbs = props.items.map((item, index) => (
      <span key={item.label}>
        <Link
          to={item.label}
          className="text-secondary-3 hover:text-primary-light-3 text-xs capitalize"
        >
          {item.label}
        </Link>
        {index !== props.items.length - 1 && (
          <span className="px-2 text-xs fa fa-chevron-right"></span>
        )}
      </span>
    ));
  }
  return <div> {pathCrumbs} </div>;
};

class HeroBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBreadCrumbs: props.breadcrumbs?.length > 1,
    };
  }

  componentDidUpdate() {
    if (
      this.props.breadcrumbs != this.state.breadcrumbs &&
      this.props.breadcrumbs.length > 1
    ) {
      this.setState(() => {
        return { showBreadCrumbs: true, breadcrumbs: this.props.breadcrumbs };
      });
    }
  }

  render() {
    return (
      <>
        <div className="max-w-full h-16 md:h-16 lg:h-16 bg-neutral-1"></div>
        <div className="max-w-full h-40 md:h-48 lg:h-48 bg-neutral-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!this.state.showBreadCrumbs ? (
              <>
                <div className="text-primary-dark-3 font-medium text-lg md:text-xl lg:text-2xl pt-2 md:pt-4 lg:pt-6 pb-1">
                  {"Hey, "}
                  <span className="text-primary-light-3 font-medium text-xl md:text-2xl lg:text-3xl">
                    Shanmukh
                  </span>
                </div>
                <div className="text-neutral-5 md:mb-4 text-base">
                  {" "}
                  what would you like to do today?
                </div>
              </>
            ) : (
              <>
                <div className="pt-1 md:pt-2 lg:pt-4">
                  <BreadCrumbs items={this.props.breadcrumbs} />
                </div>
                <div className="text-primary-light-3 font-medium text-xl md:text-2xl lg:text-3xl">
                  <span className="capitalize">
                    {this.props.breadcrumbs[this.props.breadcrumbs.length - 1].label}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default HeroBar;
