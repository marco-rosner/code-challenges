Architeture:

> Client -> Login/Password or Social providers (Auth0) -> Redirect (30x) with cookies/token authentication

Auth0 - An authentication and authorization platform.

Key Features: 
> Single Sign-On (SSO)  
> User Management features
> API Security.  

Autentications:
> Login/Password  
> Social Providers  
> Enterprise (Active Directory, SAML)  
> Passwordless (email/sms)  

Techniques:
> Universal Login - One login to all applications  
> Single Sign On (SSO) - One credential for multiple apps using OpenID Connect, OAuth or SAML.  
> Multi-factor authentication (MFA) - Password, security token/mobile device or fingerprint or facial recognition  
> PasswordLess - Temporary credentials sent by email/sms  

Flows:
> Authorization code flow -> Code verifier or code challenge received by the user in another device and provide to the authorization.  
> Implicit flow -> Used by SPA with form post. Store the token in the user session.  
> Hycrid flow -> Authorization code and Implicit flow  
> Device authorization -> IoT devices authentication directly without user input  
> Client credentails -> Server-to-Server using client token  

OAuth (Open Authorization) - Protocol that defines a set of rules for securely granting access to resources

OpenID Connect - Authentication protocol based in the OAuth2

SAML (Security Assertion Markup Language) - Standard for exchanging authentication and authorization data between an identity provider and service provider.

JWT (JSON Web Tokens) - Standard criptogaphed token used in web with header (algorithm) and payload like:

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

FrontEnd security

SQL Injection
> Insert SQL code in the input not sanatized
> Validate user inputs

XSS - Cross-Site Scripting
> Injects a malicious client-side script into the page  
> Hash integrity on package-lock.json  

CSRF - Cross-Site Request Forgery
> Hijacking the user session to perform actions on user's behavior  
> Dont store token in the user session. Use token in each request and store the token in input hidden tags

CORS - Cross-Origin Resource Sharing
> Add adicional headers (`Origin`, `Access-Control-Allow-Origin` in response) to grand access to a diferent application domain
> Browsers denied request to a diferent domain without CORS headers