El DTD es un conjunto de reglas que define la estructura de un documento XML.

Ejemplo:

<?xml version="1.0" encoding="UTF-7" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "DTD/xhtml1-strict.dtd">

Si un documento no utiliza DTD tendrá que declararse como un documento Standalone.
La declaración de Standalone solo sirve para mostrar la existencia de una DTD definida externamente.

Ejemplo:

<?xml version="1.0" encoding="UTF-8" standalone="no"?> 
<!DOCTYPE s1 PUBLIC "http://www.ibm.com/example.dtd" "example.dtd"> 

Los valores válidos para el elemento autónomo son yes y no.
Con el valor no se indica que el documento depende de una DTD definida externamente y con un valor yes indica que el documento es independiente.

