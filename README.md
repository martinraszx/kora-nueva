<p align="center">
  <img src="https://github.com/martinraszx/kora-Felipe/blob/f7757c945bf8df5128b79cf1f0ec2d974299a71a/assets/logo-horizontal.png?raw=true" width="400" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"/>
</p>


# Kora 

### **Proyecto Integrador | Ingeniería Civil en Informática**
**Universidad de Los Lagos — Sede Chiloé, Chile**

---

## 📱 ¿Qué es Kora?
**Kora** es una aplicación móvil diseñada como una herramienta de asistencia y validación emocional constante. Su propósito fundamental es ayudar a estudiantes de educación secundaria y universitaria a **identificar conductas de control, manipulación psicológica y dinámicas tóxicas** dentro de sus relaciones de pareja. 

A través de cuestionarios breves y dinámicos supervisados académicamente, la app ofrece un diagnóstico situacional inmediato para evitar el deterioro emocional de los jóvenes y prevenir situaciones de peligro extremo o ideación suicida.

---

## 🚀 Características Principales e Innovación

* **Privacy by Design (Privacidad desde el Diseño):** El blindaje legal y la seguridad del usuario son la máxima prioridad. El procesamiento de datos se realiza de forma **100% local en el dispositivo**. La app no recolecta nombres, correos ni almacena historiales en servidores externos, por lo que **no deja rastro digital** que pueda ser descubierto por terceros o parejas controladoras.
* **Violentometro:** Un sistema que clasifica las conductas evaluadas en categorías objetivas con sus respectivos niveles. Esto ayuda al usuario a romper ciclos de *gaslighting* o normalización del abuso.
* **Puente de Seguridad:** Si el sistema detecta un riesgo inminente, actúa automáticamente como un canal directo hacia recursos de apoyo profesional y líneas de emergencia institucionales y nacionales.
* **Identidad Neutra y Discreta:** El nombre "Kora" (que evoca el *Core* o núcleo de identidad) fue seleccionado estratégicamente para que la app pase desapercibida como una herramienta genérica en el smartphone del usuario en caso de situaciones de riesgo.

---

## 🛠️ Metodología de Desarrollo

El desarrollo de este proyecto se rige bajo el marco metodológico internacional **CDIO (Concebir, Diseñar, Implementar, Operar)**, estructurando nuestras 5 etapas críticas en un ciclo de ingeniería incremental y ordenado:

### 1. Concebir (Conceive)
Esta fase define las necesidades del usuario, los requisitos del sistema y la organización estratégica del proyecto.
* **Levantamiento de Datos:** Investigación inicial sobre dinámicas de relaciones de pareja en entornos estudiantiles. Contamos con el respaldo y validación técnica de la **Dirección de Género** para asegurar que el enfoque conceptual de las rutas de apoyo sea seguro y asertivo.
* **Iteración Conceptual:** Tras la fase de operación, los datos recolectados se reevalúan en esta etapa para concebir nuevas mejoras funcionales.

### 2. Diseñar (Design)
Enfocada en la arquitectura técnica, la experiencia de usuario y la gestión interna del equipo de desarrollo.
* **Estructuración y Organización:** Definición del plan de trabajo, establecimiento de roles internos del grupo y asignación de responsabilidades específicas para la construcción del software. Se modelan los diagramas de flujo y las pantallas iniciales (wireframes) de la interfaz de usuario.

### 3. Implementar (Implement)
Traducción del diseño en un producto mínimo viable (MVP) mediante ingeniería de software.
* **Etapa 3: Codificación y Desarrollo:** Creación de la interfaz de usuario (UI/UX) utilizando **React Native** y **Expo Go**. Programación de la lógica algorítmica local, almacenamiento seguro de datos y el despliegue del sistema confidencial de las rutas de escape.

### 4. Operar (Operate)
Puesta en marcha del sistema en el entorno objetivo para evaluar su impacto y comportamiento real.
* **Fase de Pruebas en Entornos Reales:** Despliegue guiado de la aplicación con estudiantes de liceos y de la Universidad para evaluar de manera presencial la usabilidad de la interfaz, el nivel de confidencialidad percibido y la efectividad práctica de las rutas de escape ante situaciones críticas.

### 5. Ciclo de Mejora Continua (Post-Operación)
* **Implementación de Mejoras:** Procesamiento de los comentarios, fallos detectados y métricas obtenidas durante la fase de operación para iterar la interfaz, optimizando el software antes de su liberación definitiva.
---
## 📊 Viabilidad del Software

* **Técnica:** La aplicación es ligera, rápida y compatible con la mayoría de los sistemas operativos móviles actuales debido a que ejecuta sus algoritmos de manera nativa y local.
* **Legal:** Riesgo jurídico mínimo ya que está exenta de las complejidades de la ley de protección y custodia de datos sensibles al no utilizar registros en la nube.
* **Operativa y Ética:** El contenido técnico y las escalas metodológicas cuentan con el respaldo de la Carrera de Psicología y la Dirección de Género de la Universidad de Los Lagos.

---
## 👥 Equipo de Trabajo y Roles

| Integrante | Roles y Responsabilidades |
| :--- | :--- |
| **Martín Aguirre** | Diseñador UI/UX & Creación de código |
| **Ignacio Sáez** | Diseñador UI/UX & Creación de código |
| **Felipe Levicán** | Diseñador UI/UX & Creación de código |
| **Eduard Contreras** | Testeador de la aplicación & Encargado de Informe en LaTeX |

---
## Instalación
# Windows

Este proyecto de Kora es una aplicación móvil desarrollada utilizando **React Native** y el ecosistema **Expo Go**. A continuación, se detalla el flujo de instalación completo junto con el catálogo de comandos necesarios para administrar, depurar y ejecutar el servidor de desarrollo en entornos Windows.

---

## 1. Prerrequisitos del Sistema

Antes de iniciar con los comandos, asegúrese de contar con las siguientes herramientas instaladas:

### En la Computadora (Windows)
1. **Node.js (Versión LTS recomendada):** Incluye automáticamente `npm` (Node Package Manager). Descárguelo en [nodejs.org](https://nodejs.org/).
2. **Git:** Necesario para el control de versiones y la clonación del repositorio. Descárguelo en [git-scm.com](https://git-scm.com/).
3. **Editor de Código:** Se sugiere [Visual Studio Code](https://code.visualstudio.com/).

### En el Dispositivo Móvil (Smartphone)
* Descargue e instale la aplicación gratuita **Expo Go** desde la Google Play Store (Android) o la App Store (iOS).

> ⚠️ **REQUISITO CRÍTICO DE RED:** La computadora con Windows y el dispositivo móvil con Expo Go **deben estar conectados exactamente a la misma red Wi-Fi** local.

---

## 2. Instalación Paso a Paso

Abra la terminal de Windows (PowerShell, CMD o terminal de VS Code) y ejecute los siguientes comandos en orden:

```bash
# 1. Clonar el repositorio remoto
git clone [https://github.com/martinraszx/kora-nueva.git](https://github.com/martinraszx/kora-nueva.git)

# 2. Acceder a la carpeta del proyecto
cd kora-nueva

# 3. Instalar todas las dependencias del archivo package.json
npm install

# 4. Inicio Estándar
npm start

```
# Linux

## 1. Prerrequisitos del Sistema

A diferencia de otros sistemas operativos, los entornos Linux requieren herramientas específicas de gestión de versiones para evitar conflictos de permisos de administrador (`sudo`) al instalar paquetes globales. Asegúrese de contar con lo siguiente:

### En la Computadora (Linux)
* **Node.js (Versión LTS recomendada):** Se sugiere instalarlo a través de `nvm` (Node Version Manager) para gestionar las versiones de JavaScript de manera segura a nivel de usuario.
* **Git:** Herramienta esencial de control de versiones para clonar e interactuar con el repositorio.
* **Manejador de paquetes npm:** Incluido automáticamente al instalar Node.js.

---

## 2. Configuración Esencial en Linux (Paso Previo Obligatorio)

Por defecto, los sistemas operativos Linux limitan la cantidad de archivos que un programa puede vigilar en tiempo real a través del sistema `inotify`. Debido al gran volumen de dependencias y módulos que maneja React Native, si no expande este límite, el comando de inicio fallará con el error `ENOSPC: System limit for number of file watchers reached`.

Para solucionarlo de forma permanente en su máquina, abra la terminal y ejecute los siguientes comandos:

```bash
# 1. Registrar el nuevo límite máximo de vigilantes en el archivo de configuración del sistema
echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf

# 2. Cargar y aplicar los cambios en el kernel de forma inmediata
sudo sysctl -p

# Paso 1: Clonar el repositorio remoto desde GitHub
git clone [https://github.com/martinraszx/kora-nueva.git](https://github.com/martinraszx/kora-nueva.git)

# Paso 2: Trasladar la ruta de la terminal a la carpeta raíz del proyecto
cd kora-nueva

# Paso 3: Descargar e instalar los paquetes definidos en el archivo package.json
npm install

# Inicio Estandar
npm start

```
---
## 📊 Viabilidad del Software

* **Técnica:** La aplicación es ligera, rápida y compatible con la mayoría de los sistemas operativos móviles actuales debido a que ejecuta sus algoritmos de manera nativa y local.
* **Legal:** Riesgo jurídico mínimo ya que está exenta de las complejidades de la ley de protección y custodia de datos sensibles al no utilizar registros en la nube.
* **Operativa y Ética:** El contenido técnico y las escalas metodológicas cuentan con el respaldo de la Carrera de Psicología y la Dirección de Género de la Universidad de Los Lagos.

_Proyecto desarrollado en el Departamento de Ciencias de la Ingeniería de la Universidad de Los Lagos, Sede Chiloé._
