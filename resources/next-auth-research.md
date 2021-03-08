# Next Auth research

Some days ago (March 2021) we decided to implement Next-Auth on the Marxan project. Why? For many reasons:

* Ability to add whatever service (called provider) such as Google, Twitter, Facebook, and others like Battle.net, Spotify (why not?)
* Better workflow working with JWT
* Increase of security
* Standardarization of authentication workflow
* Less code to maintain
* It provides a login page if you want (we usually don't)

## How to use it using on Vizzuality projects

You can mostfly follow [the documentation](https://next-auth.js.org/getting-started/example). And, use [Credentials provider](https://next-auth.js.org/providers/credentials)
which seems to be the one we need. And it works fine but we found two main issues.

### 1. No possibility to extend the session object.
  
The standard JWT object will have the next format:

```
{
  "user": {
    "name": "Juan Palomo",
    "email": "yomeloguiso@yomelo.como",
    "image": "route-to-image.png",
  },
  "acess_token": "the-token-generated-from-the-api",
  "expires": "expiration-date-given-from-authentication-endpoint"
}
```

The problem, when we try to create the session it will only response a object with the above format. Whatever additional parameter will be ignored.
Our response have the next structure:

```
{
  "email": "yomeloguiso@yomelo.como",
  "displayName": "Juan Palomo",
  "fname": "",
  "lname": "",
}
```

So, `displayName`, `fname`, `lname` and `access_token` are ignored in the session creation.

```
// session object created by next-auth
{
    "user": {
        "name": null,
        "email": "yomeloguiso@yomelo.como",
        "image": null
    },
    "expires": "2021-04-07T09:39:33.591Z"
}
```

You will say, in the documentation seems there is a way to extend the session. It's true but the paramaters you received are the session object (limited) and the decoded json web token (also limited).

Conclusion, you cannot use a complete profile for session creation, at least with Credentials provider. We can live with that, because you can request the profile to the API. But it opens the second issue.


### 2. We cannot access to original encoded token from the API.

The session that you receives in the application is omitting (for any reason) the `access_token` attribute. So, in your application there is not a way to get the token you need for HTTP request.
You need to include `Authorization: "Bearer token"` in your HTTP request using the API and it's not possible using this method.

I also, tried the next:

```
// _app.js
import { getToken } from 'next-auth/jwt';
export const getServerSideProps = async (context) => {
  const token = await getToken(context);
  return { props: { token };
};
```

But it also requires to add the option `signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,` in `[...nextauth].js` file.

The problem is, the `JWT_SIGNING_PRIVATE_KEY` is used to encode and decode the token in the client. But it seems you cannot use a random key because you will 
have the next error:

```
JWSVerificationFailed: signature verification failed
```

### What's the next?

In this point, we will try to create a custom provider and let you know.
