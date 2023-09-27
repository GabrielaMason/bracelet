import "./Contact.css"
export default function Contact(){
    return(
        <div className="container-fluid contact_container">
            <div className="row contact_row">
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <h1 className="mb-3">Get in touch</h1>
                    <div className="input-group mb-4 contact_input">
                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                    <div className="input-group mb-4 contact_input">
                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                    <div className="input-group mb-4 contact_input">
                        <span className="input-group-text" id="inputGroup-sizing-default">Thoughts</span>
                        <textarea className="form-control" aria-describedby="inputGroup-sizing-default" rows="3"></textarea>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center message">
                    <h1>Contact Us</h1>
                    <h3 className="text-center">It is very important for us to keep in touch with you, so we are always ready to answer any questions that interests you. </h3>
                </div>
            </div>
        </div>
    )
}