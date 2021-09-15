# Daily Sync-up

## Version-based Tasks

### **14/09/2021 19:00** - In-team session
#### *v1.0.1*

- [OK] Creating a model (Movie)
- [OK] Creating an in-memory data-set for the created model (Movies)
- [OK] Creating a controller/microservice to deliver (get/getAll) data from created data-set
- [OK] Testing the solution using POSTMAN

---

### **15/09/2021 00:51**
#### *v1.0.2*

- [OK] Implement external service connector (@connectors)
  - Will be supporting application/json requests only
  - Reading the JSON value from any Response, in general
- [OK] Abstract service configuration to a class (ServiceConfig.js)
- [OK] Abstract DummyAPI connector, based on the connectors
- [OK] Create JSON to Class mapper (@mappers)
- [OK] Map Comments class from service reference/docs (DummyAPI)
- [OK] Create controller for getting Comments from service (DummyAPI)
- [OK] Update router to have the Comment controller (routes/index.js)