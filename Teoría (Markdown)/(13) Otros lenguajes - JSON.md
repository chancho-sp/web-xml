# Otros lenguajes - JSON  

>[!NOTE]
>JSON se ha convertido en el lenguaje universal para el intercambio de datos en la web, superando a XML en la mayoría de escenarios modernos

## 1. Introducción  

JSON (**JavaScript Object Notation**) es el formato estándar para intercambio de datos en aplicaciones modernas. Su simplicidad lo ha posicionado como preferido frente a alternativas más complejas como XML.

### 1.1. Historia y evolución  

1. **2001**: Nace como subconjunto de la sintaxis de objetos en JavaScript
2. **2006**: Primera especificación formal por Douglas Crockford
3. **2013**: Estandarización como ECMA-404
4. **Actualidad**: Usado en el 90% de APIs REST modernas

>[!IMPORTANT]
>Aunque su sintaxis proviene de JavaScript, JSON es completamente independiente del lenguaje

## 2. Conceptos básicos

### 2.1. Comparación con XML
| Característica | JSON | XML |
|---------------|------|-----|
| Tamaño | Compacto | Verboso |
| Legibilidad | Alta | Media |
| Velocidad | Rápido | Lento |
| Esquemas | Opcional | Obligatorio |
| Comentarios | No soporta | Sí soporta |

### 2.2. Estructura fundamental
```
{
  "clave": "valor",
  "numero": 42,
  "activo": true,
  "array": [1, 2, 3],
  "objeto": {
    "prop": "nested" 
  }
}
```

## 3. Integración con JavaScript

### 3.1. Métodos nativos
```
// Serialización
const obj = {nombre: "Juan"};
const json = JSON.stringify(obj);

// Parseo
const original = JSON.parse(json);
```

>[!WARNING]
>JSON no soporta funciones o tipos especiales como Date. Requieren serialización manual

### 3.2. Uso en AJAX
```
fetch('https://api.ejemplo.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 4. Ejemplos avanzados

### 4.1. Configuración compleja
```
{
  "app": {
    "nombre": "MiApp",
    "versión": "2.4.0",
    "entornos": {
      "desarrollo": {
        "apiUrl": "http://dev.api.com",
        "debug": true
      },
      "producción": {
        "apiUrl": "https://api.com",
        "debug": false  
      }
    }
  }
}
```

### 4.2. API REST moderna
```
{
  "metadata": {
    "timestamp": "2023-11-20T12:00:00Z",
    "version": "v2"
  },
  "data": {
    "usuarios": [
      {
        "id": "usr_123",
        "nombre": "Ana",
        "roles": ["admin", "editor"]
      }
    ],
    "paginación": {
      "total": 150,
      "páginaActual": 1,
      "porPágina": 25
    }
  },
  "links": {
    "siguiente": "/api/usuarios?página=2",
    "anterior": null
  }
}
```

## 5. Herramientas esenciales

1. **Validación**: [JSONLint](https://jsonlint.com)
2. **Formateo**: Prettier, JSON Tools (VS Code)
3. **Esquemas**: [JSON Schema](https://json-schema.org)
4. **Seguridad**: sanitize-json (npm)

>[!TIP]
>Usa JSON Schema para validar la estructura de tus datos y evitar errores

## 6. Migración desde XML

### 6.1. Transformación típica
**XML**:
```
<usuario>
  <nombre>Carlos</nombre>
  <edad>28</edad>
  <direccion>
    <ciudad>Madrid</ciudad>
  </direccion>
</usuario>
```

**JSON equivalente**:
```
{
  "usuario": {
    "nombre": "Carlos",
    "edad": 28,
    "direccion": {
      "ciudad": "Madrid"
    }
  }
}
```

## 7. Rendimiento y optimización

1. **Técnicas avanzadas**:
   - Streaming para archivos grandes
   - Compresión GZIP
   - Parsers alternativos (simdjson)

2. **Benchmarks**:
   - JSON: 100ms (1MB)
   - XML: 180ms (1MB)
   - Protocol Buffers: 60ms

## 8. Seguridad crítica

1. **Riesgos comunes**:
   - Inyección JSON
   - XXE (en parsers inseguros)
   - Prototype pollution

2. **Protecciones**:
   ```
   // Node.js example
   const safeJson = JSON.parse(jsonText, (key, value) => {
     if (key === '__proto__') return undefined;
     return value;
   });
   ```

## 9. Futuro de JSON

1. **Extensiones propuestas**:
   - Comentarios (rechazado)
   - Tipos de fecha nativos
   - Referencias circulares

2. **Alternativas emergentes**:
   - JSON5 (extensiones no estándar)
   - YAML (para configuraciones)
   - BSON (binario)

>[!NOTE]
>El equipo de JSON mantiene deliberadamente el formato minimalista, rechazando la mayoría de extensiones propuestas

## 10. Recursos recomendados

1. **Libros**:
   - "JSON at Scale" (O'Reilly)
   - "The JSON Handbook"

2. **Cursos**:
   - "JSON Deep Dive" (Pluralsight)
   - "APIs REST con JSON" (Udemy)

3. **Herramientas**:
   - jq (procesamiento CLI)
   - JSON Server (mock APIs)
   - Postman (testing)

🔹 **Reto práctico**: Implementar un validador de JSON con esquema que verifique:
- Tipos de datos
- Campos requeridos
- Formatos específicos (email, URLs)
