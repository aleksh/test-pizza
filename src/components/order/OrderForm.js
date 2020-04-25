import React from "react";
import validator from "validator";
import { Formik, Form, Field } from "formik";

import Styles from "./Order.module.scss";

const OrderForm = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className={Styles.Form}>
			<Formik
				initialValues={{
					username: "",
					email: "",
					address: "",
					phone: "",
				}}
				onSubmit={onSubmit}
			>
				{({ errors, touched }) => (
					<Form>
            <h2>Order</h2>
						<div className={Styles.row}>
							<div>
								<Field
									placeholder="Username"
									name="username"
									validate={validateUsername}
								/>
								<div className={Styles.error}>
									{errors.username &&
										touched.username &&
										errors.username}
								</div>
							</div>

							<div>
								<Field
									placeholder="Email"
									name="email"
									validate={validateEmail}
								/>
								<div className={Styles.error}>
									{errors.email &&
										touched.email &&
										errors.email}
								</div>
							</div>
						</div>

						<div className={Styles.row}>
							<div>
								<Field
									placeholder="Address"
									name="address"
									validate={validateAddress}
								/>
								<div className={Styles.error}>
									{errors.address &&
										touched.address &&
										errors.address}
								</div>
							</div>
							<div>
								<Field
									placeholder="Phone"
									name="phone"
									validate={validatePhone}
								/>
								<div className={Styles.error}>
									{errors.phone &&
										touched.phone &&
										errors.phone}
								</div>
							</div>
						</div>

            <div className={Styles.Submit}>
						  <button type="submit">Submit</button>
            </div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default OrderForm;

function validateEmail(value) {
	let error;

	if (!value) {
		error = "Required";
	} else if (!validator.isEmail(value)) {
		error = "Invalid email address";
	}

	return error;
}

function validateUsername(value) {
	let error;

	if (!value) {
		error = "Required";
	} else if (value.length < 8) {
		error = "Should be at least 8 characters";
	}

	return error;
}

function validateAddress(value) {
	let error;

	if (!value) {
		error = "Required";
	} else if (value.length < 8) {
		error = "Should be at least 8 characters";
	}

	return error;
}

function validatePhone(value) {
	let error;

	if (!value) {
		error = "Required";
	} else if (!validator.isNumeric(value)) {
		error = "Phone Should be numbers";
	} else if (!validator.isMobilePhone(value)) {
		error = "Incorect Phone Number";
	}

	return error;
}
