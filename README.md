# Can I Hack You Demo

Repositorio de demostracion educativa para simular vectores comunes de ejecucion automatica en proyectos de desarrollo.

Este proyecto **NO** esta pensado para uso malicioso. Su objetivo es ayudarte a identificar riesgos reales en cadena de suministro y validar mitigaciones de forma controlada.

## Relacion con la plataforma

- Repositorio demo (este): https://github.com/emigimenezj/can-i-hack-you-demo
- Plataforma de visualizacion en tiempo real: https://github.com/emigimenezj/can-i-hack-you-platform

El demo genera eventos simulados y la plataforma los muestra en vivo usando un Session ID.

## Objetivo educativo

Este repositorio permite reproducir 3 tipos de ataques simulados:

1. **npm lifecycle scripts**
   Ejecucion automatica en `preinstall`, `postinstall` y `prepare`.

2. **Plugin de ESLint**
   Ejecucion automatica de codigo al analizar archivos.

3. **Tarea automatica de VSCode**
   Ejecucion automatica al abrir el proyecto mediante configuracion de workspace.

## Requisitos

- Node.js 22+
- pnpm
- Git
- (Opcional) VSCode para probar el vector de tasks

## Flujo de uso

1. Entra a la plataforma y copia tu Session ID.
2. Clona este repositorio.
3. Vincula el proyecto local a tu Session ID.
4. Ejecuta acciones de prueba (instalar dependencias, lint, abrir en VSCode, etc.).
5. Observa los eventos en tiempo real en la pagina de sesion de la plataforma.

## Configuracion rapida

### 1) Clonar el demo

```bash
git clone https://github.com/emigimenezj/can-i-hack-you-demo.git can-i-hack-you-test
cd can-i-hack-you-test
```

### 2) Vincular sesion local

```bash
git config --local can-i-hack-you.session TU_SESSION_ID
```

### 3) Instalar dependencias

```bash
pnpm install
```

## Que hace la vinculacion

El comando de vinculacion solo guarda una clave local de Git en este repositorio:

- clave: `can-i-hack-you.session`
- valor: `TU_SESSION_ID`

Esto no ejecuta ataques ni scripts por si mismo. Solo asocia el proyecto local con tu sesion en la plataforma para enrutar eventos correctamente.

## Vectores incluidos

### 1) npm: preinstall, postinstall, prepare

Se simula ejecucion automatica durante instalacion o preparacion del proyecto.

**Mitigacion recomendada:**

- Revisar scripts en `package.json`
- Validar dependencias antes de instalar
- Ejecutar instalaciones en entornos aislados cuando el origen no es confiable

### 2) ESLint plugin automatic execution

Se simula un plugin de ESLint que ejecuta logica al correr el linter.

**Mitigacion recomendada:**

- Usar plugins auditados
- Fijar versiones
- Revisar configuracion de linting en repositorios nuevos

### 3) VSCode task automatic execution

Se simula una tarea automatica en la carpeta `.vscode` que puede correr al abrir el proyecto.

**Mitigacion recomendada:**

- Revisar `.vscode/tasks.json` y configuracion de workspace
- Abrir primero en modo restringido
- Desactivar ejecucion automatica de tareas en repositorios no auditados

## Seguridad y etica

Este proyecto es educativo y de concientizacion.
No debe utilizarse para comprometer sistemas, usuarios o entornos sin autorizacion explicita.

## Licencia

MIT.
