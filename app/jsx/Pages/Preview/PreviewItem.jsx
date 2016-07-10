var React = require('react');
var SmIcon = require('./../../General/SmIcon.jsx');

module.exports = class extends React.Component {

    render() {
        return (
            <div className="post-preview">
                <a href={`#post/${this.props.id}`}>
                    <h2 className="post-title text-center">
                     {this.props.title}
                    </h2>

                    {this.props.subtitle}

                </a>
                <p className="post-meta text-right">Posted by {this.props.author} on {this.props.date}</p>
            </div>
        );
    }
};
