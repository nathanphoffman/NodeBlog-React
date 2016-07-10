

var React = require('react');
var SmIcon = require('./../General/SmIcon.jsx');
var PreviewItem = require('./Preview/PreviewItem.jsx');
var data = require('./../../js/data.js');

module.exports = class extends React.Component {

    componentDidMount() {
        data.getPreviews(function (previews) {
            this.setState({ posts: previews });
        }.bind(this), this.props.tag, this.props.page);
    }

    render() {

        var posts = [];
        if (this.state && this.state.posts) {
            this.state.posts.forEach(function (post) {
                // displays each blog post preview:
                posts.push(<PreviewItem author="Nathan Hoffman"
                    title={post.title}
                    subtitle={post.subtitle}
                    id={post.id}
                    date={post.date}
                    />);
            });
        }

        return (
            <div>
                <h3 className="text-center">Viewing: Recent Posts</h3>
                {posts}

                <ul className="pager">
                    <li className="next">
                        <a href="#">Older Posts &rarr; </a>
                    </li>
                </ul>
            </div>
        );
    }
};
