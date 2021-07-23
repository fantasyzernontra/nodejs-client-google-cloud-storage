module.exports = {
	type: process.env.GCLOUD_SERVICE_ACCOUNT_type,
	project_id: process.env.GCLOUD_SERVICE_ACCOUNT_project_id,
	private_key_id: process.env.GCLOUD_SERVICE_ACCOUNT_private_key_id,
	private_key: process.env.GCLOUD_SERVICE_ACCOUNT_private_key,
	client_email: process.env.GCLOUD_SERVICE_ACCOUNT_client_email,
	client_id: process.env.GCLOUD_SERVICE_ACCOUNT_client_id,
	auth_uri: process.env.GCLOUD_SERVICE_ACCOUNT_auth_uri,
	token_uri: process.env.GCLOUD_SERVICE_ACCOUNT_token_uri,
	auth_provider_x509_cert_url:
		process.env.GCLOUD_SERVICE_ACCOUNT_auth_provider_x509_cert_url,
	client_x509_cert_url: process.env.GCLOUD_SERVICE_ACCOUNT_client_x509_cert_url,
}
