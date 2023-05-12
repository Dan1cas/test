async function login() {
  try {
    const grant_type = "password";
    const client_id =
      "3MVG9ux34Ig8G5errUr5CT9W93k9Nzq7WywJYqeeIhceteyo62SbMvH03TdbhsR_KOGQaD7NbmVVrRQfGMTlB";
    const client_secret =
      "91E0AFF7186D6E0C833B13BB2A6F23AEE8E4A7F8B93C42DFA46204DEB7F30637";
    const username = "tuzop38@mindful-unicorn-rvj4xa.com";
    const password = "Heart2023";
    const domain_Name =
      "https://mindful-unicorn-rvj4xa-dev-ed.trailblaze.my.salesforce.com";
    let access_token_id = "";
    body = {
      grant_type: grant_type,
      client_id: client_id,
      client_secret: client_secret,
      username: username,
      password: password,
    };

    console.log(body)

    let resp = await fetch(domain_Name + "/services/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    let data = await resp.json();
    console.log(data);

    if (response_access_token.status_code == 200) {
      access_token_id = response_access_token.json()["access_token"];
      console.log("access token: " + access_token_id);
    }
    /*
    headers = {
      Authorization: "Bearer " + access_token_id,
    };

    response_sObject = Request.get(
      domain_Name + "/services/data/v56.0/query/?q=SELECT+Name+FROM+Account",
      (header = headers)
    );
    console.log("response: " + response_sObject.json());*/
  } catch {

  }
}
login()