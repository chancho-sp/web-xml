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
