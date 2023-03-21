# Client Data Store Approach

```txt
// example: Client-side routing state
//          Storage Method: SessionStorage
//          Reason: We can keep user's current routing state when user reload it and the storage will be automatically removed when user close it.
//
```

User access token
Storage Method: Cookie
Reason: Token is like short-term authorization of manipulating data, so it needs to be cleared when user exit the application

User age: 25
Storage Method: SessionStorage
Reason: User info is confidential, it needs be wiped out when user close the window

User name: George
Storage Method: SessionStorage
Reason: User info is confidential, it needs be wiped out when user close the window

Video autoplay toggle: true
Storage Method: LocalStorage
Reason: User Preference can be stored persistently until user wants to reset the settings

User search records: ["car", "android", "iphone" ... ]
Storage Method: LocalStorage
Reason: It can be used for autocomplete quick indexing when re-visit the application
