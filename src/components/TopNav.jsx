import React from 'react';
import Modal from 'react-responsive-modal';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieModalOpen: false,
    };
    this.onCookieModalOpen = this.onCookieModalOpen.bind(this);
    this.onCookieModalClose = this.onCookieModalClose.bind(this);
  }
  onCookieModalOpen() {
    this.setState({
      cookieModalOpen: true,
    });
  }
  onCookieModalClose() {
    this.setState({
      cookieModalOpen: false,
    });
  }
  render() {
    const { cookieModalOpen } = this.state;
    return (
      <header className="banner" id="banner">
        <nav>
          <ul>
            <li>Laget av Martin Jacobsen</li> |
            <li><a href="mailto&#58;h&#101;%69&#64;2412&#46;n&#111;" title="support">Kontakt</a></li> |
            <li><a className="modal-anchor" onClick={this.onCookieModalOpen} href="">Om cookies</a></li>
          </ul>
        </nav>

        <div className="ribbon">
          <h4>
            <a href="#banner" id="open-menu"><i className="fa fa-caret-square-o-down" /></a>
            <a href="#" id="close-menu"><i className="fa fa-caret-square-o-up" /></a>
          </h4>
        </div>
        <Modal
          open={cookieModalOpen}
          onClose={this.onCookieModalClose}
          center
          classNames={{ overlay: 'modal-overlay', modal: 'modal-window' }}
        >
          <h1 className="cookie-modal-header">Om bruk av cookies på 2412.no</h1>
          <div className="cookie-modal-body">
            <p>Denne siden benytter i svært begrenset omfang informasjonskapsler, bedre kjent som <em>cookies</em>.</p>
            <p>Dersom du vil vite mer om cookies generelt kan <a rel="noopener noreferrer" target="_blank" href="http://www.mediebedriftene.no/informasjonskapsler">denne siden</a> publisert av Mediebedriftenes Landsforening anbefales. 2412.no er ikke medlem av Mediebedriftenes Landsforening og har ingen befatning med organisasjonen utover å lenke til deres informative side om dette temaet.</p>
            <p>På 2412.no er det to typer cookies i bruk:
              <ol>
                <li>
                  Vi bruker Google Analytics for å loggføre trafikk til siden. Dette innebærer at det lagres en cookie for å skille nye besøkende fra besøkende som ser siden for andre eller tredje gang. That's it. Vi sjekker om du har vært her før det siste året. Vi vet ikke hvem du er, og vi kobler ingenting av det vi vet om datamaskinen din opp mot reklame eller annet menneskefiendtlig bullshit.
                </li>
                <li>
                  Den andre cookien vi benytter er for å sjekke om du allerede har sagt ja til at vi benytter cookies på denne siden så du slipper å trykke bort det irriterende banneret hver gang du kommer. Vi prøver oss liksom på en nokså minimalistisk opplevelse her, så det er kjedelig med masse unødvendig rot.
                </li>
              </ol>
              Vi (dvs jeg) som lager 2412 tar ditt personvern på alvor. Såpass på alvor at vi med vilje ikke vet noe som helst om deg som vi trenger å passe på. Dersom dette på noe tidspunkt endrer seg vil det gjøres tydelig i denne teksten.
            </p>
            <em>Sist oppdatert 24/05/18</em>

          </div>
        </Modal>
      </header>
    );
  }
}

export default TopNav;
