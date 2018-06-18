\*\*\*\*### Debug Namespaces

To view debug statements, add the desired namespaces to the DEBUG key in .env, space or comma separated. The following are valid

```bash
# Specific
DEBUG="mongoose:setup server:init"
DEBUG="mongoose:setup, server:init"

# All
DEBUG="*"

# All from one parent namespace
DEBUG="mongoose:* server:init"

# All from one child namespace
DEBUG="mongoose:setup *:init"
```

### Backend

- mongoose
- models
- server

### Frontend

- react:app
- frontend:api
