var React = require('react');
var LgIcon = require('./../General/LgIcon.jsx');

module.exports = class extends React.Component {
    render() {

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0">
                            <ul className="list-inline text-center">
                                <LgIcon address="#" icon="twitter"/>
                                <LgIcon address="#" icon="github"/>
                                <LgIcon address="#" icon="stack-overflow"/>
                                <br/>
                            </ul>
                            <p className="copyright text-muted">
                                All original content by Nathan P Hoffman,{" "}
                                <a target="_blank" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a>
                                <br/>This blog was adapted by me with ReactJS and NodeJS you can find the source at those links.{" "}
                                <a target="_blank" href="http://startbootstrap.com/template-overviews/clean-blog/">Clean Blog</a>
                                <br/>The original css/site styles here: {" "}
                                <a target="_blank" href="http://startbootstrap.com/template-overviews/clean-blog/">Clean Blog</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};