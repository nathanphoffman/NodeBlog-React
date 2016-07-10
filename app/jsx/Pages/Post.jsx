

var React = require('react');
var data = require('./../../js/data.js');

module.exports = class extends React.Component {

    componentDidMount() {
        data.getPost(this.props.id, function (post) {
            this.setState(post);
        }.bind(this));
    }

    render() {

        if (this.state && this.state.title) {
            return (
                <div>
                    <h2 className="text-center">{this.state.title}</h2>
                    {this.state.body}

                </div>
            );
        }
        else return (<h2>Loading...</h2>)
    }
};






