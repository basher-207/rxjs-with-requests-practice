# Task for theme RxJS

We use some third-party API in our application.
Routes of the API: 
``` 
  "/directors",  
  "/directors/{id}/movies",  
  "/movies/{id}/reviews" 
```  

*/directors* returns the list of film directors  
*/directors/{id}/movies* returns the list of films that were created by director with cpecified id  
*/movies/{id}/reviews* returns the list reviews for the film with specified id  

Your task is to complete the code in getMovie$ function.  
This function should return an observable that emits a film with the highest average score that was created by the director with provided name. 
Name of director is passed as an argument of a function.