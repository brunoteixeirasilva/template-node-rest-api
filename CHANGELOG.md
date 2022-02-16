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