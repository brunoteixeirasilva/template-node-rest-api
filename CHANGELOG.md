# CHANGELOG

## Changes By Date

### 16/02/2022

* Add support for an external API
  * Define (class) domain structure (OK)
    * Animal (OK)
      * ID
      * Name
      * Age
      * Gender
    * Human (Animal)
      * IQ
      * Employed
    * Pet (Animal) (OK)
      * Race
      * Colors
   * Create interfaces/contracts and models (OK)
     * Generated class for Animal
     * Extended Animal class with Pet class
   * Create the DB (in-memory list) (OK)
     * Create a database for listing Pets (OK) 
   * If necessary, create data transformer
     * Not needed, not connecting to external API
   * Create Microservice for consuming the API (OK)
     * Created PetController
     * Added PetController to the router
   * Test execution locally

### 21/02/2022

* Develop basic authentication request
  * [0.25h/0.1h] Update on User model - Add password property
    * [DONE] Update User class file
  * [0.5h/0.2h] Change in authentication controller business logic
    * [DONE] Password should be sent within the request body
    * [DONE] User should be bound to a valid password (using hashing function)
  * [0.25h/0.1h] Creation of utility function for hashing strings (password)
    * [DONE] Create function in util/applyHashCode for dealing with strings
  * [0.1h/0.1h] Change user Database to comprise of their passwords
    * [DONE] Update database/User file to have passwords available
  * [0.1h/0.1h] Run manual testing on the changes
    * [WIP] Test Application


### 23/02/2022

* Develop basic authentication request
  * [0.1h/0.5h] Run manual testing on the changes
    * [DONE] Test Application
  * [BUGFIX] Exposing the password while POST to /auth
    * [0.2h/0.2h] Add "cleanup" function to the ObjectModel class
    * [0.1h/0.1h] Add pipe function to the User class using base class cleanup function
    * [0.1h/0.1h] In controllers (Authentication and User) call the pipe function for processing the User data before delivery to requestor
    * [0.05h/0.05h] Test user output