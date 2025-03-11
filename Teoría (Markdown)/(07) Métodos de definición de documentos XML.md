Métodos de definición de documentos XML

[Métodos de definición de documentos XML (1).pdf](https://github.com/user-attachments/files/19196077/Metodos.de.definicion.de.documentos.XML.1.pdf)
Aqui esta todo mejor organizado y mejor visualmente

¿Qué són?
Son formas en que se pueden definir y estructurar los documentos XML para garantizar que sigan ciertas reglas y esquemas. Hay dos métodos principales:



1. DTD (Definición de Tipo de Documento)

Es una forma antigua de definir la estructura de un documento XML.
Especifica qué elementos y atributos están permitidos en un documento XML.
No es compatible con XML Namespaces.
Se define dentro del documento XML o en un archivo externo con extensión .dtd.
Usa una sintaxis diferente a la de XML.


Ejemplo de DTD:




! Todo lo que está dentro de los corchetes [ ] son las reglas del DTD.

! Define que el elemento persona debe contener los elementos nombre y edad en ese orden.

! #PCDATA (Parsed Character Data) significa que el contenido será texto legible.





2. XML Schema (XSD - XML Schema Definition)
Es un estándar más avanzado y flexible que DTD.
Usa una sintaxis basada en XML, lo que facilita su lectura y procesamiento.
Soporta tipos de datos (números, fechas, booleanos, etc.).
Es compatible con XML Namespaces.

Ejemplo de XSD:
! <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
Declara que este archivo es un XML Schema (XSD).
El atributo xmlns:xs define el namespace de XML Schema
!<xs:element name="persona">
Declara un elemento llamado persona.
!<xs:complexType>
Indica que persona es un elemento complejo, es decir, contiene otros elementos dentro.
!<xs:sequence>
Define que los elementos dentro de persona deben aparecer en un orden específico.
!<xs:element name="nombre" type="xs:string"/>
Declara que nombre es un subelemento de persona.
Su tipo de dato es xs:string, lo que significa que debe contener texto.
! Cierre de etiquetas (</xs:sequence>, </xs:complexType>, </xs:element>, </xs:schema>)
Se cierran las estructuras definidas.



Diferencias clave entre DTD y XSD

Característica
DTD
XSD
Sintaxis
Propia (no XML)
Basada en XML
Soporte de tipos de datos
No
Sí (números, fechas, etc.)
Namespaces
No
Sí
Expresividad
Limitada
Más flexible y detallada



Conclusión
Los métodos de definición de documentos XML son esenciales para validar la estructura y contenido de los documentos XML. Aunque DTD es más simple, XSD es más potente y recomendado para aplicaciones modernas.

Cosas a saber:
¿Qué son los Namespaces en XML?
Los Namespaces (espacios de nombres) en XML sirven para evitar conflictos cuando se usan elementos y atributos con el mismo nombre pero que provienen de diferentes esquemas o contextos.



Elaboración de documentos XML válidos y bien formados
Cuando trabajamos con XML, es importante asegurarnos de que los documentos sean bien formados y, en algunos casos, también válidos. Veamos qué significa cada uno y cómo garantizarlo.

