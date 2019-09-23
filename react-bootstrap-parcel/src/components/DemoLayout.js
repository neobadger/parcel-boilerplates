import React, { Component, Fragment } from 'react';
import './main.scss';

const Button = props => {
  return <button className={`btn ${props.className}`}>{props.children}</button>;
};

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            {props.brandLogo}
            {props.brandName}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {props.navList.map((item, idx) => {
                return (
                  <li key={idx} className="nav-item active">
                    <a className="nav-link" href={item.text}>
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const HeaderCover = props => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="font-weight-light display-3">{props.heading}</h1>
            <p className="lead">{props.tagLine}</p>
            <Button className="btn-dark">Click Me!</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const ContentBody = ({ colorScheme }) => {
  return (
    <section className={`py-5 ${colorScheme}`}>
      <div className="container">
        <h2 className="font-weight-light">This will Blow Your Mind</h2>
        <p>
          Cat snacks burrow under covers, or munch, munch, chomp, chomp Gate
          keepers of hell, chirp at birds. Try to jump onto window and fall
          while scratching at wall bite nose of your human yet meow meow, i tell
          my human or man running from cops stops to pet cats, goes to jail. Go
          into a room to decide you didn't want to be in there anyway i cry and
          cry and cry unless you pet me, and then maybe i cry just for fun for
          poop in the plant pot for lick plastic bags, chase imaginary bugs.
          That box? i can fit in that box head nudges. Find a way to fit in tiny
          box lick the plastic bag. Stinky cat.
        </p>
      </div>
    </section>
  );
};

const Footer = ({ brandName, colorScheme }) => {
  const date = new Date();
  return (
    <footer id="sticky-footer" className={`py-4 ${colorScheme.light}`}>
      <div className="container text-center">
        <small>
          Copyright &copy; {date.getFullYear()} {brandName}
        </small>
      </div>
    </footer>
  );
};

export default class extends Component {
  state = {
    brandLogo: '🥔',
    brandName: 'Potato Corp Ltd.',
    tagLine: 'A mash above the rest, discover world-class tatties.',
    navList: [
      { text: 'Home', href: '#' },
      { text: 'Mash', href: '#' },
      { text: 'Fries', href: '#' },
      { text: 'Scollop', href: '#' }
    ],
    colorScheme: {
      dark: 'bg-dark text-white',
      light: 'bg-light text-dark-50'
    }
  };

  render() {
    const { navList, brandName, brandLogo, tagLine, colorScheme } = this.state;
    return (
      <Fragment>
        <NavBar navList={navList} brandName={brandName} brandLogo={brandLogo} />
        <HeaderCover heading={brandName} tagLine={tagLine} />
        <ContentBody colorScheme={colorScheme.dark} />
        <Footer
          brandName={brandName}
          brandLogo={brandLogo}
          colorScheme={colorScheme.dark}
        />
      </Fragment>
    );
  }
}
