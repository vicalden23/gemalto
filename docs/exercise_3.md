# Higherlevel exercises

The application is not done, but our client demands to test (making sure we are doing the work like we were suppose to 😣) **bi-weekly**. This means that friday for every other week, we need to deploy to the staging server. Can you take on this task?

**Development requirement:** 
  1. set up `development`, `test` and `staging` environments
  2. `test` must run all the existing test
  3. `development` should run exactly like `staging` only using a different `PORT` 


**Client requirement:**
  1. Create documentation for every release.

Priority development requirement over client requirement. 

For client req, I we just output the test results from `test` environment to a file. Or if you have the time serve as a static webpage through a different port (just make sure its accessible on `staging`)

NOT REQUIRED but feel free to isolate the dummy data that exist in ./src/data/users.js for `test` env only, we'll hook it to a database eventually. If you do take it out, please add in SQLITE db into the project for `development` environment only. 

Let me know if you have any questions.