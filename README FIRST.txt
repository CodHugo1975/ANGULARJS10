Previous requirements:

DEFAULT BROWSER, GOOGLE CHROME.
Visual Studio 2019
Visual Studio Code: CHOOSE CONTEXTUAL MENUS OPTION WHEN ASKED
SQL Server 2014 or higher.
SQL Management Studio v17.8.1

IMPORTANT!!
* NodeJS 16.20.2 for windows 10
* Angular 10 CLI

 (OPTIONAL) POSTMAN for Windows 10

(RECOMMENDED OPTION) NVM: NODE VERSION MANAGER.
https://realworlddev.hashnode.dev/installing-nvm-on-windows-11

* NVM ALLOWS YOU TO INSTALL AND USE MULTIPLE VERSIONS OF NODE JS. THIS IS BECAUSE THE NEW
VERSIONS OF NODE JS MAY NOT FULLY SUPPORT OLD VERSIONS OF ANGULAR.

--------------------------------------------------

WHAT'S THIS APPLICATION ABOUT?

Description:

A data model that contains the following tables with their attributes:

Product:
    ProductID
    Name
    Description
    Image

Category:
    CategoryID
    Name

ProductCategory:
    ProductID
    CategoryID


The model is created in a relational database (SQL Server). Includes the table creation script. A web application in Angular 10, which contains the CRUD operations to register Products. The frontend connects to a backend in .Net, which contains the business logic.

--------------------------------------------------

HOW TO RUN IT LOCALLY?

1- OPEN AND EXECUTE THE SCRIPT ..DBScripts/fullscriptDB.sql TO CREATE THE "CatalogDB" DB ON THE SELECTED LOCAL SQL SERVER.

2- OPEN THE FILE ..\Code\WebAPI\appsettings.json AND MODIFY THE CONNECTION STRING
"Data Source=WIN-IJCBKM5MI60\\SQKK17;Initial Catalog=CatalogDB; Integrated Security=true"
FOR THE DATASOURCE TO POINT TO THE LOCAL SQL SERVER.

3- OPEN THE VISUAL STUDIO 2019 SOLUTION ..\Code\WebAPI\WebAPI.sln

4- OPEN A WINDOWS EXPLORER WINDOW IN THE LOCATION ..\Code\AngularUI\catalogng10

5- SELECT THE ADDRESS BAR OF THE OPEN EXPLORER WINDOW AT POINT 4

6- WRITE THE WORD "CMD" IN THE EXPLORER BAR, THEN HIT ENTER.

7- IN THE COMMAND LINE WINDOW THAT WAS JUST OPENED IN THE LOCATION ..\Code\AngularUI\catalogng10,
   WRITE "code ." AND THEN PRESS THE ENTER KEY.

8- RUN THE SOLUTION ..\Code\WebAPI\WebAPI.sln AND WAIT FOR THE EXPLORER WINDOW TO OPEN.

9- IN THE OPENED COMMAND LINE WINDOW, TYPE "ng serve --open" AND THEN PRESS THE ENTER KEY.

10- WAIT FOR THE CHROME WINDOW TO OPEN SHOWING THE MAIN PAGE OF THE
    APPLICATION THAT CONTAINS TWO BUTTONS "Products" and "Category"

11- RESOLVE DEPENDENCY OR DB ERRORS DUE TO INSTALLATION FAILURES IN THE LOCAL ENVIRONMENT.

12- TO TEST THE "LOGGERSERVICE": ON THE EXPLORER SCREEN THAT SHOWS THE APP SCREEN, RIGHT CLICK, LOOK FOR THE "Inspect" OPTION. CLICK THERE.

13- SEARCH THE "Console" OPTION IN THE MENU AND DELETE THE CONTENT OF THE CONSOLE.

14- ADD A PRODUCT. TO CHOOSE A PRODUCT IMAGE, NAVIGATE TO LOCAL PATH
\\ANGULAR 10\pics. 

AFTER ADDING THE PRODUCT, VERIFY THAT THE CONSOLE SHOWS THE MESSAGE

"A new product with product name <Product Name> has been added."

--------------------------------------------------


Highlights:

-   Injection of Service ProductLoggerService:
    \\AngularUI\catalogng10\src\app\productServices\productlogger.service.ts

    on file:
    \\AngularUI\catalogng10\src\app\product\add-edit-prod\add-edit-prod.component.ts

    Line 15: constructor(private service:SharedService, private logger: ProductLoggerService)


    Implementation of Service ProductLoggerService on function addProduct():

    Line 57:   this.logger.LogMessage(this.Name);  
