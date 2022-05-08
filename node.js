const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);

const id = 4900;
const headers = {
  "on-behalf-of": "The subuser's username. This header generates the API call as if the subuser account was making the call."
};
const data = {
  "ip": "95.146.130.176"
};

const request = {
  url: `/v3/whitelabel/domains/${id}/ips`,
  method: 'POST',
  headers: headers,
  body: data
}

client.request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(response.body);
  })
  .catch(error => {
    console.error(error);
  });
