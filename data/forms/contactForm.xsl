<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>Formulario de Usuarios</title>
                <link rel="stylesheet" type="text/css" href="../css/usuario.css"/>
            </head>
            <body>
                <h1>Formulario de Usuarios</h1>
                <xsl:for-each select="Formulario/Usuario">
                    <div class="usuario">
                        <h2><xsl:value-of select="Nombre"/> <xsl:value-of select="Apellidos"/></h2>
                        <p><strong>Descripción:</strong> <xsl:value-of select="Descripcion"/></p>
                        <p><strong>Twitter:</strong> <xsl:value-of select="RedesSociales/Twitter"/></p>
                        <p><strong>Instagram:</strong> <xsl:value-of select="RedesSociales/Instagram"/></p>
                        <p><strong>LinkedIn:</strong> <xsl:value-of select="RedesSociales/LinkedIn"/></p>
                        <p><strong>GitHub:</strong> <xsl:value-of select="RedesSociales/GitHub"/></p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>