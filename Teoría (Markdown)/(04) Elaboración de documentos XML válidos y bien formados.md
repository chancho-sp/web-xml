Para crear un documento XML bien formado se han de cumplir ciertos requisitos:

-Si un documento XML no utiliza DTD, tendrá que comenzar con una Declaración de Documento Standalone.

-Todos los elementos han de tener una etiqueta de principio y fin.

-Todos los valores de los atributos deben ir entrecomillados.

-Cualquier elemento VACÍO(ej. <IMG>, <HR>, <BR>, etc…) debe terminar con ‘/>’ o debes añadir les una etiqueta de fin.

-No deben haber caracteres especiales aislados (< o &) en el texto, se debe usar &lt y &amp, si ocurre la secuencia ]]> debe darse como ]]&gt ya que ]]> representa el final de las secciones CDATA.

-Los elementos han de estar correctamente anidados de manera jerárquica y respetando un orden.

-Los ficheros bien formados sin DTD pueden utilizar atributos en sus elementos pero han de estar en formato CDATA.

Según las especificaciones del W3C, un documento XML está bien formado si:

-Cumple con la regla denominada “document”.

-Respeta todas las restricciones de buena formación dadas en la especificación.

-Cada una de las entidades analizadas que se referencia directa o indirectamente en el documento está bien formada.

Para cumplir la regla “document” el documento ha de:

-Contener uno o mas elementos.

-Hay exactamente un elemento, llamado raíz, del cual ninguna parte aparece en el contenido de ningún otro elemento.

-Para el resto de elementos, los elementos delimitados por etiquetas de principio y fin han de anidarse adecuadamente mutuamente.
