const m2mAuth = require('tc-core-library-js').auth.m2m

const AUTH0_URL = process.env.AUTH0_URL
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET
const AUTH0_PROXY_SERVER_URL = process.env.AUTH0_PROXY_SERVER_URL

const m2m = m2mAuth({ AUTH0_URL, AUTH0_AUDIENCE, AUTH0_PROXY_SERVER_URL })


async function getM2MToken() {
   return m2m.getMachineToken(AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET)
}

async function printToken() {
    let token = await getM2MToken()
    console.log('Token: ', token)
}

printToken();

