Conceptos básicos:

1.Definición:
Los espacios de nombres en XML sirven para evitar conflictos de nombres cuando se combinan documentos de diferentes fuentes. 
Se definen mediante la declaración xmlns, que asocia un prefijo con una URI única.

2.Referencia:
Una vez definido, un espacio de nombres se puede utilizar en los elementos y atributos XML para diferenciarlos de otros con el mismo nombre pero pertenecientes a diferentes contextos.

3.Prefijos:
Los espacios de nombres pueden utilizar prefijos personalizados para referirse a ellos de manera más sencilla en el documento. Por ejemplo:

    <catalog xmlns:book="http://example.com/books">
        <book:title>XML Guide</book:title>
    </catalog>

    Aquí, book: es el prefijo asociado con el espacio de nombres http://example.com/books.

En resumen, los espacios de nombres ayudan a organizar y evitar conflictos en documentos XML al proporcionar identificadores únicos para los elementos y atributos.

Información más desarrollada: 

https://www.ibm.com/docs/es/dmrt/9.5?topic=schemas-xml-namespaces (español)
https://www.w3.org/TR/REC-xml-names/ (inglés)

Los espacios de nombres en XML (XML namespaces) se utilizan para evitar conflictos de nombres entre elementos y atributos en un documento XML. Permiten asignar un identificador único a cada elemento y atributo, incluso si tienen el mismo nombre pero pertenecen a diferentes vocabularios o dominios.

Contenidos del artículo

    8. Espacios de nombres en XML
    Ejercicio propuesto

Los espacios de nombres se definen utilizando una sintaxis especial en XML. El formato típico de un espacio de nombres es:
<elemento xmlns:prefijo="URI del espacio de nombres">
   ...
</elemento>

Donde prefijo es un identificador único que se utiliza para hacer referencia al espacio de nombres dentro del documento, y URI del espacio de nombres es una cadena que identifica de manera única el espacio de nombres.

A continuación, se muestra un ejemplo de uso de espacios de nombres en XML:
<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:ns1="http://www.example.com/ns1" xmlns:ns2="http://www.example.com/ns2">
   <ns1:elemento>Contenido del elemento 1</ns1:elemento1>
   <ns2:elemento>Contenido del elemento 2</ns2:elemento2>
</root>

En este ejemplo, se definen dos espacios de nombres utilizando los prefijos ns1 y ns2. Los elementos <elemento> pertenecen a diferentes espacios de nombres y se distinguen por el prefijo utilizado.

Ejemplo:
<?xml version="1.0" encoding="UTF-8"?>
<libros xmlns:teoria="http://www.ejemplo.com/teoria" xmlns:ejercicios="http://www.ejemplo.com/ejercicios">
   <teoria:libro>
       <teoria:autor>John Smith</teoria:autor>
       <teoria:editorial>Editorial ABC</teoria:editorial>
   </teoria:libro>
   <ejercicios:libro>
       <ejercicios:autor>Laura Johnson</ejercicios:autor>
       <ejercicios:editorial>Editorial XYZ</ejercicios:editorial>
   </ejercicios:libro>
</libros>

En el ejemplo anterior:

    El espacio de nombres teoria se utiliza para calificar elementos relacionados con libros de teoría. Por ejemplo, <teoria:libro>, <teoria:autor>, <teoria:editorial>.
    El espacio de nombres ejercicios se utiliza para calificar elementos relacionados con libros de ejercicios. Por ejemplo, <ejercicios:libro>, <ejercicios:autor>, <ejercicios:editorial>.

Esto permite que los elementos con los mismos nombres, como <libro>, <autor>, y <editorial>, sean distinguidos y asociados con su contexto específico. Sin los espacios de nombres, podría haber ambigüedad si se utilizan los mismos nombres para elementos en diferentes partes del documento XML.

Veamos otro ejemplo más visual que representa vehículos con diferentes especificaciones según si es un coche o una moto:
<?xml version="1.0" encoding="UTF-8"?>
<vehiculos xmlns:coche="http://www.example.com/coche" xmlns:moto="http://www.example.com/moto">
   <coche:vehiculo>
      <coche:marca>Toyota</coche:marca>
      <coche:modelo>Corolla</coche:modelo>
      <coche:potencia>150 HP</coche:potencia>
   </coche:vehiculo>
   <moto:vehiculo>
      <moto:marca>Honda</moto:marca>
      <moto:modelo>CBR 600</moto:modelo>
      <moto:cilindrada>600 cc</moto:cilindrada>
      <moto:aceleracion>0-60 mph en 3.2 segundos</moto:aceleracion>
   </moto:vehiculo>
</vehiculos>

Este ejemplo representa un documento XML que describe diferentes tipos de vehículos, en este caso, coches y motocicletas, utilizando espacios de nombres XML (xmlns).

    La primera línea <?xml version="1.0" encoding="UTF-8"?> es una declaración XML estándar que especifica la versión y codificación del documento.
    <vehiculos> es el elemento raíz del documento XML. Dentro de este elemento, se definen dos espacios de nombres XML utilizando los atributos xmlns:coche y xmlns:moto. Esto significa que los elementos que comienzan con coche: y moto: están asociados a los espacios de nombres http://www.example.com/coche y http://www.example.com/moto, respectivamente.
    <coche:vehiculo> es un elemento que representa un coche. Se utiliza el prefijo coche para indicar que pertenece al espacio de nombres http://www.example.com/coche. Dentro de este elemento, hay tres subelementos que describen las propiedades del coche: marca, modelo, y potencia.
    <moto:vehiculo> es otro elemento que representa una motocicleta. Similar al coche, se utiliza el prefijo moto para indicar que pertenece al espacio de nombres http://www.example.com/moto. Este elemento tiene cuatro subelementos que describen las propiedades de la motocicleta: marca, modelo, cilindrada, y aceleración.

