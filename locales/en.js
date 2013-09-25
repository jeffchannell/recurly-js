module.exports = {
	billing_info_fields: {
		title: "Billing Info"
	,	credit_card: {
			first_name: "First Name"
		,	last_name: "Last Name"
		,	card_number: "Credit Card Number"
		,	cvv: "CVV"
		,	expires: "Expires"
		}
	,	address: {
			address1: "Address"
		,	address2: "Apt/Suite"
		,	city: "City"
		,	state: "State/Province"
		,	zip: "Zip/Postal"
		}
	,	vat_number: "VAT Number"
	,	paypal: {
			authorize: "You will be taken to PayPal to authorize a billing agreement."
		,	popups: "Please make sure pop-ups aren't blocked."
		}
	}
,	contact_info_fields: {
		title: "Contact Info"
	,	first_name: "First Name"
	,	last_name: "Last Name"
	,	email: "Email"
	,	phone: "Phone Number"
	,	company_name: "Company/Organization Name"
	}
,	country: {
		default: "Select Country"
	,	bar:     "--------------"
	}
,	errors: {
		emptyField: "Required field"
	,	missingFullAddress: "Please enter your full address."
	,	invalidEmail: "Invalid"
	,	invalidCC: "Invalid"
	,	invalidCVV: "Invalid"
	,	invalidCoupon: "Invalid"
	,	cardDeclined: "Transaction declined"
	,	acceptTOS: "Please accept the Terms of Service."
	,	invalidQuantity: "Invalid quantity"
	}
,	months: {
		january: "01 - January"
	,	february: "02 - February"
	,	march: "03 - March"
	,	april: "04 - April"
	,	may: "05 - May"
	,	june: "06 - June"
	,	july: "07 - July"
	,	august: "08 - August"
	,	september: "09 - September"
	,	october: "10 - October"
	,	november: "11 - November"
	,	december: "12 - December"
	}
,	pay: "Pay"
,	subscribe_form: {
		iefail: {
			blast: "Your browser is not supported by Recurly.js."
		,	upgrade: "Upgrade to a different browser"
		,	or: "or"
		,	chromeframe: "install Google Chrome Frame"
		,	use: "to use this site."
		}
	,	subscription: {
			qty: "Qty"
		,	setup_fee: "Setup Fee"
		,	coupon: "Coupon Code"
		,	vat: "VAT"
		}
	,	due: "Order Total"
	,	subscribe: "Subscribe"
	}
,	terms_of_service: {
		accept: "I accept the"
	,	terms: "Terms of Service"
	,	and: "and"
	,	privacy: "Privacy Policy"
	,	end: ""
	}
,	update: "Update"
}
