import React from "react"

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonDisabled: true,
            message: { fromEmail: "", subject: "", body: "" },
            submitting: false,
            error: null,
        }
    }

    onChange = event => {
        const name = event.target.getAttribute("name")
        this.setState({
            message: { ...this.state.message, [name]: event.target.value },
        })
    }
    render() {
        return (
            <>
                <div>{this.state.error}</div>
                <form
                    style={{
                        display: `flex`,
                        flexDirection: `column`,
                        maxWidth: `500px`,
                    }}
                    method="post"
                >
                    <label htmlFor="fromEmail">Your email address:</label>
                    <input
                        type="email"
                        name="fromEmail"
                        id="fromEmail"
                        value={this.state.message.fromEmail}
                        onChange={this.onChange}
                    ></input>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={this.state.message.subject}
                        onChange={this.onChange}
                    />
                    <label htmlFor="subject">Website:</label>
                    <input
                        type="text"
                        name="website"
                        id="website"
                        value={this.state.message.subject}
                        onChange={this.onChange}
                    />
                    <label htmlFor="body">Message:</label>
                    <textarea
                        style={{
                            height: `150px`,
                        }}
                        name="body"
                        id="body"
                        value={this.state.message.body}
                        onChange={this.onChange}
                    />
                    <button
                        style={{
                            marginTop: `7px`,
                        }}
                        type="submit"
                        disabled={this.state.submitting}
                        onClick={this.onClick}
                    >
                        Send message
         </button>
                </form>
            </>
        )
    }
}

export default ContactForm