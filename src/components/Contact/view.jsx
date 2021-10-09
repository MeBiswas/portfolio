import PropTypes from "prop-types";

const ContactComponent = ({ name, change, email, submit, subject, message }) => {
	return (
		<section id="contact">
			<div className="row section-intro">
				<div className="col-twelve">
					<h5>Contact</h5>
					<h1>I'd Love To Hear From You.</h1>

					<p className="lead">
						Lorem ipsum Do commodo in proident enim in dolor cupidatat
						adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
						ipsum Consectetur ut in in eu do.
					</p>
				</div>
			</div>

			<div className="row contact-form">
				<div className="col-twelve">
					<form name="contactForm" id="contactForm">
						<fieldset>
							<div className="form-field">
								<input
									required
									type="text"
									value={name}
									minLength="3"
									id="contactName"
									name="contactName"
									placeholder="Name"
									onChange={(e) => change(e, 'name')}
								/>
							</div>
							<div className="form-field">
								<input
									required
									type="email"
									value={email}
									id="contactEmail"
									name="contactEmail"
									placeholder="Email"
									onChange={(e) => change(e, 'email')}
								/>
							</div>
							<div className="form-field">
								<input
									required
									type="text"
									minLength="5"
									value={subject}
									id="contactSubject"
									name="contactSubject"
									placeholder="Subject"
									onChange={(e) => change(e, 'subject')}
								/>
							</div>
							<div className="form-field">
								<textarea
									required
									rows="10"
									cols="50"
									minLength="10"
									value={message}
									id="contactMessage"
									name="contactMessage"
									placeholder="message"
									onChange={(e) => change(e, 'message')}
								></textarea>
							</div>
							<div className="form-field">
								<button onClick={submit} className="submitform">
									Submit
								</button>
								<div id="submit-loader">
									<div className="text-loader">Sending...</div>
									<div className="s-loader">
										<div className="bounce1"></div>
										<div className="bounce2"></div>
										<div className="bounce3"></div>
									</div>
								</div>
							</div>
						</fieldset>
					</form>

					<div id="message-warning"></div>

					<div id="message-success">
						<i className="fa fa-check"></i>Your message was sent, thank you!
						<br />
					</div>
				</div>
			</div>

			<div className="row contact-info">
				<div className="col-four tab-full">
					<div className="icon">
						<i className="icon-pin"></i>
					</div>
					<h5>Where to find me</h5>
					<p>
						Rasoolpur Nwada, Sector-62
						<br />
						Noida, UP
						<br />
						201309 India
					</p>
				</div>
				<div className="col-four tab-full collapse">
					<div className="icon">
						<i className="icon-mail"></i>
					</div>
					<h5>Email Me At</h5>
					<p>
						biswasabhi93@gmail.com
						<br />
						biswasabhi379@gmail.com
					</p>
				</div>

				<div className="col-four tab-full">
					<div className="icon">
						<i className="icon-phone"></i>
					</div>
					<h5>Call Me At</h5>
					<p>Mobile: (+91) 96461-56493</p>
				</div>
			</div>
		</section>
	);
};

ContactComponent.propTypes = {
	name: PropTypes.string,
	change: PropTypes.func,
	submit: PropTypes.func,
	email: PropTypes.string,
	subject: PropTypes.string,
	message: PropTypes.string,
};

export default ContactComponent;
