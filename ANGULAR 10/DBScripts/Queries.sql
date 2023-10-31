insert into dbo.Product values
                            ('ProductoTest1','Lorem ipsum product blah', 'genericproduct.png')

SELECT * FROM Product
SELECT * FROM Category
SELECT * FROM ProductCategory

SELECT 
		Product.ProductID,
		Product.Name as 'Name',
		Product.Description as 'Description',
		Category.Name as 'Category',
		Product.Image as 'Image'
 FROM Product
INNER JOIN ProductCategory
ON ProducT.ProductID = ProductCategory.ProductID
INNER JOIN Category
ON Category.CategoryID = ProductCategory.CategoryID


insert into dbo.Product values
                            ('ProductoTest4','Lorem ipsum product blah', 'genericproduct.png')
                            
--declare @newid int 
--	SELECT @newid = @@IDENTITY

--insert into dbo.ProductCategory values
--                            (@newid,1)

--//////////////////////////////////////

--insert into dbo.Product values
--                            ('ProductoTest5','Lorem ipsum product blah', 'genericproduct.png')
--                            declare @newid int
--                            SELECT @newid = @@IDENTITY
--                            insert into dbo.ProductCategory values(@newid,1)


-- ****************** /////////////////////////////

--insert into dbo.Product values
--                            ('NEW NAME','NEW DESCRIPTION', 'genericproduct.png')
--                            declare @newid int
--                            SELECT @newid = @@IDENTITY                            
--                            insert into dbo.ProductCategory values(
--                            @newid,3)






--////////////////////////////////////////////

update dbo.Product set 
                             Name = 'NEW NAME',
                             Description = 'NEW DESCRIPTION'
                             where ProductId = 5      


                             delete from dbo.ProductCategory                         
                             where ProductId = 5 
                             delete from dbo.Product                         
                             where ProductId = 5                      
                            
--//////////////////////////////////////////////

select CategoryID, Name from dbo.Category

insert into dbo.Category values
                            ('NEW CATEGORY')    

update dbo.Category set 
                             Name = 'updated CATEGORY'
                             where CategoryID = 2  


                             delete from dbo.ProductCategory                         
                             where CategoryId = 2 
                             delete from dbo.Category                         
                             where CategoryId = 2  

--////////////////////////////////////////////////////

--insert into dbo.Product values
--                            ('Producto test 6','', 'genericproduct.png')
--                            declare @newid int
--                            SELECT @newid = @@IDENTITY                            
--                            insert into dbo.ProductCategory values(
--                            @newid,0)
                            

--/////////////////////////////////////////////////////////////

--insert into dbo.Product values
--                            ('NEW TEST PRODUCT','', 'genericproduct.png')
--                            declare @newid int
--                            SELECT @newid = @@IDENTITY                            
--                            insert into dbo.ProductCategory values(
--                            @newid,4)

insert into dbo.Product values
                            ('New Test Prod from UI','This is a test from UI lorem ipsum blah', 'genericproduct.png')
                            declare @newid int
                            SELECT @newid = @@IDENTITY                            
                            insert into dbo.ProductCategory values(
                            @newid,4)