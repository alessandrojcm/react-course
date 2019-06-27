# Stream client

The stream clients gives a CRUD of streams, it allows the user to
create, delete, update and read a list of streams. For the first
three operations, the user must be logged in; for that, the client
allows log in via Google.

The user can also play the streams with a video player.

Differences from Stephen's code:
* It uses `lodash-es` instead of `lodash` (it's the same library
but the former is three shakeable).
* It uses hooks.
* It uses `semantic-ui-css` package. 
* I created an `InputField` component, which allows for the
reuse of common form input fields and lets you set error state
for the given field.
* The client shows loading screens when it's making request to the API.
This is why the Redux store has the `loading` property.

This project as an `environment.js` file with the urls
for the RMTP server and the `json-server` API.
