Etiquetas en XML:

Las etiquetas constituyen la base de XML. Definen el alcance de un elemento en el documento y también se pueden utilizar para insertar comentarios, declarar ajustes y para insertar instrucciones especiales.

Las etiquetas XML se pueden clasificar de la siguiente manera:

-Etiquetas de inicio:

Cada elemento no-vacío en XML es marcada por una etiqueta de inicio. Por ejemplo:

<address>

-Etiquetas de cierre:

Cada elemento que tenga una etiqueta de inicio ha de terminar con una etiqueta de cierre. Por ejemplo:

</address>

-Etiquetas vacias:

Los elementos que no tienen contenido se denominan vacios. Un vacio puede ser representado de dos maneras:

1.Con una etiqueta de inicio seguida inmediatamente de una etiqueta de cierre:

<hr></hr>

2.Con una etiqueta de elemento vacio, de la siguiente manera:

<hr />

Reglas de las etiquetas XML:

1.Son case-sensitive, por lo que las etiquetas, tanto de inicio como de cierre deberan ser escritas ambas de la misma manera.

Incorrecto:

<address>Valle de los Caidos</Address>

Correcto:

<address>Valle de los Caidos</address>

2.Deben de cerrarse en orden. Como en el ejemplo:

<elemento_externo>
	<elemento_interno>
		Juanma Castaño
	</elemento_interno>
</elemento_externo>

Instrucciones de procesamiento:

En XML, una instruccion de procesamiento sirve para indicar cierta informacion al programa que procese dicho documento. Las instrucciones se escriben empezando con “<?” y finalizando con “?>”

Ejemplo:

<?xml-stylesheet type="text/css" href="estilo-animales.css"?>

Esta instrucción serviría para asociar un archivo CSS.

Referencias a entidades:

En XML existen algunos caracteres que son especiales por el significado que tienen y para hacer uso de estos se pueden usar las siguientes referencias:

Carácter 
Referencia 
< (menor que)
&lt;
> (mayor que)
&gt;
“ (comilla doble)
&quot;
‘ (comilla simple)
&apos;
& (ampersand)
&amp;


Explicación:

“<” es problemático porque indica el comienzo de una etiqueta.

“>” este carácter si puede utilizarse y no sería incorrecto utilizarlo, pero aun así se recomienda hacer uso de su referencia.

Si el valor de un atributo se escribe entre comillas dobles, dicho valor no podrá contener dicho carácter. Por ejemplo:

<dato caracter="comilla doble(")"/>

Es por ello que hay que utilizar la referencia: 

<dato caracter="comilla doble(&quot;)"/>

De igual modo ocurre con la comilla simple:

Incorrecto:

<dato caracter='comilla simple(')'/>

Correcto:

<dato caracter='comilla simple(&apos)'/>

<dato caracter='comilla simple(&apos;)'/>


