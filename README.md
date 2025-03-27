## Borderlands 3 Build Creator - README

## English

## Description

This project, developed with Next.js, allows users to explore different Borderlands 3 items (Artifacts, Shields, Weapons, Class Mods, and Grenades) and create custom builds for the game's characters (FL4K, Zane, Moze, and Amara).

Key Features:
View Borderlands 3 items (weapons, shields, artifacts, etc.)

Build creator for characters (FL4K, Zane, Moze, Amara)

Save builds in JSON format

Load existing builds from JSON for visualization

Integration with Lootlemon API for item information

Project Setup
Install dependencies:

```bash
npm install
```

Configure environment variables:
Create a .env file in the project root with the following content:

```bash
WEB_URL='http://localhost:3000/api'
NEXT_PUBLIC_WEB_URL='https://www.lootlemon.com'
NEXT_PUBLIC_FRONT='http://localhost:3000'
```

(Replace http://localhost:3000 with your project's actual hosted URL)

Run the project:

```bash

npm run dev
```

The project will be available at http://localhost:3000 (or your configured URL).

Note
This project uses data from Lootlemon, a comprehensive resource for Borderlands 3 information. Visit their site for more details about in-game items.

<br/>

## Español

## Descripción

Este proyecto, desarrollado con Next.js, permite a los usuarios explorar los diferentes items de Borderlands 3 (Artefactos, Escudos, Armas, Class Mods y Granadas) y crear builds personalizadas para los personajes del juego (FL4K, Zane, Moze y Amara).

Características principales:
Visualización de items de Borderlands 3 (armas, escudos, artefactos, etc.)

Creador de builds para personajes (FL4K, Zane, Moze, Amara)

Guardado de builds en formato JSON

Carga de builds existentes desde JSON para su visualización

Integración con la API de Lootlemon para obtener información de items

Configuración del proyecto
Instalar dependencias:

```bash
npm install
```

Configurar variables de entorno:
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

```bash
WEB_URL='http://localhost:3000/api'
NEXT_PUBLIC_WEB_URL='https://www.lootlemon.com'
NEXT_PUBLIC_FRONT='http://localhost:3000'
```

(Reemplaza http://localhost:3000 con la URL donde esté alojado tu proyecto)

Ejecutar el proyecto:

```bash
npm run dev
```

El proyecto estará disponible en http://localhost:3000 (o la URL que hayas configurado).

Nota
Este proyecto utiliza datos de Lootlemon, un completo recurso para información de Borderlands 3. Visita su sitio para más detalles sobre los items del juego.
