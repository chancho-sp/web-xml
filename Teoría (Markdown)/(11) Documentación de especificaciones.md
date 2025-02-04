Conceptos básicos:

La documentación de especificaciones de XML define las reglas y estándares para la creación y validación de documentos XML. Sus principales aspectos incluyen:

1. Estructura:
    XML es un lenguaje de marcado basado en etiquetas jerárquicas, que deben estar correctamente anidadas y bien formadas.

2.Espacios de nombres:
    Se utilizan para evitar conflictos de nombres al combinar elementos de diferentes fuentes, usando la declaración xmlns.

3.DTD y XML Schema:
    DTD (Document Type Definition) define la estructura y los elementos permitidos en un documento XML.
    XML Schema (XSD) es una alternativa más avanzada que permite tipos de datos y validaciones más detalladas.

4.Procesamiento y Validación:
    Los documentos XML pueden ser procesados con herramientas como DOM y SAX. También pueden validarse contra un DTD o XSD para garantizar que cumplen con las reglas definidas.

5.Extensibilidad y Compatibilidad:
    XML es extensible, lo que significa que se pueden agregar nuevos elementos sin afectar los documentos existentes. 
    Es ampliamente utilizado en la web, servicios web y almacenamiento de datos estructurados.

En resumen, XML proporciona un formato estructurado, flexible y extensible para representar datos, con reglas bien definidas para su creación, validación e interoperabilidad.
La documentación de especificaciones básicamente define las reglas que deben seguirse al crear documentos XML, en cuanto a estructura, sintaxis y demás.

Criterios más desarrollados:

1. Elementos correctamente anidados

En XML, los elementos deben estar correctamente anidados, es decir, un elemento que abre dentro de otro debe cerrarse antes de que el elemento externo se cierre.

✅ Correcto:

```xml
<persona>
    <nombre>Juan</nombre>
    <apellido>Pérez</apellido>
</persona>

🚫 Incorrecto (cierre incorrecto de <nombre>):

<!--<persona>
    <nombre>Juan
    <apellido>Pérez</apellido>
</persona>-->

Esto causará un error porque <nombre> no tiene una etiqueta de cierre adecuada. Son reglas similares a las de etiquetas de html.

2. Etiquetas de apertura y cierre obligatorias

Cada etiqueta en XML debe tener una etiqueta de cierre correspondiente o ser una etiqueta auto-contenida.

✅ Correcto:

<!--<producto>
    <nombre>Computadora</nombre>
</producto>-->

🚫 Incorrecto (falta la etiqueta de cierre de <nombre>):

<!--<producto>
    <nombre>Computadora
</producto>-->

También se pueden usar etiquetas auto-contenidas para elementos sin contenido, usando / antes de cerrar la etiqueta:

✅ Correcto (etiqueta auto-contenida):

<!--<imagen src="foto.jpg" />-->

3. Atributos con valores entre comillas

Los atributos deben llevar sus valores entre comillas simples (') o dobles (").

✅ Correcto:

<!--<usuario id="123" nombre="Ana" />-->

🚫 Incorrecto (atributo sin comillas):

<!--<usuario id=123 nombre=Ana />-->

Esto generará un error de sintaxis.

4. Uso opcional de DTD o XML Schema para validación

Para garantizar que un documento XML cumpla con una estructura específica, se puede usar una DTD (Document Type Definition) o un XML Schema (XSD).

✅ Ejemplo de un documento XML validado con DTD:
DTD (definiendo la estructura):

<!--<!DOCTYPE persona [
    <!ELEMENT persona (nombre, edad)>
    <!ELEMENT nombre (#PCDATA)>
    <!ELEMENT edad (#PCDATA)>
]>-->

Documento XML válido con esta DTD:

<!--<persona>
    <nombre>Lucía</nombre>
    <edad>30</edad>
</persona>-->

Si el documento XML no sigue esta estructura, será inválido.

5. Sensibilidad a mayúsculas y minúsculas

XML es sensible a mayúsculas y minúsculas, lo que significa que <Nombre> y <nombre> son elementos diferentes.

✅ Correcto:

<!--<Persona>
    <Nombre>Pedro</Nombre>
</Persona>-->

🚫 Incorrecto (las etiquetas deben coincidir exactamente):

<!--<Persona>
    <nombre>Pedro</Nombre>
</Persona>-->

Esto causará un error porque <nombre> y <Nombre> no coinciden.

6. Uso de espacios de nombres (namespaces)

Cuando se combinan diferentes fuentes de datos en XML, los espacios de nombres ayudan a evitar conflictos.

✅ Ejemplo de espacio de nombres:

<!--<catalogo xmlns:libro="http://example.com/libros">
    <libro:titulo>XML para principiantes</libro:titulo>
</catalogo>-->

Aquí, el prefijo libro: se asocia con la URI http://example.com/libros, asegurando que el elemento titulo pertenece a ese contexto.

En conclusión
Estas reglas aseguran que un documento XML sea bien formado y, si se requiere validación, también válido. 
Siguiéndolas, se garantiza que XML pueda ser procesado correctamente por diferentes sistemas y aplicaciones.
