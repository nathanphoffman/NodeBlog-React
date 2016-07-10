

var React = require('react');
var data = require('./../../js/data.js');

var Calendar = require('react-date-picker').Calendar;
var TransitionView = require('react-date-picker').TransitionView;
var DateField = require('react-date-picker').DateField;

module.exports = class extends React.Component {

    componentDidMount() {
        data.getPost(this.props.id, function (post) {
            this.setState(post);
        }.bind(this));
    }

    fieldChange(prop) {
        return function (event) {
            console.log(event.target.value);

            let value;
            if (!event.target && !event.target.value ||
                event.target.value == null) value = "";
            else value = event.target.value;

            let newState = {};
            newState[prop] = value;

            let obj = Object.assign(this.state, newState);
            console.log(obj);
            this.setState(obj);
        }
    }

    inputBox(placeholder, prop) {

        let value = "";
        if (this.state && this.state[prop]) value = this.state[prop];

        let style = {
            width: '100%'
        };

        return (
            <div className="input-group">
                <span className="input-group-addon">{placeholder}</span>
                <input className="form-control" type="text" style={style}
                    onChange={this.fieldChange(prop).bind(this) }
                    value={value}
                    placeholder={placeholder}/></div>
        );
    }

    textArea(placeholder, prop) {

        let value = "";
        if (this.state && this.state[prop]) value = this.state[prop];

        let style = {
            width: '100%'
        };

        return (
            <div className="input-group" style={style}>
                <textarea style={style}
                    placeholder={placeholder}
                    onChange={this.fieldChange(prop).bind(this) }
                    value={value}
                    class="form-control"
                    rows="20"></textarea>
            </div>
        );
    }

    render() {
        console.log('modify renderer');

        var date = Date.now();
        var onChange = function (ev) {
            console.log(ev);
        }



        /*
                           <TransitionView>
                                    <Calendar
                                        dateFormat="DD/MM/YYYY HH:mm:ss"
                                        defaultDate="20/04/2016 16:23:56"
                                        onChange={(dateString, { dateMoment, timestamp}) => { } }
                                        />
                                </TransitionView>
        */

        if (this.state) {
            return (
                <div>

                    <h2 className="text-center">Post Editor</h2>

                    <DateField
                        dateFormat="DD/MM/YYYY HH:mm:ss"
                        defaultDate="20/04/2016 16:23:56"
                        onChange={(dateString, { dateMoment, timestamp}) => { 
                            console.log(dateString);
                        } }
                        />

                    {this.inputBox("Title", "title") }
                    {this.inputBox("Author", "author") }
                    {this.inputBox("Subtitle", "subtitle") }

                    {this.textArea("Body", "body") }

                    <h2 className="text-center">{this.state.title}{" (Preview)"}</h2>
                    {this.state.body}

                </div>
            );
        }
        else return (<h2>Loading...</h2>)
    }
};